import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Circle from "../assets/circle_white.png";
import { SidebarMenuBottom, SidebarMenuTop } from "../lib/SidebarMenu";

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen w-1/5 bg-[#ffffff] flex flex-col p-5 justify-start gap-5  border-r-2 border-[#ECECEC] ">
      <div className="flex flex-col h-auto ">
        <img src={Logo} alt="" />

        <button className="bg-[#703BE7] text-white p-2 rounded-xl flex items-center justify-center gap-2 mt-12">
          <Link
            to={"/createvideo"}
            className="w-full flex justify-center items-center gap-2"
          >
            <span className="text-base font-semibold font-poppins">
              Buat Image
            </span>
            <span>
              <img className="text-white" src={Circle} alt="" />
            </span>
          </Link>
        </button>
      </div>

      {/* Sidebar Menu Top */}

      <div className="flex flex-col gap-2 mt-10">
        {SidebarMenuTop.map((item) => (
          <SidebarLinks
            key={item.key}
            item={item}
            isActive={pathname === item.path}
          />
        ))}
      </div>

      {/* Sidebar Menu Bottom */}
      <div className="flex flex-col mt-auto">
        {SidebarMenuBottom.map((item) => (
          <SidebarLinks
            key={item.key}
            item={item}
            isActive={pathname === item.path}
          />
        ))}
      </div>
    </div>
  );
}

// Function Links
function SidebarLinks({ item, isActive }) {
  const navigate = useNavigate();
  const isLogout = item.label === "Logout";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userData");
    navigate("/login");
    window.location.reload();
  };
  return (
    <Link to={isLogout ? "#" : item.path}>
      <button
        onClick={isLogout ? handleLogout : null}
        className={`w-full rounded-xl pl-4 flex gap-3 items-center py-3 text-sm ${
          isActive
            ? "bg-[#F1EBFB] text-[#8D62EC] font-semibold font-poppins"
            : isLogout
            ? "text-red-600 font-medium font-poppins"
            : "text-black font-medium font-poppins"
        }`}
        style={{ fontSize: "14px" }}
      >
        <img src={item.icon} alt="icons" />
        {item.label}
      </button>
    </Link>
  );
}
