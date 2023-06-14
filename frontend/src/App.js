import { Routes, Route, Form } from "react-router-dom";
import Home from "./components/Web";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContextProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Web from "./components/Home";
import AvisoLegal from "././components/AvisoLegal";
/* import Navbar from "./components/Navbar"; */
import Profile from "./components/Profile";
import "./index.css";
/* import Footer from "./components/Footer"; */
import Calendar from "./components/Calendar/Index";
import Chat from "./components/chat/Chat";
import ContactForm from "./components/contactForm/ContactForm";
import Modelo from "./components/modelo/Modelo";
import MapaCalor from "./components/MapaCalor";
import Informes from "./components/Informes";
import Notificaciones from "./components/Notificaciones";
import PlanAccion from "./components/PlanAccion";
import Settings from "./components/Settings";
import RegisterOverlay from "./components/RegisterOverlay";
import Proyectos from "./components/Proyectos";
import Formulario from "./components/contactForm/Formulario";
import MesssageForm from "./components/MesssageForm";
import Movilidad from "./components/Movilidad";
import Cuidado from "./components/Cuidado";
import Sedentarismo from "./components/Sedentarismo";
import InformeChart from "./components/InformeChart";


function App() {
  return (
    <div className="h-screen text-black flex">

      <AuthContextProvider>
        {/*    <Navbar /> */}
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Web />
              </ProtectedRoute>
            }
          />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/avisolegal' element={<AvisoLegal />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/modelo' element={<Modelo />} />
          <Route path='/mapacalor' element={<MapaCalor />} />
          <Route path='/informes' element={<Informes />} />
          <Route path='/notificaciones' element={<Notificaciones />} />
          <Route path='/planaccion' element={<PlanAccion />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/web/*' element={<Web />} />
          <Route path='/registeroverlay' element={<RegisterOverlay />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/mensajesformulario' element={<MesssageForm />} />
            <Route path="/movilidad" element={<Movilidad />} />
          <Route path="/cuidado" element={<Cuidado />} />
          <Route path="/sedentarismo" element={<Sedentarismo />} />
          <Route path="/informechart" element={<InformeChart />} />

        </Routes>
      </AuthContextProvider>
      {/*  <Footer /> */}
    </div>
  );
}

export default App;
