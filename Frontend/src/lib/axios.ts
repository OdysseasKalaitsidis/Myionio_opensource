import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;
      const data: any = error.response.data;

      // Enterprise-grade Status Code Map
      const statusMessages: Record<number, string> = {
        400: "Invalid Request. Please check your input.",
        401: "Session expired. Please sign in again.",
        403: "Access Denied. You don't have permission.",
        404: "Resource not found.",
        408: "Request timed out. Please try again.",
        409: "Conflict detected. Please refresh.",
        422: "Validation Failed. Please check form fields.",
        429: "Too many requests. Please slow down.",
        500: "Internal Server Error. Our team is notified.",
        502: "Bad Gateway. Service may be down.",
        503: "Service Unavailable. Executing maintenance.",
        504: "Gateway Timeout. Server took too long."
      };

      const message = 
        data?.message || 
        statusMessages[status] || 
        `Unknown Error: ${status}`;

      // Prevent duplicate toasts maybe? For now just show.
      if (status !== 401 || !error.config?.url?.includes("/auth/me")) {
         import("react-hot-toast").then(({ toast }) => {
            toast.error(message);
         });
      }

      console.error(
        `❌ API Error: [${status}]`,
        data
      );

      const isAuthRequest = error.config?.url?.includes("/auth/");

      if (status === 401 && !isAuthRequest) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
    } else if (error.request) {
      // Network Error
      import("react-hot-toast").then(({ toast }) => {
        toast.error("Network Error. Please check your connection.");
      });
      console.error("❌ No response received:", error.request);
    } else {
      console.error("❌ Request setup error:", error.message);
    }

    return Promise.reject(error);
  }
);
