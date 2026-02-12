import Link from "next/link";
import NextImage from "next/image";
import { products, categories } from "@/lib/products";
import { ProductSearch } from "@/components/product/ProductSearch";
import { ProductSort } from "@/components/product/ProductSort";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Package2 } from "lucide-react"; // Import Badge if available, else plain div

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
        filteredProducts = filteredProducts.filter((p) => p.category === categoryFilter);
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
        <div className="min-h-screen bg-gray-50/50">
            {/* Hero Section */}
            <div className="relative bg-slate-900 py-16 mb-10 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary blur-3xl mix-blend-screen"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/30 blur-3xl mix-blend-screen"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-500 blur-3xl mix-blend-screen"></div>
                </div>

                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                        <Badge className="bg-primary hover:bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                            {categoryFilter ? categoryFilter : "Premium Catalog"}
                        </Badge>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-sm">
                        {categoryFilter ? `${categoryFilter} Solutions` : "Pharmaceutical Excellence"}
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                        Discover our scientifically formulated range of veterinary products designed for superior livestock, poultry, and companion animal health.
                    </p>
                </div>
            </div>

            <div className="container pb-12">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 space-y-6 md:sticky md:top-24 h-fit">
                        <div className="bg-background rounded-lg border p-4 shadow-sm">
                            <h3 className="font-semibold mb-4 flex items-center gap-2">
                                <span className="h-5 w-1 bg-primary rounded-full"></span>
                                Categories
                            </h3>
                            <div className="flex flex-col space-y-1">
                                <Link
                                    href="/products"
                                    className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium transition-all h-10 px-4 py-2 w-full text-left ${!categoryFilter ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-muted hover:translate-x-1"}`}
                                >
                                    All Products
                                </Link>
                                {categories.map((cat) => (
                                    <Link
                                        key={cat}
                                        href={`/products?category=${cat}`}
                                        className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium transition-all h-10 px-4 py-2 w-full text-left ${categoryFilter === cat ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-muted hover:translate-x-1"}`}
                                    >
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="bg-background rounded-lg border p-4 shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sticky top-0 z-10 md:static">
                            <div>
                                <p className="text-muted-foreground text-sm">
                                    Showing <span className="font-bold text-foreground">{filteredProducts.length}</span> results
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center">
                                <div className="w-full sm:w-auto"><ProductSearch /></div>
                                <div className="w-full sm:w-auto"><ProductSort /></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-8">
                            {filteredProducts.map((product) => (
                                <Link key={product.id} href={`/products/${product.slug}`} className="group h-full block">
                                    <Card className="flex flex-col h-full overflow-hidden border-transparent hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                                        <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                                            {product.images && product.images.length > 0 ? (
                                                <NextImage
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-50 text-muted-foreground group-hover:bg-gray-100 transition-colors">
                                                    <Package2 className="h-12 w-12 opacity-10 group-hover:opacity-20 transition-opacity" />
                                                </div>
                                            )}
                                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Badge className="bg-white/90 text-primary hover:bg-white shadow-sm backdrop-blur-sm">
                                                    {product.category}
                                                </Badge>
                                            </div>
                                        </div>
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-start">
                                                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1" title={product.name}>
                                                    {product.name}
                                                </CardTitle>
                                            </div>
                                            <CardDescription className="line-clamp-2 text-xs mt-1 h-10">
                                                {product.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter className="pt-0 mt-auto">
                                            <div className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 bg-slate-900 text-primary-foreground group-hover:bg-primary shadow-none group-hover:shadow-md pointer-events-none">
                                                View Details
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-16 border-2 border-dashed rounded-xl bg-gray-50/50">
                                <Package2 className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
                                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                                <p className="text-muted-foreground mb-6">Try adjusting your filters or search terms.</p>
                                <Button variant="outline" asChild>
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
