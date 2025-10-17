import { fetcher } from "@/lib/fetcher";

export async function loginAuth(email: string, password: string) {
  const res = await fetcher("/auth/signin", {
    method: "POST",
    body: { email, password },
    includeCredentials: true,
  });

  return res.user;
}
