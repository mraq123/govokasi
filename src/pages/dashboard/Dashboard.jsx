import camera from "../../assets/mage_video.png";
import textbox from "../../assets/textbox.png";
import usertalk from "../../assets/user_talk.png";
import avatar from "../../assets/avatar.png";
import KelolaKonten from "../kontent/KelolaKonten";
import Proyek from "../proyek/Proyek";

export default function Dashboard() {
  return (
    <div className="w-full h-auto flex flex-col">
      {/* TOP Dashboard */}
      <div className="w-full h-44 flex justify-center items-center bg-custom-gradient2 rounded-xl">
        <h1 className=" text-white font-extrabold font-nunito text-ds">
          Mulai kreasi baru hari ini!
        </h1>
      </div>
      {/*  */}

      {/* CARD Bawah TOP DASHBOARD */}
      <div className="flex justify-between items-center w-full max-w-[80%] h-14 bg-white relative bottom-5 left-1/2 transform -translate-x-1/2 z-10 p-4 rounded-xl shadow-xl">
        {/* Bagian pertama */}
        <div className="flex gap-2 items-center flex-grow pl-10">
          <img src={camera} alt="video" className="h-5 w-5" />
          <h1 className=" font-semibold font-poppins text-hh">URL to Video</h1>
        </div>

        {/* Bagian kedua */}
        <div className="flex gap-2 items-center flex-grow pl-10">
          <img src={textbox} alt="video" className="h-5 w-5" />
          <h1 className=" font-semibold font-poppins text-hh">Text to Video</h1>
        </div>

        {/* Bagian ketiga */}
        <div className="flex gap-2 items-center flex-grow pl-10">
          <img src={usertalk} alt="video" className="h-5 w-5" />
          <h1 className=" font-semibold">Speech to Video</h1>
        </div>

        {/* Bagian keempat */}
        <div className="flex gap-2 items-center flex-grow pl-10">
          <img src={avatar} alt="video" className="h-5 w-5" />
          <h1 className=" font-semibold">Al Avatar</h1>
        </div>
      </div>
      {/*  */}

      {/* Kelola Content */}
      <div className="w-full h-auto">
        <KelolaKonten />
      </div>
      {/*  */}

      {/* Kelola Content */}
      <div className="w-full h-auto  ">
        <Proyek />
      </div>
      {/*  */}
    </div>
  );
}
