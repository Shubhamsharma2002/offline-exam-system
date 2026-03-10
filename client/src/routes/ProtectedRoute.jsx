import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const location = useLocation();

  // 1. Auth Logic: Abhi ke liye hum dummy data use kar rahe hain.
  // Baad mein aap ise AuthContext se connect karenge.
  const user = { 
    isLoggedIn: true, // Isse false karke check karein redirect hota hai ya nahi
    role: 'admin'     // 'admin' ya 'student'
  };

  // 2. Agar user logged in nahi hai -> Login page par bhej do
  // 'state' mein current location bhej rahe hain taaki login ke baad wapas yahin aaye
  if (!user.isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. Role-Based Access: Agar user ka role allowed list mein nahi hai
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />; 
  }

  // 4. Agar sab sahi hai -> Child routes (Outlet) dikhao
  return <Outlet />;
};

export default ProtectedRoute;