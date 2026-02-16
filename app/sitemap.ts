import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { routing } from '@/navigation';

const baseUrl = 'https://www.amicizialifescience.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemap: MetadataRoute.Sitemap = [];

    // Helper to add entries for all locales
    const addEntry = (path: string, priority: number = 0.5, changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly') => {
        routing.locales.forEach((locale) => {
            const url = locale === routing.defaultLocale
                ? `${baseUrl}${path}`
                : `${baseUrl}/${locale}${path}`; // simple concatenation, adjust if path already has leading slash

            // Ensure path starts with / if not empty, but handle root carefully
            // Actually paths usually start with /
            const fullUrl = locale === routing.defaultLocale && path === '/'
                ? baseUrl
                : `${baseUrl}/${locale}${path === '/' ? '' : path}`;

            sitemap.push({
                url: fullUrl,
                lastModified: new Date(),
                changeFrequency,
                priority,
            });
        });
    };

    // 1. Static Routes
    // Home
    addEntry('/', 1.0, 'daily');
    // Products Index
    addEntry('/products', 0.8, 'daily');
    // Contact
    addEntry('/contact', 0.6, 'monthly');

    // 2. Dynamic Product Routes
    products.forEach((product) => {
        addEntry(`/products/${product.slug}`, 0.9, 'weekly');
    });

    return sitemap;
}
