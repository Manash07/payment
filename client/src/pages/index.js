"use client";

import { useSelector } from "react-redux";
import User from "./user";
import Admin from "./admin";

export default function Home() {
  const { token, role } = useSelector((state) => state.nameManash);

  if (token && role == "user") return <User />;
  return <Admin/>

}
