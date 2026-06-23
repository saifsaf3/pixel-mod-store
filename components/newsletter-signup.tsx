"use client";

import { FormEvent, useState } from "react";
import { leadSetupCopy, submitLead } from "@/lib/leads";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    try {
      await submitLead({ type: "newsletter", data: { email } });
      console.log("Newsletter signup", { email });
      setSuccess(true);
      setEmail("");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not sign up.");
    }
  };

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        required
      />
      <button className="button button--primary" type="submit">Sign up</button>
      {success && <p>Thanks. You are on the update list. {leadSetupCopy}</p>}
      {error && <p>{error}</p>}
    </form>
  );
}
