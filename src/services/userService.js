import axios from "axios";

const registerNewUser = (data) => {
  return axios.post("http://localhost:8080/api/create-user", data);
};

const loginUser = (email, password) => {
  return axios.post("http://localhost:8080/api/login", {
    email,
    password,
  });
};

export { registerNewUser, loginUser };
