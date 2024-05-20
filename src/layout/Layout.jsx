import React, { useEffect, useState } from 'react';
import Navi from '../components/Navi'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './../firebase/firebase';
const Layout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className='layout'>
      {auth ? (
        <>
          <Navi handleLogout={handleLogout} user={user} />
          <Outlet />
          <Footer />
        </>
      ) : (
        <div>
          <h1>No user is signed in</h1>
          {/* Your login/signup interface */}
        </div>
      )}
    </div>
  )
}

export default Layout