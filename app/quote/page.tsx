import type { Metadata } from "next";
import { CustomBuildForm } from "@/components/custom-build-form";

export const metadata: Metadata = {
  title: "Custom Build Request",
  description: "Request a quote for a custom console build from Pixel Forge.",
};

export default function QuotePage() {
  return (
    <section className="simple-page">
      <div className="container request-layout">
        <div>
          <span className="eyebrow">Get a quote</span>
          <h1>Custom build request.</h1>
          <p>Send the console model, shell colour, storage size, mods and budget. The form logs data locally for now so a backend can be connected later.</p>
        </div>
        <CustomBuildForm />
      </div>
    </section>
  );
}
