'use client';

import { useRouter, useSearchParams } from "next/navigation";

export function ProductSort() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentSort = searchParams.get('sort') || 'relevant';

    const handleSortChange = (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value === 'relevant') {
            params.delete('sort');
        } else {
            params.set('sort', value);
        }
        router.replace(`/products?${params.toString()}`);
    };

    return (
        <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-medium whitespace-nowrap">Sort by:</label>
            <select
                id="sort"
                value={currentSort}
                onChange={(e) => handleSortChange(e.target.value)}
                className="h-10 w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
                <option value="relevant">Relevant</option>
                <option value="alphabetical">Alphabetical (A-Z)</option>
                <option value="reverse-alphabetical">Alphabetical (Z-A)</option>
            </select>
        </div>
    );
}
