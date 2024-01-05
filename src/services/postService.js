import axios from "axios";

const baseURL = "https://api-charity-connect.onrender.com";

export function getAllPosts() {
  const response = axios.get(`${baseURL}/post`);
  return response;
}