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
        <div className="container py-8 md:py-12">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 space-y-6">
                    <div>
                        <h3 className="font-semibold mb-4">Categories</h3>
                        <div className="flex flex-col space-y-2">
                            <Link
                                href="/products"
                                className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full text-left ${!categoryFilter ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : "hover:bg-accent hover:text-accent-foreground"}`}
                            >
                                All Products
                            </Link>
                            {categories.map((cat) => (
                                <Link
                                    key={cat}
                                    href={`/products?category=${cat}`}
                                    className={`inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full text-left ${categoryFilter === cat ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : "hover:bg-accent hover:text-accent-foreground"}`}
                                >
                                    {cat}
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">{categoryFilter || "All Products"}</h1>
                            <p className="text-muted-foreground mt-2">
                                Showing {filteredProducts.length} results
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
                            <ProductSearch />
                            <ProductSort />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <Card key={product.id} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                                <div className="aspect-[4/3] bg-muted relative">
                                    {product.images && product.images.length > 0 ? (
                                        <NextImage
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-muted-foreground">
                                            <Package2 className="h-10 w-10 opacity-20" />
                                        </div>
                                    )}
                                </div>
                                <CardHeader>
                                    <div className="text-sm font-medium text-primary mb-1">{product.category}</div>
                                    <CardTitle className="text-lg">{product.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {product.description}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full">
                                        <Link href={`/products/${product.slug}`}>View Details</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-12 border rounded-lg bg-muted/10">
                            <p className="text-muted-foreground">No products found in this category.</p>
                            <Button variant="link" asChild className="mt-2">
                                <Link href="/products">View All Products</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
