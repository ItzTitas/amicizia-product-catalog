import Link from "next/link";
import NextImage from "next/image";
import { Metadata } from "next";
import { products, categories } from "@/lib/products";
import { ProductSearch } from "@/components/product/ProductSearch";
import { ProductSort } from "@/components/product/ProductSort";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Package2, Sparkles, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Amicizia Life Science | Products",
};

export const dynamic = 'force-dynamic';

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedParams = await searchParams;
    const categoryFilter = typeof resolvedParams.category === 'string' ? resolvedParams.category : null;
    const searchTerm = typeof resolvedParams.search === 'string' ? resolvedParams.search.toLowerCase() : null;

    let filteredProducts = products;

    if (categoryFilter) {
        filteredProducts = filteredProducts.filter((p) => p.categories.includes(categoryFilter as any));
    }

    if (searchTerm) {
        filteredProducts = filteredProducts.filter((p) =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            (p.composition && p.composition.toLowerCase().includes(searchTerm)) ||
            (p.indications && p.indications.toLowerCase().includes(searchTerm))
        );
    }

    const sortOption = typeof resolvedParams.sort === 'string' ? resolvedParams.sort : 'relevant';

    if (sortOption === 'alphabetical') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'reverse-alphabetical') {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
            {/* Modern Hero Section with Gradient */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 py-20 mb-10 overflow-hidden">
                {/* Animated Background Blobs */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-teal-400 blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/40 blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-400 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container relative z-10 text-center">
                    {/* Premium Badge */}
                    <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-full shadow-lg mb-6 animate-on-scroll hover:scale-105 transition-transform">
                        <Sparkles className="h-5 w-5 text-white animate-pulse" />
                        <span className="text-sm font-bold text-white">
                            {categoryFilter ? categoryFilter : "Premium Catalog"}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-2xl">
                        {categoryFilter ? `${categoryFilter} Solutions` : "Pharmaceutical Excellence"}
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                        Discover our scientifically formulated range of veterinary products designed for superior livestock, poultry, and companion animal health.
                    </p>
                </div>
            </div>

            <div className="container pb-12">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Modern Glassmorphic Sidebar */}
                    <aside className="w-full md:w-72 space-y-6 md:sticky md:top-24 h-fit">
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-teal-100 p-6 shadow-xl hover:shadow-2xl transition-shadow">
                            <h3 className="font-bold text-lg mb-6 flex items-center gap-3 text-slate-800">
                                <span className="h-8 w-1.5 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full"></span>
                                Categories
                            </h3>
                            <div className="flex flex-col space-y-2">
                                <Link
                                    href="/products"
                                    className={`inline-flex items-center justify-start whitespace-nowrap rounded-xl text-sm font-semibold transition-all h-12 px-5 py-3 w-full text-left ${!categoryFilter ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/50" : "hover:bg-teal-50 hover:translate-x-2 text-slate-700"}`}
                                >
                                    ✨ All Products
                                </Link>
                                {categories.map((cat) => (
                                    <Link
                                        key={cat}
                                        href={`/products?category=${cat}`}
                                        className={`inline-flex items-center justify-start whitespace-nowrap rounded-xl text-sm font-semibold transition-all h-12 px-5 py-3 w-full text-left ${categoryFilter === cat ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/50" : "hover:bg-teal-50 hover:translate-x-2 text-slate-700"}`}
                                    >
                                        {cat === 'Livestock' && '🐄'}
                                        {cat === 'Poultry' && '🐔'}
                                        {cat === 'Canine' && '🐕'}
                                        {cat === 'Swine' && '🐖'}
                                        {cat === 'Aqua' && '🐟'}
                                        {cat === 'Homeopathy' && '🌿'}
                                        {cat === 'Over the Counter' && '💊'}
                                        {cat === 'Feline' && '🐾'}
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {/* Modern Search Bar */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-teal-100 p-6 shadow-xl mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sticky top-0 z-10 md:static">
                            <div>
                                <p className="text-slate-600 text-sm">
                                    Showing <span className="font-bold text-teal-600 text-lg">{filteredProducts.length}</span> results
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center">
                                <div className="w-full sm:w-auto"><ProductSearch /></div>
                                <div className="w-full sm:w-auto"><ProductSort /></div>
                            </div>
                        </div>

                        {/* Modern Product Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-8">
                            {filteredProducts.map((product) => (
                                <Link key={product.id} href={`/products/${product.slug}`} className="group h-full block">
                                    <Card className="flex flex-col h-full overflow-hidden border-2 border-transparent hover:border-teal-400 shadow-lg hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-2 bg-white rounded-2xl">
                                        {/* Product Image with Gradient Overlay */}
                                        <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-teal-50 relative overflow-hidden">
                                            {product.images && product.images.length > 0 ? (
                                                <>
                                                    <NextImage
                                                        src={product.images[0]}
                                                        alt={product.name}
                                                        fill
                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    {/* Gradient Overlay on Hover */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                </>
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-teal-50 text-muted-foreground group-hover:from-teal-100 group-hover:to-cyan-100 transition-colors">
                                                    <Package2 className="h-16 w-16 opacity-20 group-hover:opacity-30 transition-opacity text-teal-600" />
                                                </div>
                                            )}
                                            {/* Colorful Category Badges */}
                                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 flex flex-col gap-1.5">
                                                {product.categories.map((cat) => (
                                                    <Badge key={cat} className={`
                                                        ${cat === 'Livestock' ? 'bg-gradient-to-r from-green-400 to-emerald-500' : ''}
                                                        ${cat === 'Poultry' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : ''}
                                                        ${cat === 'Canine' ? 'bg-gradient-to-r from-blue-400 to-purple-500' : ''}
                                                        ${cat === 'Swine' ? 'bg-gradient-to-r from-pink-400 to-rose-500' : ''}
                                                        ${cat === 'Aqua' ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : ''}
                                                        ${cat === 'Homeopathy' ? 'bg-gradient-to-r from-lime-400 to-emerald-500' : ''}
                                                        ${cat === 'Over the Counter' ? 'bg-gradient-to-r from-amber-400 to-orange-500' : ''}
                                                        ${cat === 'Feline' ? 'bg-gradient-to-r from-indigo-400 to-blue-500' : ''}
                                                        text-white font-bold shadow-lg backdrop-blur-sm border-0
                                                    `}>
                                                        {cat}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <CardHeader className="pb-3 pt-5">
                                            <CardTitle className="text-lg font-bold group-hover:text-teal-600 transition-colors line-clamp-1" title={product.name}>
                                                {product.name}
                                            </CardTitle>
                                            <CardDescription className="line-clamp-2 text-xs mt-2 h-10 text-slate-600">
                                                {product.description}
                                            </CardDescription>
                                        </CardHeader>

                                        {/* Modern CTA Button */}
                                        <CardFooter className="pt-0 mt-auto pb-5">
                                            <div className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all h-11 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white group-hover:from-teal-500 group-hover:to-cyan-500 shadow-md group-hover:shadow-xl group-hover:shadow-teal-500/50 pointer-events-none">
                                                View Details
                                                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20 border-2 border-dashed border-teal-200 rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/50">
                                <Package2 className="h-16 w-16 mx-auto text-teal-300 mb-6" />
                                <h3 className="text-xl font-bold mb-3 text-slate-800">No products found</h3>
                                <p className="text-slate-600 mb-8">Try adjusting your filters or search terms.</p>
                                <Button variant="outline" asChild className="border-teal-300 text-teal-600 hover:bg-teal-50">
                                    <Link href="/products">Clear Filters</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
