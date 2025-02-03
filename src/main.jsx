import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
// import ProtectedRoute from "./context/ProtectedRoute.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <AuthContextProvider>
        {/* ✅ AuthContextProvider wraps everything first */}

        {/* <ProtectedRoute> */}
        <App />
        {/* </ProtectedRoute> */}
      </AuthContextProvider>
    </HashRouter>

    {/* </BrowserRouter> */}
  </StrictMode>
);
