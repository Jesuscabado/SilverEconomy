import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContextProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Web from "./components/Web";
import AvisoLegal from "././components/AvisoLegal";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.css";
import BoxIniciarSesin from "./components/BoxIniciarSesin";

function App() {
  return (
    <div className='bg-slate-300 h-screen text-black flex'>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/web' element={<Web />} />
          <Route path='/avisolegal' element={<AvisoLegal />} />
          <Route path='/BoxIniciarSesin' element={<BoxIniciarSesin />} />
        </Routes>
      </AuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
