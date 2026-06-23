"use client";

import { FormEvent, useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Newsletter signup", { email });
    setSuccess(true);
    setEmail("");
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
      {success && <p>Thanks. You are on the update list.</p>}
    </form>
  );
}
