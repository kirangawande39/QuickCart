import axios from "axios";


const BAKCEND_URL = import.meta.env.VITE_BACKEND_URL;

// Axios instance with baseURL (can be used everywhere)
const API = axios.create({
  baseURL: BAKCEND_URL, // Replace with your backend URL
});

// Automatically add token to headers if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
