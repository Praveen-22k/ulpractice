// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// // ── PostgreSQL — Chat List ──
// export const getAllChats = () => API.get("/chats");
// export const createChat = (data) => API.post("/chats", data);
// export const updateChat = (id, data) => API.put(`/chats/${id}`, data);
// export const deleteChat = (id) => API.delete(`/chats/${id}`);

// // ── Firebase — Messages ──
// export const getMessages = (chatId) => API.get(`/messages/${chatId}`);
// export const sendMessage = (chatId, data) =>
//   API.post(`/messages/${chatId}`, data);
// export const deleteMessage = (chatId, messageId) =>
//   API.delete(`/messages/${chatId}/${messageId}`);

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change if needed
});

// ✅ Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("accessToken");
  console.log("TOKEN SENT:", token);
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// GET chats
export const getAllChats = () => API.get("/chats");

// GET messages (auth required)
export const getMessages = (chatId) => API.get(`/messages/${chatId}`);

// SEND message (auth required)
export const sendMessage = (chatId, data) =>
  API.post(`/messages/${chatId}`, data);
