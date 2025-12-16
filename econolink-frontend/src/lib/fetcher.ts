/* eslint-disable @typescript-eslint/no-explicit-any */
export type FetchOptions<T = any> = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: T;
  headers?: Record<string, string>;
  includeCredentials?: boolean;
  noStoreCache?: boolean;
  baseUrl?: string;
};

export async function fetcher<T = any>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    method = "GET",
    body,
    headers = {},
    includeCredentials = true,
    noStoreCache = false,
    baseUrl = process.env.NEXT_PUBLIC_API_URL || "",
  } = options;

  const url = endpoint.startsWith("http") ? endpoint : `${baseUrl}${endpoint}`;

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: includeCredentials ? "include" : "same-origin",
    cache: noStoreCache ? "no-store" : "default",
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    const message = errData?.message || res.statusText;
    throw new Error(Array.isArray(message) ? message[0] : message);
  }

  return res.json();
}

export const checkApiConnection = async (): Promise<boolean> => {
  try {
    await fetcher("/app/health-check", {
      noStoreCache: true,
      includeCredentials: true,
    });
    return true;
  } catch {
    return false;
  }
};
