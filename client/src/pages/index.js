"use client";

import { useSelector } from "react-redux";
import User from "./user";
import Admin from "./admin";
import Login from "./login";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { token, role } = useSelector((state) => state.nameManash);
  const router = useRouter();

  const ProtectedPages = () => {
    switch (role) {
      case "user":
        return <User />;
      case "superadmin":
        return <Admin />;
      default:
        return <Login />;
    }
  };
  return (
    <>
      <ProtectedPages />
    </>
  );
}
