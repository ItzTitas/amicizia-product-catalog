'use client';

import { Link, usePathname } from "@/navigation";
import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/cart/CartSheet";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";

import { useTranslations } from "next-intl";

export function Header() {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
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
                                    <Link href="/" className={`hover:text-primary transition-colors font-medium px-3 py-2 rounded-lg ${pathname === '/' ? 'bg-slate-900 text-white' : ''}`}>{t('home')}</Link>
                                    <Link href="/products" className={`hover:text-primary transition-colors font-medium px-3 py-2 rounded-lg ${pathname.startsWith('/products') ? 'bg-slate-900 text-white' : ''}`}>{t('products')}</Link>

                                    {/* Resources Section */}
                                    <div className="border-t pt-4">
                                        <p className="text-sm font-semibold text-muted-foreground mb-2">Resources</p>
                                        <div className="flex flex-col gap-3 pl-2">
                                            <a href="/Cattle.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-base">
                                                📄 Livestock Catalog
                                            </a>
                                            <a href="/Poultry.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-base">
                                                📄 Poultry Catalog
                                            </a>
                                            <a href="/Canine_Literature-PDF.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-base">
                                                📄 Canine Catalog
                                            </a>
                                        </div>
                                    </div>

                                    <a href="/#contact-us" className="hover:text-primary transition-colors font-medium px-3 py-2 rounded-lg">{t('about')}</a>
                                    <Link href="/contact" className={`hover:text-primary transition-colors font-medium px-3 py-2 rounded-lg ${pathname === '/contact' ? 'bg-slate-900 text-white' : ''}`}>{t('contact')}</Link>
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
                    <Link
                        href="/"
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pathname === '/'
                            ? 'bg-slate-900 text-white shadow-lg'
                            : 'text-foreground/80 hover:text-primary hover:bg-white hover:shadow-sm'
                            }`}
                    >
                        {t('home')}
                    </Link>
                    <Link
                        href="/products"
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pathname.startsWith('/products')
                            ? 'bg-slate-900 text-white shadow-lg'
                            : 'text-foreground/80 hover:text-primary hover:bg-white hover:shadow-sm'
                            }`}
                    >
                        {t('products')}
                    </Link>

                    {/* Resources Dropdown */}
                    <div className="relative group">
                        <button className="px-5 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-white hover:shadow-sm transition-all duration-300 flex items-center gap-1">
                            Resources
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <a
                                href="/Cattle.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors first:rounded-t-lg"
                            >
                                📄 Livestock Catalog
                            </a>
                            <a
                                href="/Poultry.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                                📄 Poultry Catalog
                            </a>
                            <a
                                href="/Canine_Literature-PDF.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors last:rounded-b-lg"
                            >
                                📄 Canine Catalog
                            </a>
                        </div>
                    </div>

                    <Link
                        href="/#contact-us"
                        className="px-5 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-white hover:shadow-sm transition-all duration-300"
                    >
                        {t('about')}
                    </Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    {/* <LanguageSwitcher /> Removed as per user request */}
                    <CartSheet />
                    <Link href="/contact" className="hidden md:block">
                        <Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 bg-gradient-to-r from-primary to-teal-600 border-none">
                            {t('contact')}
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
