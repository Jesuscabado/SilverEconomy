import React, { useState, useEffect } from "react";
import Home from "./screens/Home";
import Signup from "./components/Signup";
import Login from "./screens/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "./components/Firebase";

function App() {
  const firestore = getFirestore();
  const [user, setUser] = useState(null);

  async function getRol(uid) {
    const docRef = doc(firestore, `user/${uid}`);
    const docu = await getDoc(docRef);
    const docufinal = docu.data().rol;
    return docufinal;
  }

  function setUserWithFirebaseAndRol(user) {
    getRol(user.uid).then((rol) => {
      const userData = {
        email: user.email,
        uid: user.uid,
        rol: rol,
      };
      setUser(userData);
      console.log("userdata final", userData);
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        if (!user) {
          setUserWithFirebaseAndRol(user);
        }
        // User is signed in
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
