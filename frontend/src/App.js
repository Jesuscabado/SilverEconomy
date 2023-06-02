import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/Firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed in

        setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path='/' element={<Home user={user} />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
