'use client';

import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
import { ArrowLeft, Check, Plus, ShieldCheck, Truck, Package, FileText } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { use } from "react";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const product = products.find((p) => p.slug === slug);
    const addItem = useCartStore((state) => state.addItem);
    const [selectedSkuId, setSelectedSkuId] = useState<string | null>(null);

    if (!product) {
        notFound();
    }

    // Set default SKU if not selected
    if (!selectedSkuId && product.skus.length > 0) {
        setSelectedSkuId(product.skus[0].id);
    }

    const selectedSku = product.skus.find(sku => sku.id === selectedSkuId);

    const handleAddToOrder = () => {
        if (selectedSku) {
            addItem({
                skuId: selectedSku.id,
                productId: product.id,
                productName: product.name,
                skuName: selectedSku.name,
                unitSize: selectedSku.unitSize,
                quantity: 1,
                image: product.images?.[0],
            });
        }
    };

    return (
        <div className="container py-8 md:py-12">
            {/* Breadcrumb / Back Link */}
            <div className="mb-6">
                <Link href="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Column: Image (Sticky on Desktop) */}
                <div className="md:col-span-1 lg:col-span-5">
                    <div className="sticky top-24">
                        <div className="bg-white dark:bg-muted border rounded-xl overflow-hidden aspect-square relative shadow-sm">
                            <NextImage
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-contain p-8"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Product Details */}
                <div className="md:col-span-1 lg:col-span-7 space-y-8">
                    {/* Header Section */}
                    <div className="border-b pb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                                {product.category}
                            </span>
                            {product.packaging && (
                                <span className="text-sm text-muted-foreground">
                                    {product.packaging}
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
                            {product.name}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    {/* Variant Selection (Amazon Style) */}
                    {product.skus.length > 0 && (
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-foreground">
                                Available Sizes / Variants:
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {product.skus.map((sku) => {
                                    const isSelected = selectedSkuId === sku.id;
                                    return (
                                        <button
                                            key={sku.id}
                                            onClick={() => setSelectedSkuId(sku.id)}
                                            className={cn(
                                                "relative px-4 py-2 border rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
                                                isSelected
                                                    ? "border-primary bg-primary/10 text-primary ring-1 ring-primary"
                                                    : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
                                            )}
                                        >
                                            <span className="block">{sku.unitSize}</span>
                                            {isSelected && (
                                                <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-0.5">
                                                    <Check className="h-3 w-3" />
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                            {selectedSku && (
                                <p className="text-xs text-muted-foreground mt-1">
                                    Selected: <span className="font-medium text-foreground">{selectedSku.name}</span>
                                </p>
                            )}
                        </div>
                    )}

                    {/* Action Section */}
                    <div className="bg-muted/30 p-6 rounded-xl border space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="flex-1 text-base h-12"
                                onClick={handleAddToOrder}
                            >
                                <Plus className="mr-2 h-5 w-5" /> Add to Inquiry
                            </Button>
                            {product.brochureUrl && (
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="flex-1 text-base h-12"
                                    asChild
                                >
                                    <a href={product.brochureUrl} target="_blank" rel="noopener noreferrer">
                                        <FileText className="mr-2 h-5 w-5" /> Download Brochure
                                    </a>
                                </Button>
                            )}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground pt-2">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-green-600" />
                                <span>Quality Guaranteed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Truck className="h-4 w-4 text-blue-600" />
                                <span>Bulk Delivery Available</span>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground border-t pt-4">
                            * This adds the item to your inquiry list. Our sales team will contact you with pricing and availability.
                        </p>
                    </div>

                    {/* Detailed Information Tabs/Sections */}
                    <div className="space-y-6 pt-6">
                        {product.composition && (
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Package className="h-5 w-5 text-primary" /> Composition
                                </h3>
                                <div className="bg-muted/50 p-4 rounded-lg text-sm leading-relaxed border">
                                    {product.composition}
                                </div>
                            </div>
                        )}

                        {product.indications && (
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Indications</h3>
                                <ul className="list-disc list-outside ml-5 text-muted-foreground space-y-1">
                                    {product.indications.split('. ').map((item, i) => (
                                        item.trim() && <li key={i}>{item.trim().replace(/\.$/, '')}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {product.dosage && (
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Dosage & Administration</h3>
                                <div className="text-sm text-muted-foreground leading-relaxed">
                                    {product.dosage}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
