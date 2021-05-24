import axios from "axios";
import { useState, useContext } from "react";
 

const API_URL = "http://127.0.0.1/SARD/backend/public/api/";

class AuthService {

  isLoggedIn() {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }

  login(login, password) {

    var formData = new FormData();

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    formData.append("login", login);
    
    formData.append("password", password);

    return axios.post(API_URL + "login", formData, config).then((response) => {
      if (response.data.token) {
        
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
