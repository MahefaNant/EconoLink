import { fetcher } from "@/lib/fetcher";

export async function getMe() {
  const res = await fetcher("/auth/me", {
    method: "GET",
    includeCredentials: true,
  });

  return res.user;
}
