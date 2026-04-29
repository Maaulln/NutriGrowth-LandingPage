const BASE_URL = "http://localhost:8080/api";

export interface Waitlist {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface WaitlistResponse {
  data: Waitlist[];
  total: number;
}

export interface WaitlistFormData {
  name: string;
  email: string;
}

async function request<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    ...options,
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || "Terjadi kesalahan pada server.");
  return json as T;
}

export const api = {
  getWaitlists: () => request<WaitlistResponse>("/waitlist"),

  createWaitlist: (data: WaitlistFormData) =>
    request<{ message: string; data: Waitlist }>("/waitlist", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  updateWaitlist: (id: number, data: WaitlistFormData) =>
    request<{ message: string; data: Waitlist }>(`/waitlist/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  deleteWaitlist: (id: number) =>
    request<{ message: string }>(`/waitlist/${id}`, { method: "DELETE" }),
};
