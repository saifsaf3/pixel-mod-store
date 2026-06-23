"use client";

import { FormEvent, useState } from "react";

export function CustomBuildForm() {
  const [success, setSuccess] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.log("Custom build request", data);
    setSuccess(true);
    event.currentTarget.reset();
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
      {success && <p className="form-success">Request logged. I will use this structure for the backend later.</p>}
    </form>
  );
}
