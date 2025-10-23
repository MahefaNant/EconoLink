import { fetcher } from "@/lib/fetcher";

export async function logout() {
  const res = await fetcher("/auth/logout", {
    method: "POST",
    includeCredentials: true,
  });

  return res.user;
}
