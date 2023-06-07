import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { uploadFile } from "../Firebase";
import SideBar from "./SideBar";

function Home() {
  const { user, logout, loading } = useAuth();
  const [file, setFile] = useState(null);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1>Loading...</h1>;

  // Function to handle file upload and get the URL
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await uploadFile(file);
      console.log(result); // URL of the uploaded file
    } catch (error) {
      console.log(error);
      alert("An error occurred while uploading the file");
    }
  };

  return (
    <div className='container mx-auto'>
      <SideBar />
      <div className='w-full max-w-xs m-auto text-black'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <p className='text-xl mb-4 text-right'>
            Welcome {user.displayName || user.email}
          </p>
          <button
            className='bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white'
            onClick={handleLogout}
          >
            Logout
          </button>
          <form onSubmit={handleSubmit}>
            <input
              type='file'
              name='file'
              id='file'
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button className='bg-red-500 hover:bg-red-700 rounded py-2 px-4 text-white'>
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
