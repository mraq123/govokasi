import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import misc from "../assets/misc.png";
import statehover from "../assets/statehover.png";
import axios from "axios";
import { useEffect, useState } from "react";
import ceklis from "../assets/ceklis.png";
import cancel from "../assets/cancel.png";

export default function Layout() {
  const [isBellClicked, setIsBellClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({});
  const [notif, setNotif] = useState([]);
  const id = localStorage.getItem("userId");
  const handlegetDataById = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/users/${id}`);
      setUser(res.data);
      // console.log("header", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlegetDataById();
  }, []);

  const handleBellClick = () => {
    setIsBellClicked(!isBellClicked);
    setIsModalOpen(!isModalOpen);
  };

  // get data notif user
  const handlegetDataUsersNotif = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users");
      console.log("notif", res.data.users);
      setNotif(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlegetDataUsersNotif();
  }, []);
  return (
    <div className="flex flex-row w-screen h-auto overflow-hidden">
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
            <button onClick={handleBellClick}>
              <img src={isBellClicked ? statehover : misc} alt="bell" />
            </button>
            {user.firstName && (
              <h1 className="text-sm font-poppins text-[ht]">
                {user.firstName}
              </h1>
            )}

            {user.image && (
              <img src={user.image} alt="foto" className="rounded-full w-8" />
            )}
          </div>
        </div>

        <div className="p-5 mt-2">
          <Outlet />
        </div>
      </div>

      {/* Modal Notifikasi */}
      {isBellClicked && (
        <div className="absolute right-28 mt-12 w-1/3 h-auto z-10 bg-gradient-to-r from-white via-gray-100 to-white rounded-lg shadow-2xl transition-all transform scale-95 animate-modalFade flex flex-col">
          <div className="p-5 justify-between items-center flex">
            <h2 className="text-lg font-bold text-gray-800 font-poppins ">
              Notifications
            </h2>
            <div className=" justify-center items-center gap-5 flex">
              <img src={ceklis} alt="CEKLIS" />
              <button onClick={handleBellClick}>
                <img src={cancel} alt="cancel" />
              </button>
            </div>
          </div>
          <hr className=" border border-gray-300" />
          {/* Animated "All Inbox" Section */}
          <div className="p-5 justify-start items-center flex gap-2 relative">
            <h1 className="text-gray-600 font-poppins font-semibold text-hh relative">
              All Inbox
              <span className="absolute h-1 -right-4 -bottom-6 w-20  bg-[#703BE7] rounded-md animate-borderSlide"></span>
            </h1>
            <span className="bg-[#E94057] flex justify-center items-center text-[#FFFFFF] rounded-md">
              <p className="text-white font-poppins px-1">3</p>
            </span>
          </div>

          <hr className=" border border-gray-300" />

          <div className="flex flex-col p-5 gap-2">
            {notif.slice(10, 13).map((value, index) => {
              return (
                <>
                  <div
                    className="flex gap-2 justify-start items-center"
                    key={index}
                  >
                    <img
                      src={value.image}
                      alt="notif user"
                      className="w-12 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-poppins font-semibold text-hh">
                        {value.firstName}
                      </h1>
                      <div className="flex gap-1 justify-center items-center">
                        <h1 className="font-poppins  text-hh">Created new </h1>
                        <h1 className="font-poppins font-semibold text-hh">
                          URL to Video
                        </h1>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
