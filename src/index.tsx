import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bazar from "./pages/Bazar";
import ColorProvider from "./context/colorSchema.context";
import ColorSchemaChanger from "./pages/ColorSchemaChanger";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bazar" element={<Bazar />} />
            <Route path="/colorchange" element={<ColorSchemaChanger />} />
          </Route>
        </Routes>
      </ColorProvider>
    </BrowserRouter>
  </React.StrictMode>
);
