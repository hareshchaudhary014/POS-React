import "./App.css";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import TopNav from "./Components/TopNav/TopNav";
import Navbar from "./Components/Navbar/Navbar";
import { AuthProvider } from "./Components/Auth/auth";
import { ProtectedRoute } from "./Components/Auth/ProtectedRoute";
import Categories from "./pages/Categories/Categories";
import AddCategory from "./pages/Categories/AddCategory";
import Brands from "./pages/Brands/Brands";
import AddBrand from "./pages/Brands/AddBrands";
import ViewStock from "./pages/Stock/ViewStock";
import AddStock from "./pages/Stock/AddStock";

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
                <Route
                  index
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  index
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  index
                  path="/categories"
                  element={
                    <ProtectedRoute>
                      <Categories />
                    </ProtectedRoute>
                  }
                />
                <Route
                  index
                  path="/categories/add-category"
                  element={
                    <ProtectedRoute>
                      <AddCategory />
                    </ProtectedRoute>
                  }
                />
                <Route
                  index
                  path="/brands"
                  element={
                    <ProtectedRoute>
                      <Brands />
                    </ProtectedRoute>
                  }
                />
                <Route
                  index
                  path="/brands/add-brand"
                  element={
                    <ProtectedRoute>
                      <AddBrand />
                    </ProtectedRoute>
                  }
                />

                <Route
                  index
                  path="/stocks"
                  element={
                    <ProtectedRoute>
                      <ViewStock />
                    </ProtectedRoute>
                  }
                />
                <Route
                  index
                  path="/add-stock"
                  element={
                    <ProtectedRoute>
                      <AddStock />
                    </ProtectedRoute>
                  }
                />
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
