import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();
const API_URL = import.meta.env.VITE_API_URL;//for vite
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const checkLoginStatus = async () => {
    try {
        const res=await axios.get(`${API_URL}/me`,{
            withCredentials:true,
        });
        setIsLoggedIn(true);
        setUser(res.data);
    } catch (error) {
      console.error("Error checking login status:", error);
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  useEffect(() => {
  checkLoginStatus();
}, []);


  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { email, password },
        { withCredentials: true }
      );
      setIsLoggedIn(true);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }
  const logout = async () => {
    await axios.post(`${API_URL}/logout`, {}, {
      withCredentials: true,
    });
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn,user,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
};
