import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

import Home from "./pages/Home";
import Solar from "./pages/Solar";

import "./styles/global.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/solar"
          element={<Solar />}
        />
      </Routes>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />

      <Footer />
    </BrowserRouter>
  );
}