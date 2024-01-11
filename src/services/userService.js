import axios from "axios";

const baseURL = "http://localhost:8080/user";

export function signup(data) {
  const body = {
    ...data,
    userName: generateUserName(data.name),
    avatar: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
  };
  const response = axios.post(`${baseURL}/register`, body);
  return response;
}

function generateUserName(name) {
  const username = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${username}${randomNumber}`;
};