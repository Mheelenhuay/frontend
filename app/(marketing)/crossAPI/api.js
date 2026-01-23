const API_URL = "https://back-end-dusky-three.vercel.app"; // local
// const API_URL = "https://YOUR_BACKEND.vercel.app"; // ตอน deploy

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

// ✅ login
export function loginAPI(username, password) {
  return request("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

// ✅ get users
export function getUsersAPI() {
  return request("/api/users");
}

// ✅ create user
export function createUserAPI(data) {
  return request("/api/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
