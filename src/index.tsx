import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './style.scss';
import App from "./App";
import { Contact } from "./pages/Contact";
import { Albums } from "./pages/Albums";


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Albums" element={<Albums />} />
    </Routes>
  </BrowserRouter>
);
