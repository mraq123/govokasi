import aiVideo from "../../assets/ai-video.png";
import ss from "../../assets/ss.png";
import sa from "../../assets/link.png";
import guntingya from "../../assets/gunting1.png";
import orangmong from "../../assets/user-talk.png";
import vector from "../../assets/Vector.png";
import { Link } from "react-router-dom";
export default function AiTools() {
  return (
    <div className="w-full h-auto flex flex-col gap-5">
      <div className="font-poppins font-bold text-base ">AI Tools</div>
      <div className="w-full flex flex-col gap-4">
        <Link to="/detailaitools">
          <div className="flex justify-start gap-5">
            <div className="w-1/4 h-40 rounded-xl shadow-xl flex flex-col p-5 gap-1 transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(112,59,231,0.6)]">
              <img src={aiVideo} alt="ssss" className="w-8" />
              <h1 className="font-poppins font-medium">
                Automatic Video Editing
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              </p>
            </div>

            <div className="w-1/4 h-40 rounded-xl shadow-xl flex flex-col p-5 gap-1 transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(112,59,231,0.6)]">
              <img src={ss} alt="ssss" className="w-8" />
              <h1 className="font-poppins font-medium">Background Remover</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              </p>
            </div>
            <div className="w-1/4 h-40 rounded-xl shadow-xl flex flex-col p-5 gap-1 transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(112,59,231,0.6)]">
              <img src={sa} alt="ssss" className="w-8" />
              <h1 className="font-poppins font-medium">URL To Video</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              </p>
            </div>
          </div>
        </Link>

        <Link to="/detailaitools">
          <div className="flex justify-start gap-5 mt-2">
            <div className="w-1/4 h-40 rounded-xl shadow-xl flex flex-col p-5 gap-1 transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(112,59,231,0.6)]">
              <img src={guntingya} alt="ssss" className="w-8" />
              <h1 className="font-poppins font-medium">Smart Corp</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              </p>
            </div>
            <div className="w-1/4 h-40 rounded-xl shadow-xl flex flex-col p-5 gap-1 transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(112,59,231,0.6)]">
              <img src={orangmong} alt="ssss" className="w-8" />
              <h1 className="font-poppins font-medium">Speech To Video</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              </p>
            </div>
            <div className="w-1/4 h-40 rounded-xl shadow-xl flex flex-col p-5 gap-1 transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(112,59,231,0.6)]">
              <img src={vector} alt="ssss" className="w-8" />
              <h1 className="font-poppins font-medium">Text To Video</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
