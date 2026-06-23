import type { Metadata } from "next";
import { buildGallery } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Build Gallery",
  description: "Before and after custom console builds from Pixel Forge.",
};

export default function GalleryPage() {
  return (
    <section className="simple-page">
      <div className="container">
        <span className="eyebrow">Build gallery</span>
        <h1>Before and after custom console work.</h1>
        <div className="gallery-build-grid">
          {buildGallery.map((build) => (
            <article className="build-card" key={build.title}>
              <div className="before-after">
                <div style={{ background: build.color }}><span>Before</span><small>{build.before}</small></div>
                <div style={{ background: build.secondary }}><span>After</span><small>{build.after}</small></div>
              </div>
              <span>{build.model}</span>
              <h2>{build.title}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
