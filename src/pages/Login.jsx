// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContextProvider"; // Ensure correct path

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const { login } = useContext(AuthContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // ✅ Prevent form refresh
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}{" "}
//       {/* ✅ Show error message */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

// export default Login;
