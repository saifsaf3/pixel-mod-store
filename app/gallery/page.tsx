import type { Metadata } from "next";
import { GalleryBrowser } from "@/components/gallery-browser";

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
        <GalleryBrowser />
      </div>
    </section>
  );
}
