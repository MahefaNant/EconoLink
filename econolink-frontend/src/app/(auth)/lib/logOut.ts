/* eslint-disable @typescript-eslint/no-unused-vars */
import { fetcher } from "@/lib/fetcher";

export async function logout() {
  try {
    const res = await fetcher("/auth/logout", {
      method: "POST",
      includeCredentials: true,
    });

    localStorage.removeItem("user_info");
    return res.user;
  } catch (error) {
    return null;
  }
}
