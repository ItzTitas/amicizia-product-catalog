'use client';

import { useState } from 'react';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from '@/components/ui/sheet';
import { ShoppingCart, Trash2, Plus, Minus, Package2 } from 'lucide-react';
import Image from 'next/image';

export function CartSheet() {
    const { items, removeItem, updateQuantity, clearCart, isOpen, setIsOpen } = useCartStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const formData = new FormData(e.target as HTMLFormElement);
        const customerInfo = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
        };

        const cartItems = items.map(item => ({
            productName: item.productName,
            skuName: item.skuName,
            quantity: item.quantity,
        }));

        try {
            const response = await fetch('/api/send-inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ customerInfo, cartItems }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send inquiry');
            }

            setIsSubmitting(false);
            setIsSuccess(true);
            clearCart();
        } catch (err) {
            setIsSubmitting(false);
            setError(err instanceof Error ? err.message : 'Failed to send inquiry. Please try again.');
        }
    };

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        if (!open) {
            setTimeout(() => setIsSuccess(false), 300); // Reset success state after closing
        }
    };

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Sheet open={isOpen} onOpenChange={handleOpenChange}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                            {totalItems}
                        </span>
                    )}
                    <span className="sr-only">Inquiry Cart</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
                <SheetHeader>
                    <SheetTitle>Order Inquiry</SheetTitle>
                    <SheetDescription>
                        Review your selected products and submit an inquiry. We will contact you to confirm the order.
                    </SheetDescription>
                </SheetHeader>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center flex-1 space-y-4">
                        <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold">Inquiry Sent!</h3>
                        <p className="text-center text-muted-foreground">
                            Thank you for your interest. Our sales team has received your inquiry and will be in touch shortly.
                        </p>
                        <Button onClick={() => setIsOpen(false)} className="mt-4">
                            Close
                        </Button>
                    </div>
                ) : items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center flex-1 space-y-4 text-muted-foreground">
                        <ShoppingCart className="h-12 w-12 opacity-20" />
                        <p>Your inquiry list is empty.</p>
                        <Button variant="link" onClick={() => setIsOpen(false)}>
                            Browse Products
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto py-6">
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div key={item.skuId} className="flex gap-4 border-b pb-4">
                                        <div className="h-16 w-16 relative bg-muted rounded overflow-hidden flex-shrink-0 border">
                                            {item.image ? (
                                                <Image
                                                    src={item.image}
                                                    alt={item.productName}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                                                    <Package2 className="h-6 w-6 opacity-20" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-sm">{item.productName}</h4>
                                            <p className="text-sm text-muted-foreground">{item.skuName} ({item.unitSize})</p>

                                            <div className="flex items-center gap-2 mt-2">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-6 w-6"
                                                    onClick={() => updateQuantity(item.skuId, Math.max(1, item.quantity - 1))}
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </Button>
                                                <span className="text-sm w-4 text-center">{item.quantity}</span>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-6 w-6"
                                                    onClick={() => updateQuantity(item.skuId, item.quantity + 1)}
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </Button>
                                                <div className="flex-1"></div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-6 w-6 text-destructive"
                                                    onClick={() => removeItem(item.skuId)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" name="name" placeholder="Dr. Smith" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" name="phone" placeholder="+91..." required type="tel" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" placeholder="contact@clinic.com" required type="email" />
                                </div>

                                {error && (
                                    <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-red-600">
                                        {error}
                                    </div>
                                )}

                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                </Button>
                            </form>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
}
