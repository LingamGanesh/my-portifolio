import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/*
  ✅ NO ThemeProvider here.
  ThemeProvider lives in App.jsx ONLY.
  Two providers = dark class never syncs = toggle appears broken.
*/
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);