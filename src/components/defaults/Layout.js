import { Outlet } from "react-router-dom";
import Header from "../header/Header";

export default function Layout() {
  return (
    <div className="relative">
      <Header />
      <div className="pt-14 px-3">
        <Outlet />
      </div>
    </div>
  )
}