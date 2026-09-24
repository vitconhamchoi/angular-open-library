import { signalStore, withState, withMethods, withComputed, patchState } from '@ngrx/signals';
import { computed } from '@angular/core';
import { Product } from '../models/product.model';
import { INITIAL_PRODUCTS } from '../core/mock/initial-data';

export interface ProductsState {
  products: Product[];
  filterSearch: string;
  filterCategory: string;
  selectedProduct: Product | null;
  isLoading: boolean;
}

const initialState: ProductsState = {
  products: INITIAL_PRODUCTS,
  filterSearch: '',
  filterCategory: '',
  selectedProduct: null,
  isLoading: false,
};

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ products, filterSearch, filterCategory }) => ({
    filteredProducts: computed(() => {
      const search = filterSearch().toLowerCase().trim();
      const cat = filterCategory();
      return products().filter(p => {
        const matchesSearch = !search ||
          p.name.toLowerCase().includes(search) ||
          p.code.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search);
        const matchesCat = !cat || p.category === cat;
        return matchesSearch && matchesCat;
      });
    }),
    totalProductsCount: computed(() => products().length),
    totalInventoryValue: computed(() =>
      products().reduce((acc, p) => acc + (p.price * p.quantity), 0)
    ),
    lowStockCount: computed(() =>
      products().filter(p => p.quantity > 0 && p.quantity <= 10).length
    ),
    outOfStockCount: computed(() =>
      products().filter(p => p.quantity === 0).length
    ),
    inStockCount: computed(() =>
      products().filter(p => p.quantity > 10).length
    )
  })),
  withMethods((store) => ({
    setSearch(term: string) {
      patchState(store, { filterSearch: term });
    },
    setCategory(category: string) {
      patchState(store, { filterCategory: category });
    },
    setSelectedProduct(product: Product | null) {
      patchState(store, { selectedProduct: product });
    },
    addProduct(productData: Omit<Product, 'id'>) {
      const newProduct: Product = {
        ...productData,
        id: `prod-${Date.now()}`
      };
      patchState(store, (state) => ({
        products: [newProduct, ...state.products]
      }));
    },
    updateProduct(id: string, updates: Partial<Product>) {
      patchState(store, (state) => ({
        products: state.products.map(p => p.id === id ? { ...p, ...updates } : p)
      }));
    },
    deleteProduct(id: string) {
      patchState(store, (state) => ({
        products: state.products.filter(p => p.id !== id)
      }));
    }
  }))
);
