"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BagIcon, CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./icons";
import { useShop } from "./shop-provider";

const links = [
  { href: "/products", label: "Consoles" },
  { href: "/products#ready-to-ship", label: "Ready to ship" },
  { href: "/#workshop", label: "Our process" },
  { href: "/#about", label: "About" },
];

export function Header() {
  const { theme, toggleTheme, cartCount, setCartOpen } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner container">
        <Link className="brand" href="/" aria-label="Pixel Forge home">
          <span className="brand__mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="brand__text">
            PIXEL <b>FORGE</b>
          </span>
        </Link>

        <nav className={`nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/products?family=PlayStation" onClick={() => setMenuOpen(false)}>PlayStation</Link>
          <Link href="/products?family=Nintendo" onClick={() => setMenuOpen(false)}>Nintendo</Link>
        </nav>

        <div className="header-actions">
          <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="basket-button" onClick={() => setCartOpen(true)} aria-label={`Open basket with ${cartCount} items`}>
            <BagIcon />
            <span className="basket-button__label">Basket</span>
            {cartCount > 0 && <span className="basket-count">{cartCount}</span>}
          </button>
          <button className="menu-button icon-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
