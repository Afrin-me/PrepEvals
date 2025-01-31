// import React, { useContext, useEffect } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "./AuthContextProvider";

// const ProtectedRoute = ({ children }) => {
//   const { authenticated } = useContext(AuthContext);
//   console.log(authenticated);
//   const location = useLocation();

//   useEffect(() => {
//     console.log(location);
//   }, [location]);
//   if (!authenticated) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }
//   return children;
// };

// export default ProtectedRoute;
