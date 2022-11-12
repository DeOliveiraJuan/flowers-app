import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ShoppingCartContextProvider } from "./contexts/ShoppingCartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ShoppingCartContextProvider>
      <Router>
        <App />
      </Router>
    </ShoppingCartContextProvider>
  </AuthContextProvider>
);

reportWebVitals();
