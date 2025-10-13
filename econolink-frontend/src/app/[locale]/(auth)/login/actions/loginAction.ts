"use server";

import { fetcher } from "@/lib/fetcher";

export async function loginAction(email: string, password: string) {
  const res = await fetcher("/auth/signin", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    includeCredentials: true,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message?.[0] || "Login failed");
  }

  const data: { user: { id: string; email: string; name: string } } =
    await res.json();
  return data.user;
}
