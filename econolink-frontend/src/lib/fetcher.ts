/* eslint-disable @typescript-eslint/no-explicit-any */
export type FetchOptions<T = any> = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: T;
  headers?: Record<string, string>;
  includeCredentials?: boolean;
};

export async function fetcher<T = any>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    method = "GET",
    body,
    headers = {},
    includeCredentials = true,
  } = options;

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: includeCredentials ? "include" : "same-origin",
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    const message = errData?.message || res.statusText;
    throw new Error(Array.isArray(message) ? message[0] : message);
  }

  return res.json();
}
