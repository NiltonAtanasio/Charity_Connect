import axios from "axios";

const baseURL = "http://localhost:8080/post";

export function getAllPosts() {
  const response = axios.get(baseURL);
  return response;
}