import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log('=== Email API Called ===');
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    console.log('SALES_EMAIL:', process.env.SALES_EMAIL);

    const { customerInfo, cartItems } = await request.json();
    console.log('Customer info received:', customerInfo);
    console.log('Cart items count:', cartItems?.length);

    // Validate input
    if (!customerInfo?.name || !customerInfo?.email || !cartItems?.length) {
      console.error('Validation failed:', { customerInfo, cartItemsLength: cartItems?.length });
      return NextResponse.json(
        { error: 'Missing required information' },
        { status: 400 }
      );
    }

    // Check if Resend API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Generate email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9fafb; }
            .info-section { margin-bottom: 20px; }
            .info-label { font-weight: bold; color: #1f2937; }
            .product-list { list-style: none; padding: 0; }
            .product-item { background: white; padding: 15px; margin-bottom: 10px; border-left: 4px solid #2563eb; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Order Inquiry</h1>
              <p>Amicizia Life Science</p>
            </div>
            
            <div class="content">
              <div class="info-section">
                <p class="info-label">Customer Details:</p>
                <p><strong>Name:</strong> ${customerInfo.name}</p>
                <p><strong>Email:</strong> ${customerInfo.email}</p>
                <p><strong>Phone:</strong> ${customerInfo.phone || 'Not provided'}</p>
              </div>

              <div class="info-section">
                <p class="info-label">Requested Products:</p>
                <ul class="product-list">
                  ${cartItems.map((item: any) => `
                    <li class="product-item">
                      <strong>${item.productName}</strong><br/>
                      SKU: ${item.skuName}<br/>
                      Quantity: ${item.quantity}
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div class="info-section">
                <p class="info-label">Summary:</p>
                <p>Total Items: ${cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0)}</p>
                <p>Number of Products: ${cartItems.length}</p>
              </div>
            </div>

            <div class="footer">
              <p>This inquiry was submitted via the Amicizia Life Science product catalog.</p>
              <p>Please respond to the customer within 24 hours.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    console.log('Attempting to send email via Resend...');

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Amicizia Orders <onboarding@resend.dev>',
      to: [process.env.SALES_EMAIL || 'info@amicizialifescience.com'],
      subject: `New Order Inquiry from ${customerInfo.name}`,
      html: emailHtml,
      replyTo: customerInfo.email,
    });

    if (error) {
      console.error('Resend API error:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message },
        { status: 500 }
      );
    }

    console.log('Email sent successfully! Message ID:', data?.id);
    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error('Server error:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
