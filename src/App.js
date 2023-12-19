import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Todo list/Firebase';
import Login from './Todo list/Login';
import Todolist from './Todo list/Todolist';
import Signup from './Todo list/Signup';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const renderRoutes = () => {
    return (
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Todolist" element={<Todolist />} />
        {/* Add a default route or redirect to another route */}
        <Route path="/" element={<Navigate to="/Login" />} />
      </Routes>
    );
  };

  return (
    <Router>
      
      {user ? (
        <div className="container">
          <Todolist />
        </div>
      ) : (
        renderRoutes()
      )}
    </Router>
  );
}

export default App;
