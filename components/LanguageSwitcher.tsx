'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { ChangeEvent, useTransition } from 'react';
import { Check, Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'hi', name: 'हिंदी (Hindi)' },
        { code: 'bn', name: 'বাংলা (Bengali)' },
        { code: 'as', name: 'অসমীয়া (Assamese)' },
        { code: 'mni', name: 'মৈতৈ (Manipuri)' },
        { code: 'lus', name: 'Mizo' },
        { code: 'kha', name: 'Khasi' },
        { code: 'brx', name: 'बर\' (Bodo)' },
        { code: 'ne', name: 'नेपाली (Nepali)' },
        { code: 'or', name: 'ଓଡ଼ିଆ (Odia)' }
    ];

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="relative">
            <div className="relative flex items-center group">
                <div className="absolute left-4 z-10 pointer-events-none text-primary/70 group-hover:text-primary transition-colors">
                    <Globe className="w-5 h-5 effect-shine" />
                </div>
                <select
                    value={locale}
                    disabled={isPending}
                    onChange={onSelectChange}
                    className="appearance-none w-full bg-white border-2 border-primary/20 text-foreground text-sm font-bold rounded-full pl-[3.5rem] pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer hover:border-primary/50 transition-all shadow-sm"
                    style={{ paddingLeft: '3.5rem' }}
                >
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.name}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
