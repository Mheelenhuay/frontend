const API_URL = "https://back-end-dusky-three.vercel.app"; 

async function request(url, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const res = await fetch(`${API_URL}${url}`, {
    ...options,
    headers,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || data.message || "API Error");
  }

  return data;
}

// ✅ Login
export function loginAPI(username, password) {
  return request("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

// ✅ Users
export function getUsersAPI() {
  return request("/api/users");
}

export function getUserByIdAPI(id) {
  return request(`/api/users/${id}`);
}

export function createUserAPI(data) {
  return request("/api/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateUserAPI(id, data) {
  return request(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export function deleteUserAPI(id) {
  return request(`/api/users/${id}`, {
    method: "DELETE",
  });
}
