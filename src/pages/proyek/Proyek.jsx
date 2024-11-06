import { Link } from "react-router-dom";
import gunting from "../../assets/scissor.png";
import test1 from "../../assets/test1.jpg";

export default function Proyek() {
  return (
    <div className="w-full h-auto flex flex-col  mt-10">
      <div className="flex items-start">
        <h1 className="mr-auto font-poppins font-bold text-base">Proyek</h1>
        <h1 className="font-medium text-ht font-poppins  text-ungu">lainnya</h1>
      </div>
      <div className="w-full h-auto flex justify-center items-center gap-10 mt-5">
        <Link to={"/detailproyek"}>
          <div className="w-56 h-57 flex flex-col shadow-md rounded-xl transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(112,59,231,0.6)]">
            <img src={test1} alt="sss" className="rounded-xl w-full h-1/2" />
            <div className="flex ">
              <div className="flex flex-col p-3">
                <h1 className="text-sm font-poppins text-ht">
                  Alchemist Fragrann
                </h1>
                <h1 className="regular font-poppins text-hs mt-1">
                  11 menit yang lalu
                </h1>
              </div>
              <div className="items-center flex justify-center text-center pl-2">
                <div className="bg-slate-400 p-2 rounded-xl">
                  <img src={gunting} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to={"/detailproyek"}>
          <div className="w-56 h-57 flex flex-col shadow-md rounded-xl transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(112,59,231,0.6)]">
            <img src={test1} alt="sss" className="rounded-xl w-full h-1/2" />
            <div className="flex ">
              <div className="flex flex-col p-3">
                <h1 className="text-sm font-poppins text-ht">
                  Editor Berkelas Bos
                </h1>
                <h1 className="regular font-poppins text-hs mt-1">
                  21 menit yang lalu
                </h1>
              </div>
              <div className="items-center flex justify-center text-center pl-2">
                <div className="bg-slate-400 p-2 rounded-xl">
                  <img src={gunting} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to={"/detailproyek"}>
          <div className="w-56 h-57 flex flex-col shadow-md rounded-xl transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(112,59,231,0.6)]">
            <img src={test1} alt="sss" className="rounded-xl w-full h-1/2" />
            <div className="flex ">
              <div className="flex flex-col p-3">
                <h1 className="text-sm font-poppins text-ht">
                  Tech Dev Web G3 !!
                </h1>
                <h1 className="regular font-poppins text-hs mt-1">
                  11 menit yang lalu
                </h1>
              </div>
              <div className="items-center flex justify-center text-center pl-2">
                <div className="bg-slate-400 p-2 rounded-xl">
                  <img src={gunting} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to={"/detailproyek"}>
          <div className="w-56 h-57 flex flex-col shadow-md rounded-xl transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(112,59,231,0.6)]">
            <img src={test1} alt="sss" className="rounded-xl w-full h-1/2" />
            <div className="flex ">
              <div className="flex flex-col p-3">
                <h1 className="text-sm font-poppins text-ht">
                  Semangat All !!!!!!!!!
                </h1>
                <h1 className="regular font-poppins text-hs mt-1">
                  55 menit yang lalu
                </h1>
              </div>
              <div className="items-center flex justify-center text-center pl-2">
                <div className="bg-slate-400 p-2 rounded-xl">
                  <img src={gunting} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
