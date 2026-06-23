"use client";

import { FormEvent, useState } from "react";
import { leadSetupCopy, submitLead } from "@/lib/leads";

export function CustomBuildForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());
    setError("");
    try {
      await submitLead({ type: "quote", data });
      console.log("Custom build request", data);
      setSuccess(true);
      event.currentTarget.reset();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not send request.");
    }
  };

  return (
    <form className="request-form" onSubmit={submit}>
      {["name", "email", "console model", "shell colour", "storage size", "mods wanted", "budget"].map((field) => (
        <label key={field}>
          <span>{field}</span>
          <input name={field} type={field === "email" ? "email" : "text"} required={field !== "mods wanted"} />
        </label>
      ))}
      <label className="request-form__wide">
        <span>extra notes</span>
        <textarea name="extra notes" rows={5} />
      </label>
      <button className="button button--primary" type="submit">Send request</button>
      {success && <p className="form-success">Request captured for Pixel Forge. {leadSetupCopy}</p>}
      {error && <p className="checkout-error">{error}</p>}
    </form>
  );
}
