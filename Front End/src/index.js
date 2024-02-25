import App from "./App";

import "bootstrap/dist/css/bootstrap.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Auth/context/AuthContext";
const container = document.getElementById("root");
const root = createRoot(container);
// createRoot(container!) if you use TypeScript
root.render(

  <BrowserRouter>
    <AuthProvider>
      
 
    <App />

    </AuthProvider>
  </BrowserRouter>

    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
