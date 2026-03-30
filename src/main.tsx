import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import CircularProgress from "@mui/material/CircularProgress";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense
      fallback={
        <CircularProgress color="primary" size="150" className="spinner" />
      }
    >
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Suspense>
  </StrictMode>,
);
