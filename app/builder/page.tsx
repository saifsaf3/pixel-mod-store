import type { Metadata } from "next";
import { BuildWizard } from "@/components/build-wizard";

export const metadata: Metadata = {
  title: "Build Your Own Console",
  description: "Choose a console, shell, storage and mods with live pricing.",
};

export default function BuilderPage() {
  return (
    <section className="simple-page">
      <div className="container">
        <span className="eyebrow">Build your own</span>
        <h1>Configure a custom console.</h1>
        <BuildWizard />
      </div>
    </section>
  );
}
