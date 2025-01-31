// import React, { createContext, useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export const AuthContext = createContext();
// const AuthContextProvider = ({ children }) => {
//   const [authenticated, setAuthenticated] = useState(() => {
//     return localStorage.getItem("token") ? true : false;
//   });
//   //   console.log(authenticated);
//   const [token, setToken] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     console.log(location);
//   }, [location]);

//   useEffect(() => {
//     console.log(token);
//   }, [token]);
  
//   const login = (authToken) => {
//     setAuthenticated(true);
//     setToken(authToken);
//     localStorage.setItem("token", authToken);
//     navigate(location.state.from || "/");
//   };
//   // this will take token from login page
//   const logout = (authToken) => {
//     setToken(null);
//     setAuthenticated(false);
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ authenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
