'use client';

import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
import { ArrowLeft, Check, Plus, ShieldCheck, Truck, Package, FileText, Sparkles } from "lucide-react";
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

    // Category-specific gradient colors
    const getCategoryGradient = () => {
        switch (product.category) {
            case 'Livestock':
                return 'from-green-400 to-emerald-500';
            case 'Poultry':
                return 'from-yellow-400 to-orange-500';
            case 'Canine':
                return 'from-blue-400 to-purple-500';
            default:
                return 'from-teal-400 to-cyan-500';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
            <div className="container py-8 md:py-12">
                {/* Modern Breadcrumb */}
                <div className="mb-8">
                    <Link href="/products" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-teal-600 bg-white/80 backdrop-blur-sm border border-teal-100 hover:border-teal-300 hover:shadow-md transition-all">
                        <ArrowLeft className="h-4 w-4" /> Back to Products
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Image with Modern Styling */}
                    <div className="md:col-span-1 lg:col-span-5">
                        <div className="sticky top-24">
                            <div className="bg-white/80 backdrop-blur-xl border-4 border-teal-100 rounded-3xl overflow-hidden aspect-square relative shadow-2xl hover:shadow-teal-500/30 hover:border-teal-300 transition-all duration-300 group">
                                {product.images && product.images.length > 0 && product.images[0] ? (
                                    <>
                                        <NextImage
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                                            className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                                            priority
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-teal-50">
                                        <Package className="h-24 w-24 opacity-20 text-teal-400" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Product Details with Modern Design */}
                    <div className="md:col-span-1 lg:col-span-7 space-y-8">
                        {/* Header Section with Gradient Badge */}
                        <div className="border-b border-teal-100 pb-6">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-white shadow-lg bg-gradient-to-r ${getCategoryGradient()}`}>
                                    <Sparkles className="h-4 w-4" />
                                    {product.category}
                                </span>
                                {product.packaging && (
                                    <span className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                                        {product.packaging}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-teal-700 bg-clip-text text-transparent mb-4">
                                {product.name}
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Modern Variant Selection */}
                        {product.skus.length > 0 && (
                            <div className="space-y-4 bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-teal-100 shadow-lg">
                                <label className="text-base font-bold text-slate-800 flex items-center gap-2">
                                    <span className="h-6 w-1.5 bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full"></span>
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
                                                    "relative px-6 py-3 border-2 rounded-xl text-sm font-bold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2",
                                                    isSelected
                                                        ? "border-teal-500 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 ring-2 ring-teal-400 shadow-lg shadow-teal-500/30"
                                                        : "border-slate-200 bg-white hover:bg-teal-50 hover:border-teal-300 text-slate-700"
                                                )}
                                            >
                                                <span className="block">{sku.unitSize}</span>
                                                {isSelected && (
                                                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full p-1 shadow-lg">
                                                        <Check className="h-3 w-3" />
                                                    </div>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                                {selectedSku && (
                                    <p className="text-sm text-slate-600 mt-2 bg-teal-50 px-4 py-2 rounded-lg border border-teal-100">
                                        Selected: <span className="font-bold text-teal-700">{selectedSku.name}</span>
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Modern Action Section with Glassmorphic Design */}
                        <div className="bg-gradient-to-br from-white/90 to-teal-50/80 backdrop-blur-xl p-8 rounded-3xl border-2 border-teal-200 shadow-2xl space-y-6">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="flex-1 text-base h-14 font-bold bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-xl shadow-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/60 transition-all rounded-xl"
                                    onClick={handleAddToOrder}
                                >
                                    <Plus className="mr-2 h-5 w-5" /> Add to Inquiry
                                </Button>
                                {product.brochureUrl && (
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="flex-1 text-base h-14 font-bold border-2 border-teal-300 text-teal-700 hover:bg-teal-50 hover:border-teal-400 rounded-xl"
                                        asChild
                                    >
                                        <a href={product.brochureUrl} target="_blank" rel="noopener noreferrer">
                                            <FileText className="mr-2 h-5 w-5" /> Download Brochure
                                        </a>
                                    </Button>
                                )}
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-2 gap-4 text-sm pt-4 border-t border-teal-200">
                                <div className="flex items-center gap-3 bg-green-50 px-4 py-3 rounded-xl border border-green-200">
                                    <ShieldCheck className="h-5 w-5 text-green-600" />
                                    <span className="font-semibold text-green-700">Quality Guaranteed</span>
                                </div>
                                <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl border border-blue-200">
                                    <Truck className="h-5 w-5 text-blue-600" />
                                    <span className="font-semibold text-blue-700">Bulk Delivery</span>
                                </div>
                            </div>

                            <p className="text-xs text-slate-600 border-t border-teal-200 pt-4 bg-teal-50/50 px-4 py-3 rounded-lg">
                                💡 This adds the item to your inquiry list. Our sales team will contact you with pricing and availability.
                            </p>
                        </div>

                        {/* Detailed Information with Modern Cards */}
                        <div className="space-y-6 pt-6">
                            {product.composition && (
                                <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-teal-100 shadow-lg space-y-3">
                                    <h3 className="text-xl font-bold flex items-center gap-3 text-slate-800">
                                        <span className="p-2 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl">
                                            <Package className="h-5 w-5 text-white" />
                                        </span>
                                        Composition
                                    </h3>
                                    <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-5 rounded-xl text-sm leading-relaxed border border-teal-100 text-slate-700">
                                        {product.composition}
                                    </div>
                                </div>
                            )}

                            {product.indications && (
                                <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-teal-100 shadow-lg space-y-3">
                                    <h3 className="text-xl font-bold text-slate-800">Indications</h3>
                                    <ul className="list-disc list-outside ml-6 text-slate-600 space-y-2">
                                        {product.indications.split(/[\n\r]+|\. /).map((item, i) => (
                                            item.trim() && <li key={i} className="leading-relaxed">{item.trim().replace(/\.$/, '')}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {product.dosage && (
                                <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-teal-100 shadow-lg space-y-3">
                                    <h3 className="text-xl font-bold text-slate-800">Dosage & Administration</h3>
                                    <div className="text-sm text-slate-600 leading-relaxed bg-gradient-to-br from-slate-50 to-teal-50 p-5 rounded-xl border border-teal-100">
                                        {product.dosage}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
