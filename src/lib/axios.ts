import axios from "axios";
import { getCookie } from "cookies-next";
import { toast } from "sonner";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    platform: "web",
    "app-version": "1.0.0",
    "device-id": "browser-unique-id",
  },
});

instance.interceptors.request.use((config) => {
  const token = getCookie("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        "حدث خطأ أثناء تنفيذ الطلب. برجاء المحاولة لاحقًا.";
      toast.error(message); 
    } else {
      toast.error("حدث خطأ غير متوقع.");
    }

    return Promise.reject(error);
  }
);

export default instance;
