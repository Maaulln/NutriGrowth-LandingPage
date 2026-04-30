const BASE_URL = "http://localhost:8080/api";

export interface RegisteredUser {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface RegisteredUserResponse {
  data: RegisteredUser[];
  total: number;
}

export interface UserFormData {
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
  getUsers: () => request<RegisteredUserResponse>("/users"),

  createUser: (data: UserFormData) =>
    request<{ message: string; data: RegisteredUser }>("/users", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  updateUser: (id: number, data: UserFormData) =>
    request<{ message: string; data: RegisteredUser }>(`/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  deleteUser: (id: number) =>
    request<{ message: string }>(`/users/${id}`, { method: "DELETE" }),
};
