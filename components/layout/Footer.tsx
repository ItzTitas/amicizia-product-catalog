import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export function Footer() {
    const t = useTranslations('Navigation');
    return (
        <footer className="border-t bg-muted/40">
            <div className="container py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 md:pl-8">
                    <div className="space-y-3">
                        <h4 className="text-lg font-bold text-primary">Amicizia Life Science</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            A noble cause to serve the livestock with scientific, technical and clinical solutions.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Products</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/products?category=Poultry" className="hover:text-primary">
                                    Poultry Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/products?category=Livestock" className="hover:text-primary">
                                    Livestock Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/products?category=Canine" className="hover:text-primary">
                                    Canine Products
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="/#contact-us" className="hover:text-primary">
                                    {t('about')}
                                </a>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary">
                                    {t('contact')}
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <LanguageSwitcher />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <p className="text-sm text-muted-foreground">
                            Amicizia Life Science Pvt. LTD.
                            <br />
                            601, Manas Anand Apartment,
                            <br />
                            G.B.Road, Dongripada, Thane (Maharashtra)
                            <br />
                            <a href="mailto:info@amicizialifescience.com" className="hover:text-primary">
                                info@amicizialifescience.com
                            </a>
                            <br />
                            <a href="https://www.amicizialifescience.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                www.amicizialifescience.com
                            </a>
                            <br />
                            <a href="tel:+918452006959" className="hover:text-primary">+91 8452006959</a>
                            {' / '}
                            <a href="tel:+919007736959" className="hover:text-primary">+91 9007736959</a>
                            {' / '}
                            <a href="tel:03365981914" className="hover:text-primary">033-65981914</a>
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Amicizia Life Science. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
