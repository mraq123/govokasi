import home from "../assets/homea.png";
import calender from "../assets/calender.png";
import proyek from "../assets/proyek.png";
import pencil from "../assets/pensil.png";
import avatar from "../assets/avatar.png";
import brand from "../assets/brandkit.png";
import logout from "../assets/logout.png";
import settings from "../assets/settings.png";

export const SidebarMenuTop = [
  {
    key: "dashboard",
    label: "Beranda",
    path: "/",
    icon: home,
  },

  {
    key: "konten",
    label: "Kelola Konten",
    path: "/content",
    icon: calender,
  },

  {
    key: "proyek",
    label: "Proyek",
    path: "/proyek",
    icon: proyek,
  },

  {
    key: "tools",
    label: "AI Tools",
    path: "/tools",
    icon: pencil,
  },

  {
    key: "avatar",
    label: "Avatars",
    path: "/avatar",
    icon: avatar,
  },

  {
    key: "brand",
    label: "Brand Kit",
    path: "/brandkit",
    icon: brand,
  },
];

export const SidebarMenuBottom = [
  {
    key: "pengaturan",
    label: "Pengaturan",
    path: "/pengaturan",
    icon: settings,
  },

  {
    key: "logout",
    label: "Logout",
    path: "/logout",
    icon: logout,
  },
];
