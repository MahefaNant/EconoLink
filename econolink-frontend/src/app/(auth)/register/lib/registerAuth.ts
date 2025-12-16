import { fetcher } from "@/lib/fetcher";

export async function registerAuth(
  name: string,
  email: string,
  password: string,
  retapePassword: string
) {
  if (password !== retapePassword) {
    throw new Error("Passwords do not match");
  }
  const res = await fetcher("/auth/signup", {
    method: "POST",
    body: { email, password, name },
    includeCredentials: true,
  });
  return res.user;
}
