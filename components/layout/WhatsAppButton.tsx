'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
    const phoneNumber = '918452006959'; // No + or spaces
    const message = 'Hello! I would like to inquire about your products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="font-medium hidden group-hover:inline-block">Contact Us</span>
        </a>
    );
}
