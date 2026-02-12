import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/cart/CartSheet";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full transition-all duration-300">
            <div className="absolute inset-x-0 top-0 h-24 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm rounded-b-[2.5rem] supports-[backdrop-filter]:bg-white/60 z-[-1]"></div>
            <div className="container flex h-24 items-center justify-between relative px-6 md:px-12">

                {/* Mobile Menu Trigger */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col gap-6 mt-8">
                                <Link href="/" className="flex items-center gap-3">
                                    <img src="/logo.png" alt="Amicizia" className="h-10 w-10 object-contain" />
                                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                                        Amicizia
                                    </span>
                                </Link>
                                <div className="flex flex-col gap-4 text-lg">
                                    <a href="/" className="hover:text-primary transition-colors font-medium">Home</a>
                                    <Link href="/products" className="hover:text-primary transition-colors font-medium">Products</Link>
                                    <a href="/about" className="hover:text-primary transition-colors font-medium">About Us</a>
                                    <Link href="/contact" className="hover:text-primary transition-colors font-medium">Contact</Link>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Logo Section - Centered on Mobile, Left on Desktop but balanced */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-12 w-12 md:h-14 md:w-14 transition-transform group-hover:scale-110 duration-300">
                        <img src="/logo.png" alt="Amicizia Life Science" className="h-full w-full object-contain drop-shadow-md" />
                    </div>
                    <div className="hidden md:flex flex-col">
                        <span className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                            Amicizia Life Science
                        </span>
                        <span className="text-xs text-muted-foreground tracking-widest uppercase">Private Limited</span>
                    </div>
                </Link>

                {/* Desktop Navigation - Centered Pill */}
                <nav className="hidden lg:flex items-center gap-1 bg-white/50 px-2 py-1.5 rounded-full border border-white/40 shadow-sm backdrop-blur-md absolute left-1/2 -translate-x-1/2">
                    {[
                        { name: 'Home', href: 'https://amicizialifescience.com/' },
                        { name: 'Products', href: '/products' },
                        { name: 'About Us', href: 'https://amicizialifescience.com/' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            target={item.href.startsWith('http') ? "_blank" : undefined}
                            className="px-5 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-white hover:shadow-sm transition-all duration-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <CartSheet />
                    <Link href="/contact" className="hidden md:block">
                        <Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 bg-gradient-to-r from-primary to-teal-600 border-none">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
