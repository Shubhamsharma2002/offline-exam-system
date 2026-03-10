import React from "react";
import { Route, Routes } from "react-router-dom";

// Layouts
import MainLayout from "../components/layouts/MainLayout";
import AdminLayout from "../components/layouts/AdminLayout";
import AuthLayout from "../components/layouts/AuthLayout";

// Public Pages
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Exams from "../pages/public/Exams";

// Auth Pages
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

// Admin Pages
// import AdminDashboard from "../pages/admin/Dashboard";
// import Users from "../pages/admin/Users";

// Route Guard
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. PUBLIC GROUP: Navbar + Content + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exams" element={<Exams />} />
      </Route>

      {/* 2. AUTH GROUP: Centered layout without Nav/Footer */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* 3. ADMIN GROUP: Sidebar + Dashboard (Protected) */}
      {/* Humne ise ProtectedRoute se wrap kiya hai taaki sirf admin access kar sake */}
      {/* <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Route> */}

      {/* 4. 404 Page (Catch-all route) */}
      <Route path="*" element={<div className="flex h-screen items-center justify-center text-2xl">404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;