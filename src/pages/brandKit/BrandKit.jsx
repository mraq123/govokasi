import { useState } from "react";
import brandkit from "../../assets/brandkit1.png";

export default function BrandKit() {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div className="w-full h-auto flex flex-col justify-start items-center gap-10 mt-10 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={brandkit} alt="" />
        <h1 className="font-nunito font-bold text-ds">
          Welcome to a Brand Kit
        </h1>
        <h1 className="font-poppins regular text-center">
          Maintain brand consistency with your logos, colors, fonts, <br /> and
          templates - all in one place with the Brand Kit.
        </h1>
      </div>
      <div className="mt-2 ">
        <button
          className="bg-[#6636D2] text-white font-poppins font-medium text-hh px-6 py-2 rounded-xl"
          onClick={openModal}
        >
          Create a Brand
        </button>
      </div>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-8 w-1/3 h-auto">
            <div className="flex items-center justify-between">
              <h2 className="font-poppins font-bold text-lg mb-4">
                Create Your Brand
              </h2>

              <button
                className="text-gray-500 font-poppins font-bold text-lg mb-4"
                onClick={closeModal}
              >
                X
              </button>
            </div>

            <hr />

            <form className="flex flex-col p-4 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="brandName"
                  className="font-poppins text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="brandName"
                  placeholder="Enter brand name"
                  className="p-3 rounded-lg border border-gray-300 focus:border-[#6636D2] focus:ring-[#6636D2] outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="brandLogo"
                  className="font-poppins text-gray-700"
                >
                  Logo
                </label>
                <input
                  type="file"
                  id="brandLogo"
                  className="p-3 rounded-lg border border-gray-300 focus:border-[#6636D2] focus:ring-[#6636D2] outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="brandFont"
                  className="font-poppins text-gray-700"
                >
                  Font
                </label>
                <input
                  type="text"
                  id="brandFont"
                  placeholder="Enter font name"
                  className="p-3 rounded-lg border border-gray-300 focus:border-[#6636D2] focus:ring-[#6636D2] outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="brandColor"
                  className="font-poppins text-gray-700"
                >
                  Color
                </label>
                <input
                  type="color"
                  id="brandColor"
                  className="w-full h-10 border border-gray-300 rounded-lg p-1 cursor-pointer"
                />
              </div>
            </form>

            <div className="flex justify-between mt-6">
              <button className="bg-[#6636D2] text-white font-poppins px-4 py-2 rounded-lg">
                Create
              </button>
              <button
                className="bg-white border border-[#6636D2] text-[#6636D2] font-poppins px-4 py-2 rounded-lg hover:bg-[#f3f0fc]"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
