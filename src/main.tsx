import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRouter } from "./routes/approuter/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Toast from "./components/alert/Toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
      <Toast />
    </BrowserRouter>
  </StrictMode>
);
