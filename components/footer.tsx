import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <span className="eyebrow">Built around you</span>
            <h2>Ready to find your next handheld?</h2>
          </div>
          <Link className="button button--light" href="/products">Browse the collection</Link>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand brand--footer" href="/">
              <span className="brand__mark" aria-hidden="true"><i /><i /><i /><i /></span>
              <span className="brand__text">PIXEL <b>FORGE</b></span>
            </Link>
            <p>Custom handhelds, restored carefully and built to be played.</p>
          </div>
          <div>
            <h3>Shop</h3>
            <Link href="/products">All consoles</Link>
            <Link href="/products?family=PlayStation">PlayStation</Link>
            <Link href="/products?family=Nintendo">Nintendo</Link>
          </div>
          <div>
            <h3>Pixel Forge</h3>
            <Link href="/#workshop">Our process</Link>
            <Link href="/#about">About us</Link>
            <Link href="/cart">Basket</Link>
          </div>
          <div>
            <h3>Need help?</h3>
            <a href="mailto:hello@pixelforge.example">hello@pixelforge.example</a>
            <p>Mon–Fri, 9:00–17:00</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Pixel Forge. Independent custom console workshop.</p>
          <p>Original manufacturers are not affiliated with Pixel Forge.</p>
        </div>
      </div>
    </footer>
  );
}
