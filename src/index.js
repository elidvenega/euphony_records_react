import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './style.scss';
import App from "./App";
import { ContactForm } from "./components/ContactForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="ContactForm" element={<ContactForm />} />
    </Routes>
  </BrowserRouter>
);
