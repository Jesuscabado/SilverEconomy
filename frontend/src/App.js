import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContextProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Web from "./components/Web";
import AvisoLegal from "././components/AvisoLegal";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='bg-slate-300 h-screen text-black flex'>
      <AuthContextProvider>
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
        </Routes>
      </AuthContextProvider>

      <Footer />
    </div>
  );
}

export default App;
