"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  key: string;
  productId: string;
  name: string;
  imageColor: string;
  imageSecondary: string;
  artwork: "psp" | "vita" | "switch" | "ds" | "gba";
  unitPrice: number;
  quantity: number;
  shell: string;
  storage: string;
  upgrades: string[];
  productType?: "preorder" | "ready";
  image?: string;
};

type ShopContextValue = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  cart: CartItem[];
  cartCount: number;
  subtotal: number;
  shipping: number;
  total: number;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addItem: (item: CartItem) => void;
  updateQuantity: (key: string, quantity: number) => void;
  removeItem: (key: string) => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("pixel-forge-theme");
    const preferred =
      window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initialTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : preferred;
    const savedCart = localStorage.getItem("pixel-forge-cart");

    document.documentElement.dataset.theme = initialTheme;
    const frame = requestAnimationFrame(() => {
      setTheme(initialTheme);
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart) as CartItem[]);
        } catch {
          localStorage.removeItem("pixel-forge-cart");
        }
      }
      setHydrated(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("pixel-forge-cart", JSON.stringify(cart));
  }, [cart, hydrated]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("pixel-forge-theme", next);
      return next;
    });
  }, []);

  const addItem = useCallback((item: CartItem) => {
    setCart((current) => {
      const existing = current.find((entry) => entry.key === item.key);
      if (!existing) return [...current, item];
      return current.map((entry) =>
        entry.key === item.key
          ? {
              ...entry,
              quantity:
                entry.productType === "ready"
                  ? 1
                  : Math.min(5, entry.quantity + item.quantity),
            }
          : entry,
      );
    });
    setCartOpen(true);
  }, []);

  const updateQuantity = useCallback((key: string, quantity: number) => {
    if (quantity < 1) {
      setCart((current) => current.filter((entry) => entry.key !== key));
      return;
    }
    setCart((current) =>
      current.map((entry) =>
        entry.key === key
          ? { ...entry, quantity: entry.productType === "ready" ? 1 : Math.min(5, quantity) }
          : entry,
      ),
    );
  }, []);

  const removeItem = useCallback((key: string) => {
    setCart((current) => current.filter((entry) => entry.key !== key));
  }, []);

  const value = useMemo(
    () => {
      const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
      const subtotal = cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
      const shipping = cartCount > 0 ? 7.99 + Math.max(0, cartCount - 3) * 5 : 0;

      return {
      theme,
      toggleTheme,
      cart,
      cartCount,
      subtotal,
      shipping,
      total: subtotal + shipping,
      isCartOpen,
      setCartOpen,
      addItem,
      updateQuantity,
      removeItem,
      };
    },
    [theme, cart, isCartOpen, addItem, toggleTheme, updateQuantity, removeItem],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within ShopProvider");
  return context;
}
