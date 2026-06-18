import Link from "next/link";
import { ConsoleArtwork } from "@/components/console-artwork";
import { ArrowIcon, CheckIcon, SparkIcon } from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/products";

const featured = products.filter((product) => product.featured).slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__glow hero__glow--one" aria-hidden="true" />
        <div className="hero__glow hero__glow--two" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="hero__kicker"><SparkIcon /> Custom handhelds · Built in the UK</span>
            <h1>
              Old favourites.
              <br />
              <em>Forged anew.</em>
            </h1>
            <p>
              Carefully restored handheld consoles, rebuilt with modern screens,
              considered colourways and the reliability to become your daily carry.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" href="/products">
                Explore the collection <ArrowIcon />
              </Link>
              <Link className="text-link" href="#workshop">
                See how we build <span>↓</span>
              </Link>
            </div>
            <div className="hero__trust">
              <span><CheckIcon /> Professionally serviced</span>
              <span><CheckIcon /> 90-day warranty</span>
              <span><CheckIcon /> Built to order</span>
            </div>
          </div>

          <div className="hero__visual" aria-label="A collection of custom handheld consoles">
            <div className="hero-console hero-console--back">
              <ConsoleArtwork type="psp" color="#d8d0c2" secondary="#ef7a51" label="Custom cream PSP" />
            </div>
            <div className="hero-console hero-console--main">
              <ConsoleArtwork type="vita" color="#17191e" secondary="#8b5cf6" label="Custom black PS Vita" />
            </div>
            <div className="hero-console hero-console--front">
              <ConsoleArtwork type="gba" color="#6a438c" secondary="#f0b429" label="Custom purple Game Boy Advance" />
            </div>
            <div className="hero-orbit hero-orbit--one">IPS</div>
            <div className="hero-orbit hero-orbit--two">OLED</div>
            <div className="hero-serial">PF / 001</div>
          </div>
        </div>
        <div className="hero__marquee" aria-hidden="true">
          <div>
            <span>RESTORED</span><i>✦</i><span>REBUILT</span><i>✦</i><span>REIMAGINED</span><i>✦</i>
            <span>RESTORED</span><i>✦</i><span>REBUILT</span><i>✦</i><span>REIMAGINED</span><i>✦</i>
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container">
          <Reveal className="section-heading section-heading--split">
            <div>
              <span className="eyebrow">Workshop favourites</span>
              <h2>Built with purpose.<br />Finished with personality.</h2>
            </div>
            <div>
              <p>Every console is disassembled, inspected and rebuilt by hand. Choose the finish; we handle the details.</p>
              <Link className="text-link" href="/products">View all consoles <ArrowIcon /></Link>
            </div>
          </Reveal>
          <div className="product-grid product-grid--featured">
            {featured.map((product, index) => (
              <Reveal key={product.id} delay={index * 75}>
                <ProductCard product={product} priority={index === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="craft-section" id="workshop">
        <div className="container craft-grid">
          <Reveal className="craft-visual">
            <div className="craft-visual__frame">
              <span className="craft-visual__label">Inside the forge</span>
              <ConsoleArtwork type="psp" color="#3b2c4d" secondary="#ff754f" label="PSP being prepared in the workshop" />
              <span className="craft-callout craft-callout--one"><i /> New shell assembly</span>
              <span className="craft-callout craft-callout--two"><i /> Controls calibrated</span>
              <span className="craft-callout craft-callout--three"><i /> 18-point test</span>
            </div>
          </Reveal>
          <div className="craft-copy">
            <Reveal>
              <span className="eyebrow">The Pixel Forge standard</span>
              <h2>More than a reshell.</h2>
              <p className="craft-copy__intro">
                A great custom console should feel right long after the first photograph.
                That starts beneath the shell.
              </p>
            </Reveal>
            <div className="process-list">
              {[
                ["01", "Strip & inspect", "Every donor console is opened, cleaned and checked for hidden damage or poor previous repairs."],
                ["02", "Restore & upgrade", "Wear components are replaced, controls calibrated and your selected upgrades fitted precisely."],
                ["03", "Build & test", "The complete system passes repeated gameplay, charging, connectivity and standby tests."],
              ].map(([number, title, copy], index) => (
                <Reveal className="process-item" key={number} delay={index * 80}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section collection-section">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">Choose your era</span>
            <h2>One workshop. Three generations.</h2>
          </Reveal>
          <div className="family-grid">
            <Reveal className="family-card family-card--wide">
              <Link href="/products?family=PlayStation">
                <div className="family-card__copy">
                  <span>01 / PlayStation</span>
                  <h3>Portable<br />powerhouses</h3>
                  <p>PSP and Vita builds from understated originals to translucent statement pieces.</p>
                  <span className="circle-arrow"><ArrowIcon /></span>
                </div>
                <ConsoleArtwork type="vita" color="#14161b" secondary="#8b5cf6" label="PlayStation collection" />
              </Link>
            </Reveal>
            <Reveal className="family-card" delay={80}>
              <Link href="/products?family=Nintendo Switch">
                <div className="family-card__copy">
                  <span>02 / Switch</span>
                  <h3>Modern<br />hybrids</h3>
                  <p>Portable, dockable and finished your way.</p>
                  <span className="circle-arrow"><ArrowIcon /></span>
                </div>
                <ConsoleArtwork type="switch" color="#72cdbd" secondary="#ed7165" label="Nintendo Switch collection" />
              </Link>
            </Reveal>
            <Reveal className="family-card family-card--warm" delay={160}>
              <Link href="/products?family=Nintendo">
                <div className="family-card__copy">
                  <span>03 / Nintendo</span>
                  <h3>Retro,<br />made vivid</h3>
                  <p>Dual screens and cartridge classics, restored.</p>
                  <span className="circle-arrow"><ArrowIcon /></span>
                </div>
                <ConsoleArtwork type="gba" color="#aaa6a0" secondary="#6c54a2" label="Retro Nintendo collection" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="story-section" id="about">
        <div className="container story-grid">
          <Reveal>
            <span className="story-number">10</span>
            <span className="story-number__label">handheld models<br />in the collection</span>
          </Reveal>
          <Reveal className="story-copy" delay={100}>
            <span className="eyebrow">Why Pixel Forge</span>
            <h2>Keeping good hardware in play.</h2>
            <p>
              We started Pixel Forge because the best handhelds deserve better than a
              drawer or landfill. We combine careful restoration with tasteful,
              practical upgrades—preserving what made each system special while making
              it dependable enough to use now.
            </p>
            <Link className="button button--outline" href="/products">Find your console <ArrowIcon /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
