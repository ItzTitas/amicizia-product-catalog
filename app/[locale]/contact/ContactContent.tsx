'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, MessageCircle, Sparkles, Clock } from "lucide-react";
import { FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function ContactContent() {
    const t = useTranslations('ContactPage');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const firstName = formData.get('first-name');
        const lastName = formData.get('last-name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        const fullName = `${firstName} ${lastName}`.trim();

        const whatsappMessage = `*New Inquiry from Website*\n\n*Name:* ${fullName}\n*Email:* ${email}\n*Phone:* ${phone}\n*Message:* ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);

        const phoneNumber = '918452006959';

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
            {/* Modern Hero Section */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 py-20 mb-12 overflow-hidden">
                {/* Animated Background Blobs */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-teal-400 blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/40 blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-400 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container relative z-10 text-center">
                    {/* Premium Badge */}
                    <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-full shadow-lg mb-6 hover:scale-105 transition-transform">
                        <Sparkles className="h-5 w-5 text-white animate-pulse" />
                        <span className="text-sm font-bold text-white">{t('badge')}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-2xl">
                        {t('title')}
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Information - Modern Cards */}
                        <div className="space-y-6">
                            {/* Contact Info Card */}
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-teal-100 p-8 shadow-2xl hover:shadow-teal-500/20 transition-shadow">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-10 w-1.5 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full"></span>
                                    <h2 className="text-2xl font-bold text-slate-800">{t('info_title')}</h2>
                                </div>
                                <p className="text-slate-600 mb-8">{t('info_desc')}</p>

                                <div className="space-y-6">
                                    {/* Address */}
                                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border border-teal-100">
                                        <div className="p-3 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl">
                                            <MapPin className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-2">{t('office_label')}</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                Amicizia Life Science Pvt. LTD.<br />
                                                601, Manas Anand Apartment,<br />
                                                G.B.Road, Dongripada, Thane (Maharashtra)<br />
                                                India
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                                        <div className="p-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-2">{t('email_label')}</h3>
                                            <a href="mailto:info@amicizialifescience.com" className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline">
                                                info@amicizialifescience.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                                        <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                                            <Phone className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-2">{t('phone_label')}</h3>
                                            <div className="space-y-1 text-sm">
                                                <a href="tel:+918452006959" className="block text-green-600 hover:text-green-700 font-medium hover:underline">
                                                    +91 8452006959
                                                </a>
                                                <a href="tel:+919007736959" className="block text-green-600 hover:text-green-700 font-medium hover:underline">
                                                    +91 9007736959
                                                </a>
                                                <a href="tel:03365981914" className="block text-green-600 hover:text-green-700 font-medium hover:underline">
                                                    033-65981914
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours Card */}
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-teal-100 p-8 shadow-2xl hover:shadow-teal-500/20 transition-shadow">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                                        <Clock className="h-6 w-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800">{t('hours_title')}</h2>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                                        <p className="font-bold text-slate-800 mb-1">{t('days.mon_fri')}</p>
                                        <p className="text-sm text-slate-600">9:00 AM - 6:00 PM</p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                                        <p className="font-bold text-slate-800 mb-1">{t('days.sat')}</p>
                                        <p className="text-sm text-slate-600">9:00 AM - 2:00 PM</p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border border-slate-200 col-span-2">
                                        <p className="font-bold text-slate-800 mb-1">{t('days.sun')}</p>
                                        <p className="text-sm text-slate-600">{t('days.closed')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modern Inquiry Form */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-teal-100 p-8 shadow-2xl hover:shadow-teal-500/20 transition-shadow">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-10 w-1.5 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full"></span>
                                <h2 className="text-2xl font-bold text-slate-800">{t('form_title')}</h2>
                            </div>
                            <p className="text-slate-600 mb-8">{t('form_desc')}</p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name" className="text-slate-700 font-semibold">{t('form_labels.first_name')}</Label>
                                        <Input
                                            id="first-name"
                                            name="first-name"
                                            placeholder={t('placeholders.first_name')}
                                            required
                                            className="border-2 border-teal-100 focus:border-teal-400 rounded-xl h-12"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name" className="text-slate-700 font-semibold">{t('form_labels.last_name')}</Label>
                                        <Input
                                            id="last-name"
                                            name="last-name"
                                            placeholder={t('placeholders.last_name')}
                                            required
                                            className="border-2 border-teal-100 focus:border-teal-400 rounded-xl h-12"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-slate-700 font-semibold">{t('form_labels.email')}</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder={t('placeholders.email')}
                                        required
                                        className="border-2 border-teal-100 focus:border-teal-400 rounded-xl h-12"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-slate-700 font-semibold">{t('form_labels.phone')}</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder={t('placeholders.phone')}
                                        className="border-2 border-teal-100 focus:border-teal-400 rounded-xl h-12"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-slate-700 font-semibold">{t('form_labels.message')}</Label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="flex min-h-[140px] w-full rounded-xl border-2 border-teal-100 bg-white px-4 py-3 text-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 placeholder:text-slate-400"
                                        placeholder={t('placeholders.message')}
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full h-14 text-lg font-extrabold bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-600/40 rounded-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 border-none"
                                >
                                    <MessageCircle className="mr-3 h-6 w-6 fill-current" />
                                    {t('submit_button')}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
