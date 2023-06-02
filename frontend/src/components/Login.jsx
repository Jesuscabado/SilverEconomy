import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../components/Firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const firestore = getFirestore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRol, setSelectedRol] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password, selectedRol);
    const infoUser = signInWithEmailAndPassword(
      auth,
      email,
      password,
      selectedRol
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
        console.log(infoUser.user.uid);
        const docuRef = doc(firestore, `user/${infoUser.user.uid}`);
        setDoc(docuRef, { correo: email, rol: selectedRol });
      })
      .catch((error) => {
        alert("Invalid email or password");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const onGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleRolChange = (e) => {
    setSelectedRol(e.target.value);
    console.log(selectedRol);
  };

  return (
    <>
      <main>
        <section>
          <div>
            <p> FocusApp </p>

            <form>
              <div>
                <label htmlFor='email-address'>Email address</label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  required
                  placeholder='Email address'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='rol'>Rol</label>
                <select
                  id='rol'
                  name='rol'
                  required
                  value={selectedRol}
                  onChange={handleRolChange}
                >
                  <option value='user'>Admin</option>
                  <option value='admin'>User</option>
                </select>
              </div>

              <div>
                <button onClick={onLogin}>Login</button>
                <button onClick={onGoogleLogin}>Login with google</button>
              </div>
            </form>

            <p className='text-sm text-white text-center'>
              No account yet? <NavLink to='/signup'>Sign up</NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
