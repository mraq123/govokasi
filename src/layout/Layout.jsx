import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import misc from "../assets/misc.png";
import foto from "../assets/foto.png";

export default function Layout() {
  return (
    <div className="flex flex-row w-screen h-screen overflow-hidden">
      <Sidebar />
      {/* header components */}
      <div className="w-full h-auto p-2">
        <div className="w-full  h-10 p-2 justify-end items-center flex gap-2">
          <div className="flex gap-3 justify-center items-center">
            <h1 className="text-sm font-poppins text-[orange] text-[ht]">
              Sisa 5 Kredit
            </h1>
            <button className="bg-custom-gradient text-white p-1 px-4 rounded-xl ">
              <span className="text-white text-[ht] font-poppins p-2">
                Upgrade Plan
              </span>
            </button>
          </div>
          <div className="flex gap-2 items-center justify-center p-2">
            <img src={misc} alt="bell" />
            <h1 className="text-sm font-poppins text-[ht]">Group 3 WD</h1>
            <img src={foto} alt="foto" className="rounded-full" />
          </div>
        </div>

        <div className="p-5 mt-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
