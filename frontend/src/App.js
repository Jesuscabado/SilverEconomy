import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContextProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Web from "./components/Web";
import AvisoLegal from "././components/AvisoLegal";
/* import Footer from "./components/Footer"; */
/* import Navbar from "./components/Navbar"; */
import "./index.css";
import BoxIniciarSesin from "./components/BoxIniciarSesin";
import Calendar from "./components/Calendar/Index";
import Chat from "./components/chat/Chat";
import ContactForm from "./components/contactForm/ContactForm";
import MUNICIPIO_REC_OCIO from "./components/modelo/MUNICIPIO_REC_OCIO";
function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthContextProvider>
        {/*    <Navbar /> */}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/web" element={<Web />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/avisolegal" element={<AvisoLegal />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/MUNICIPIO_REC_OCIO" element={<MUNICIPIO_REC_OCIO />} />
          <Route path="/BoxIniciarSesin" element={<BoxIniciarSesin />} />
        </Routes>
      </AuthContextProvider>
      {/*  <Footer /> */}
    </div>
  );
}

export default App;
