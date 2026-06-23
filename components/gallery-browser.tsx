"use client";

import { useMemo, useState } from "react";
import { buildGallery } from "@/lib/site-data";

const categories = ["All", "Featured", "PlayStation", "Nintendo Switch", "Nintendo"] as const;

export function GalleryBrowser() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () =>
      buildGallery.filter((build) => {
        if (category === "All") return true;
        if (category === "Featured") return build.featured;
        return build.category === category;
      }),
    [category],
  );

  return (
    <>
      <div className="filter-pills gallery-filters" aria-label="Gallery filters">
        {categories.map((item) => (
          <button key={item} className={category === item ? "is-active" : ""} onClick={() => setCategory(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="gallery-build-grid">
        {filtered.map((build) => (
          <article className={`build-card ${build.featured ? "build-card--featured" : ""}`} key={build.title}>
            <div className="before-after">
              <div style={{ background: build.color }}><span>Before</span><small>{build.before}</small></div>
              <div style={{ background: build.secondary }}><span>After</span><small>{build.after}</small></div>
            </div>
            <span>{build.model} · {build.category}</span>
            <h2>{build.title}</h2>
            <p>{build.spotlight}</p>
          </article>
        ))}
      </div>
    </>
  );
}
