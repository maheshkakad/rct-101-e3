import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const [loginC , setLoginC] = useState({});
  const { login } = useContext(AuthContext);

  const handlechange =(e) => {
    const { name , value } = e.target;
    setLoginC({
      ...loginC,
      [name]: value
    })
  };

  const handlesubmit=(e) => {
   e.preventDefault();
   login();
  }
  return (
    <div>
     <form onSubmit={handlesubmit}>
       <input data-cy="login-email" placeholder="email" onChange={handlechange}/>
       <input data-cy="login-password" placeholder="password" onChange={handlechange} />
       <button data-cy="login-submit" type="submit">Login</button>
     </form>
    </div>
  );
};

export default Login;
