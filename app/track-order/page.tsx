import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Order",
  description: "Track the Pixel Forge custom build process.",
};

const steps = ["Order Received", "Parts Sourced", "Modding Started", "Testing", "Shipped"];

export default function TrackOrderPage() {
  return (
    <section className="simple-page">
      <div className="container narrow-page">
        <span className="eyebrow">Track order</span>
        <h1>Build progress timeline.</h1>
        <div className="timeline">
          {steps.map((step, index) => (
            <article key={step} className={index < 2 ? "is-complete" : ""}>
              <span>{index + 1}</span>
              <div><h2>{step}</h2><p>{index < 2 ? "Example completed state" : "Waiting for update"}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
