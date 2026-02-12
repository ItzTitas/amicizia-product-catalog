'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, TrendingUp, Users, Award, Target, CheckCircle, ShoppingBag } from 'lucide-react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  const defaultSlides = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg',
    '/images/slide5.jpg',
    '/images/slide6.jpg',
    '/images/slide7.jpg'
  ];

  const [slides, setSlides] = useState(defaultSlides);

  // Shuffle and mount on client
  useEffect(() => {
    const shuffled = [...defaultSlides];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setSlides(shuffled);
    setMounted(true);
  }, []);

  // Slideshow rotation
  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, mounted]);

  // Parallax scrolling
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="site-main">
      {/* Hero Section - Full Bleed Behind Header */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden -mt-24 pt-24">
        {/* Slideshow with Parallax */}
        <div className="hero-slideshow" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          {mounted ? slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url('${slide}')` }}
            />
          )) : (
            <div
              className="slide active"
              style={{ backgroundImage: `url('${slides[0]}')` }}
            />
          )}
        </div>

        {/* Floating Particles - Predefined positions to avoid hydration errors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { left: '10%', top: '20%', delay: '0s', duration: '8s' },
            { left: '25%', top: '60%', delay: '1s', duration: '10s' },
            { left: '40%', top: '30%', delay: '2s', duration: '12s' },
            { left: '55%', top: '70%', delay: '0.5s', duration: '9s' },
            { left: '70%', top: '40%', delay: '1.5s', duration: '11s' },
            { left: '85%', top: '15%', delay: '2.5s', duration: '7s' },
            { left: '15%', top: '80%', delay: '3s', duration: '13s' },
            { left: '30%', top: '50%', delay: '0.8s', duration: '10s' },
            { left: '60%', top: '25%', delay: '1.8s', duration: '9s' },
            { left: '75%', top: '65%', delay: '2.8s', duration: '11s' },
            { left: '20%', top: '45%', delay: '0.3s', duration: '12s' },
            { left: '50%', top: '10%', delay: '1.3s', duration: '8s' },
            { left: '80%', top: '55%', delay: '2.3s', duration: '10s' },
            { left: '35%', top: '75%', delay: '0.6s', duration: '9s' },
            { left: '65%', top: '35%', delay: '1.6s', duration: '11s' },
            { left: '90%', top: '50%', delay: '2.6s', duration: '7s' },
            { left: '5%', top: '60%', delay: '3.5s', duration: '13s' },
            { left: '45%', top: '85%', delay: '0.9s', duration: '10s' },
            { left: '78%', top: '28%', delay: '1.9s', duration: '9s' },
            { left: '12%', top: '38%', delay: '2.9s', duration: '11s' }
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>

        {/* Animated Overlay */}
        <div className="hero-overlay animate-pulse-slow" />

        {/* Hero Content */}
        <div className="hero-content relative z-10 px-4">
          {/* Premium Badge */}
          <div className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 rounded-full shadow-lg mb-6 mx-auto w-fit animate-on-scroll hover:scale-105 transition-transform">
            <Sparkles className="h-5 w-5 text-white animate-pulse" />
            <span className="text-sm font-bold text-white">Premium Veterinary Solutions</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-on-scroll">
            Welcome to Amicizia Life Science
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            A noble cause to serve the livestock with scientific, technical and clinical solutions.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              <ShoppingBag className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              Shop Our Products
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full font-semibold transition-all border border-white/20 hover:border-white/40 hover:scale-105"
            >
              Learn More
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Why Amicizia - Enhanced Cards */}
      <section id="why-amicizia" className="animate-on-scroll relative overflow-hidden bg-gradient-to-br from-primary/5 via-blue-50 to-emerald-50">
        {/* Dot Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container relative z-10">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Why AMICIZIA
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Committed to excellence in veterinary pharmaceutical solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: 'EXTREME FOCUS ON QUALITY', gradient: 'from-primary to-teal-600', delay: '0s' },
              { icon: Users, title: 'ULTIMATE CLIENT SATISFACTION', gradient: 'from-blue-500 to-blue-700', delay: '0.2s' },
              { icon: Award, title: 'HIGHLY DEDICATED TEAM', gradient: 'from-emerald-500 to-emerald-700', delay: '0.4s' }
            ].map((item, i) => (
              <div
                key={i}
                className="group card animate-on-scroll bg-white/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 relative overflow-hidden"
                style={{ transitionDelay: item.delay }}
              >
                {/* Gradient Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                <div className={`h-16 w-16 mx-auto mb-4 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary text-center">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us - Enhanced Checklist */}
      <section id="about-us" className="animate-on-scroll bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">ABOUT US</h2>
          <p className="mb-8 leading-relaxed text-lg">
            Amicizia Life Science is committed to become a trusted & admired player in Poultry, Livestock & Aqua culture sector by offering unique & quality products to customers. We are dedicated to bring new solutions and offer unique products manufactured at GMP & ISO accredited sterile manufacturing facility for Veterinary use.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              'Customer Satisfaction',
              'Innovative & cost effective Products',
              'CGMP in Manufacturing of Products',
              'Employee Involvement & Improvement',
              'Compliance to Legal, Statutory & Regulatory requirement'
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="text-primary text-2xl font-bold">✓</span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
          >
            Contact Us
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Mission & Vision - Side by Side */}
      <section className="animate-on-scroll bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-8 bg-gradient-to-br from-primary/5 to-teal-50 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h2 className="flex items-center gap-3 text-3xl font-bold mb-6 text-primary">
                <TrendingUp className="h-8 w-8" />
                OUR MISSION
              </h2>
              <p className="leading-relaxed text-lg">
                To offer unique veterinary pharmaceuticals & nutritional products developed in a creative & innovative way, under high quality standards that allows us to provide the best solution to offer our end customers.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h2 className="flex items-center gap-3 text-3xl font-bold mb-6 text-primary">
                <Sparkles className="h-8 w-8" />
                OUR VISION
              </h2>
              <p className="leading-relaxed text-lg">
                To be one of the leading Animal Health Pharmaceutical Companies, not only in sales but also in innovation, value creation and process excellence with high sense of social responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid - 4 Columns */}
      <section className="animate-on-scroll bg-white">
        <div className="container">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-primary">OUR VALUES</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'TEAM', desc: 'A group of likeminded people demonstrating unique talents while striving for success.' },
              { icon: Award, title: 'PROFESSIONALISM', desc: 'Embodied by Integrity, Honesty & Respect in all our business dealings.' },
              { icon: Target, title: 'EXCELLENCE', desc: 'Commitment to reach above and beyond to deliver unsurpassed achievements.' },
              { icon: CheckCircle, title: 'QUALITY', desc: 'Superior quality products with stringent checks at every manufacturing stage.' }
            ].map((value, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-primary to-teal-600 rounded-full flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us - Enhanced with Google Maps */}
      <section id="contact-us" className="animate-on-scroll bg-slate-900 text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">CONTACT US</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-teal-400">Amicizia Life Science Pvt. LTD.</h3>
                <address className="not-italic leading-relaxed text-lg space-y-2">
                  <p>601, Manas Anand Apartment,</p>
                  <p>G.B.Road, Dongripada, Thane (Maharashtra)</p>
                </address>
              </div>

              <div className="space-y-3">
                <p className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">✉️</span>
                  <a href="mailto:info@amicizialifescience.com" className="text-teal-400 hover:underline">
                    info@amicizialifescience.com
                  </a>
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">🌍</span>
                  <a href="http://www.amicizialifescience.com" className="text-teal-400 hover:underline">
                    www.amicizialifescience.com
                  </a>
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">📱</span>
                  <span>
                    <a href="tel:+918452006959" className="text-teal-400 hover:underline">+91 8452006959</a>
                    {' / '}
                    <a href="tel:+919330425793" className="text-teal-400 hover:underline">+91 9330425793</a>
                    {' / '}
                    <a href="tel:+919007736959" className="text-teal-400 hover:underline">+91 9007736959</a>
                  </span>
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">👥</span>
                  <a href="https://www.facebook.com/p/Amicizia-Life-Science-Pvt-Ltd-61573153274680/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                    Follow us on Facebook
                  </a>
                </p>
              </div>

              {/* Quick Links */}
              <div className="pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <div className="flex flex-wrap gap-3">
                  <Link href="/products" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors">
                    Products
                  </Link>
                  <a href="/Cattle.pdf" target="_blank" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors">
                    Livestock Catalog
                  </a>
                  <a href="/Poultry.pdf" target="_blank" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors">
                    Poultry Catalog
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 hover:border-white/20 transition-colors">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7362.874997249747!2d88.4547019283417!3d22.674751911810546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f863915cc4d%3A0x488b9542ee84e503!2sAmicizia%20Life%20Science!5e0!3m2!1sen!2sin!4v1770885273425!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amicizia Life Science Location"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
