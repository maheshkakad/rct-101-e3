import React, { createContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuth , setAuth] = useState(false);
 const navigate = useNavigate();

 const { state }  = useLocation();

 const login = () => {
   setAuth(true);
   if(StaticRange.from){
     Navigate(state.from , { replace: true})
   }else{
     navigate("/")
   }
 }

 const logout = () => {
   setAuth(false);
   navigate("/")
 }

  return <AuthContext.Provider value={{ isAuth , login,logout}}>{children}</AuthContext.Provider>;
};
