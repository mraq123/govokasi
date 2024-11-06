// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { getLoggedInUserData } from "../middleware/Middleware";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getLoggedInUserData();
      setUser(userData);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="text-xl font-bold text-gray-700 animate-pulse">
          Loading...
        </h1>
        <div className="mt-4 loader"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
