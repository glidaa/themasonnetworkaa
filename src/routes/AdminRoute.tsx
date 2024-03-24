import { useState, useEffect, lazy, Suspense } from "react";
import Cookies from 'js-cookie';
const AdminLogin = lazy(() => import("@pages/AdminLogin"));
const AdminPanel = lazy(() => import("@pages/AdminPanel"));

import AdminAuthContext from "@contexts/AdminAuthContext";

const AdminRoute = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedInCookie = Cookies.get("adminLoggedIn");
    if (adminLoggedInCookie) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <AdminAuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Suspense>{loggedIn ? <AdminPanel /> : <AdminLogin />}</Suspense>
    </AdminAuthContext.Provider>
  );
};

export default AdminRoute;
