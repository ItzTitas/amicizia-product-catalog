import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/cart/CartSheet";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Package2 className="h-6 w-6" />
                                    <span className="sr-only">Amicizia Life Science</span>
                                </Link>
                                <a href="https://amicizialifescience.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                    Home
                                </a>
                                <Link href="/products" className="hover:text-primary">
                                    Products
                                </Link>
                                <a href="https://amicizialifescience.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                    About Us
                                </a>
                                <Link href="/contact" className="hover:text-primary">
                                    Contact
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>

                    <Link href="/" className="flex items-center space-x-2">
                        <img src="/logo.png" alt="Amicizia Life Science" className="h-10 w-auto mr-3" />
                        <span className="text-xl font-bold tracking-tight text-primary hidden md:inline-block">
                            Amicizia Life Science
                        </span>
                        <span className="text-xl font-bold tracking-tight text-primary md:hidden">
                            Amicizia
                        </span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        <a
                            href="https://amicizialifescience.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Home
                        </a>
                        <Link
                            href="/products"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Products
                        </Link>
                        <a
                            href="https://amicizialifescience.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            About Us
                        </a>
                    </nav>
                </div>
                <div className="flex items-center gap-2">
                    <CartSheet />
                    <Link href="/contact">
                        <Button className="hidden md:flex">Contact Sales</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
