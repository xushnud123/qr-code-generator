import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Outlet } from "react-router-dom";
import SignUp from "../../Authentication/sign-up/sign-up";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  useEffect(() => {

  },[currentUser])
  return !!currentUser ? <Outlet /> : <SignUp/>
}
