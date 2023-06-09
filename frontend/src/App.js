import { Routes, Route } from "react-router-dom";
import Home from "./components/Web";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContextProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Web from "./components/Home";
import AvisoLegal from "././components/AvisoLegal";
/* import Footer from "./components/Footer"; */
/* import Navbar from "./components/Navbar"; */
/* import Profile from "./components/Profile";
 */ import "./index.css";
/* import Footer from "./components/Footer"; */
import Calendar from "./components/Calendar/Index";
import Modelo from "./components/modelo/Modelo";

function App() {
  return (
    <div className='bg-slate-300 h-screen text-black flex'>
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
          {/*           <Route path='/profile' element={<Profile />} />
           */}
        </Routes>
      </AuthContextProvider>
      {/*  <Footer /> */}
    </div>
  );
}

export default App;
