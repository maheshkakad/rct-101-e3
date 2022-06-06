import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";




// use react-router Link or NavLink
const Link = <a href="/" />;

const Navbar = () => {
  const {isAuth ,login, logout} = useContext(AuthContext)

 const navigate = useNavigate();

  const handleonclick =()=>{
       if(isAuth){
         logout()
       }else{
         navigate("/login");
         login();
       }   
  }
  return (
    <div data-cy="navbar"  style={{ display:"flex"}}>
      <Link data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
     <Link to="/login"> <button data-cy="navbar-login-logout-button" onClick={handleonclick}>{ isAuth? "Logout" : "Login"}</button></Link>
    </div>
  );
};

export default Navbar;
