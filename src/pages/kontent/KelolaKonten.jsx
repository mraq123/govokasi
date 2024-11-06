import gunting from "../../assets/scissor.png";
import half from "../../assets/half.png";
import { Link } from "react-router-dom";

export default function KelolaKonten() {
  return (
    <div className="w-full h-auto flex flex-col mt-5">
      <div className="flex items-start">
        <h1 className="mr-auto font-poppins font-bold text-base">
          Kelola Konten
        </h1>
        <h1 className="font-medium text-ht font-poppins  text-ungu">lainnya</h1>
      </div>

      <div className="w-full h-auto flex flex-col gap-4 items-center mt-5">
        {/* Baris teks  */}
        <div className="flex  gap-5 w-[95%]">
          <h1 className="flex-1  font-poppins text-ht ">Lanjutkan</h1>
          <h1 className="flex-1  font-poppins text-ht">Agenda Hari ini</h1>
          <h1 className="flex-1  font-poppins text-ht">Agenda Besok</h1>
        </div>

        {/* Baris Card */}
        <div className="flex w-[95%] gap-5">
          <div className="flex flex-1 flex-col gap-4">
            <Link to={"/detailkelolakonten"}>
              <div className="bg-white border-r-2 border-[#ECECEC] p-4 rounded-lg flex shadow-md relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-[#703BE7] after:rounded-bl-lg after:opacity-50 hover:after:opacity-80">
                <div className="w-3/4 flex flex-col gap-2">
                  <h1 className="text-sm font-poppins text-ht">
                    Alchemist Fragrance
                  </h1>
                  <div className="bg-[#FFD9D2] w-14 items-center flex justify-center rounded-lg ">
                    <h1 className="font-medium font-poppins text-[#FE846F] text-hs">
                      Video
                    </h1>
                  </div>
                </div>
                <div className="  w-[20%] h-full flex justify-center items-center p-2">
                  <div className=" w-full h-full bg-slate-400 flex justify-center items-center rounded-xl">
                    <img src={gunting} alt="gunting" className="p-2" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to={"/detailkelolakonten"}>
              <div className="bg-white border-r-2 border-[#ECECEC] p-4 rounded-lg flex shadow-md relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#703BE7] after:rounded-bl-lg after:opacity-50 hover:after:opacity-80">
                <div className="w-3/4 flex flex-col gap-2">
                  <h1 className="text-sm font-poppins text-ht">
                    Beauty Of Angel - Lip Scrub
                  </h1>
                  <div className="bg-[#FFD9D2] w-14 items-center flex justify-center rounded-lg ">
                    <h1 className="font-medium font-poppins text-[#FE846F] text-hs">
                      Video
                    </h1>
                  </div>
                </div>
                <div className="  w-[20%] h-full flex justify-center items-center p-2">
                  <div className=" w-full h-full bg-slate-400 flex justify-center items-center rounded-xl">
                    <img src={gunting} alt="gunting" className="p-2" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <Link to={"/detailkelolakonten"}>
              <div className="bg-white border-r-2 border-[#ECECEC] p-4 rounded-lg flex shadow-md relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#703BE7] after:rounded-bl-lg after:opacity-50 hover:after:opacity-80">
                <div className="w-3/4 flex flex-col gap-2">
                  <h1 className="text-sm font-poppins text-ht">
                    Alchemist Fragrance
                  </h1>
                  <div className="bg-[#FFD9D2] w-14 items-center flex justify-center rounded-lg ">
                    <h1 className="font-medium font-poppins text-[#FE846F] text-hs">
                      Video
                    </h1>
                  </div>
                </div>
                <div className="  w-[20%] h-full flex justify-center items-center p-2">
                  <div className=" w-full h-full bg-slate-400 flex justify-center items-center rounded-xl">
                    <img src={half} alt="gunting" className="p-2" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to={"/detailkelolakonten"}>
              <div className="bg-white border-r-2 border-[#ECECEC] p-4 rounded-lg flex shadow-md relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-[#703BE7] after:rounded-bl-lg after:opacity-50 hover:after:opacity-80">
                <div className="w-3/4 flex flex-col gap-2">
                  <h1 className="text-sm font-poppins text-ht">
                    Beauty Of Angel - Lip Scrub
                  </h1>
                  <div className="bg-[#BFE8FF] w-14 items-center flex justify-center rounded-lg ">
                    <h1 className="font-medium font-poppins text-[#65B9E7] text-hs">
                      Design
                    </h1>
                  </div>
                </div>
                <div className="  w-[20%] h-full flex justify-center items-center p-2">
                  <div className=" w-full h-full bg-slate-400 flex justify-center items-center rounded-xl">
                    <img src={half} alt="gunting" className="p-2" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <Link to={"/detailkelolakonten"}>
              <div className="bg-white border-r-2 border-[#ECECEC] p-4 rounded-lg flex shadow-md relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-[#703BE7] after:rounded-bl-lg after:opacity-50 hover:after:opacity-80">
                <div className="w-3/4 flex flex-col gap-2">
                  <h1 className="text-sm font-poppins text-ht">
                    Alchemist Fragrance
                  </h1>
                  <div className="bg-[#BFE8FF] w-14 items-center flex justify-center rounded-lg ">
                    <h1 className="font-medium font-poppins text-[#65B9E7] text-hs">
                      Design
                    </h1>
                  </div>
                </div>
                <div className="  w-[20%] h-full flex justify-center items-center p-2">
                  <div className=" w-full h-full bg-slate-400 flex justify-center items-center rounded-xl">
                    <img src={half} alt="gunting" className="p-2" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to={"/detailkelolakonten"}>
              <div className="bg-white border-r-2 border-[#ECECEC] p-4 rounded-lg flex shadow-md relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#703BE7] after:rounded-bl-lg after:opacity-50 hover:after:opacity-80">
                <div className="w-3/4 flex flex-col gap-2">
                  <h1 className="text-sm font-poppins text-ht">
                    Beauty Of Angel - Lip Scrub
                  </h1>
                  <div className="bg-[#BFE8FF] w-14 items-center flex justify-center rounded-lg ">
                    <h1 className="font-medium font-poppins text-[#65B9E7] text-hs">
                      Design
                    </h1>
                  </div>
                </div>
                <div className="  w-[20%] h-full flex justify-center items-center p-2">
                  <div className=" w-full h-full bg-slate-400 flex justify-center items-center rounded-xl">
                    <img src={half} alt="gunting" className="p-2" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
