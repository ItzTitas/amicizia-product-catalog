import { setRequestLocale } from 'next-intl/server';
import ProductDetailContent from './ProductDetailContent';

export default async function ProductDetailPage({
    params
}: {
    params: Promise<{ locale: string; slug: string }>
}) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    return <ProductDetailContent slug={slug} />;
}
