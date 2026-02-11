import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    skuId: string;
    productId: string;
    productName: string;
    skuName: string;
    unitSize: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (skuId: string) => void;
    updateQuantity: (skuId: string, quantity: number) => void;
    clearCart: () => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            isOpen: false,
            setIsOpen: (isOpen) => set({ isOpen }),
            addItem: (newItem) =>
                set((state) => {
                    const existingItem = state.items.find((item) => item.skuId === newItem.skuId);
                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.skuId === newItem.skuId
                                    ? { ...item, quantity: item.quantity + newItem.quantity }
                                    : item
                            ),
                            isOpen: true,
                        };
                    }
                    return { items: [...state.items, newItem], isOpen: true };
                }),
            removeItem: (skuId) =>
                set((state) => ({
                    items: state.items.filter((item) => item.skuId !== skuId),
                })),
            updateQuantity: (skuId, quantity) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.skuId === skuId ? { ...item, quantity } : item
                    ),
                })),
            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'pharma-cart-storage',
        }
    )
);
