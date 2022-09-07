import { Outlet } from "react-router-dom";
import Header from "../header/Header";

export default function Layout() {
  return (
    <div className="relative w-screen h-screen">
      <Outlet />
    </div>
  )
}