import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContextProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import FileUpload from "./components/FileUpload";
import UserList from "./admin/UserList";


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
          <Route path='/upload' element={<FileUpload />} />
          <Route path="/admin/users" element ={<UserList />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
