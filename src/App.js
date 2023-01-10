import "./App.css";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import TopNav from "./Components/TopNav/TopNav";
import Navbar from "./Components/Navbar/Navbar";
import { AuthProvider } from "./Components/Auth/auth";
import { ProtectedRoute } from "./Components/Auth/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <div className="flex">
            <Navbar />
            <div className="w-full">
              <TopNav />
              <Routes>
                <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
