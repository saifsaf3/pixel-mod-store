import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ShopProvider } from "@/components/shop-provider";

export const metadata: Metadata = {
  title: {
    default: "Pixel Forge — Custom Handheld Consoles",
    template: "%s — Pixel Forge",
  },
  description:
    "Premium custom PSP, PS Vita, Nintendo Switch, DS and Game Boy Advance consoles, restored and built to order in the UK.",
  metadataBase: new URL("https://pixel-mod-store.vercel.app"),
  openGraph: {
    title: "Pixel Forge — Custom Handheld Consoles",
    description:
      "Premium custom console builds, modding services, repair-led refurbishment and tested handheld hardware.",
    url: "https://pixel-mod-store.vercel.app",
    siteName: "Pixel Forge",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
  try {
    const saved = localStorage.getItem('pixel-forge-theme');
    const theme = saved || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.dataset.theme = theme;
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ShopProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </ShopProvider>
        <Analytics />
      </body>
    </html>
  );
}
