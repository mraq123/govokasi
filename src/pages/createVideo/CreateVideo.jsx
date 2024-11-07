import axios from "axios";
import { useState } from "react";
import robot from "../../assets/robotai.jpg";
import dancingCat from "../../assets/cat-dancing.gif";
import drawingCat from "../../assets/drawing.gif";

export default function CreateVideo() {
  const [text, setText] = useState("");
  const [generating, setGenerating] = useState(false);
  const [image, setImage] = useState(null);

  const invokeUrl = "http://localhost:1312/generate-our-image-brotha";

  const generateImage = async () => {
    const payload = {
      text_prompts: [
        {
          text: text,
          weight: 1,
        },
        {
          text: "",
          weight: -1,
        },
      ],
      cfg_scale: 5,
      sampler: "K_EULER_ANCESTRAL",
      seed: 0,
      steps: 25,
    };

    try {
      setGenerating(true);
      setImage(null);
      const res = await axios.post(invokeUrl, payload);

      const imageData = res.data.artifacts[0].base64;

      setImage(`data:image/jpeg;base64,${imageData}`);
      setGenerating(false);
    } catch (error) {
      console.log("this is error: ", error);
    }
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const downloadImage = () => {
    if (!image) return;

    const link = document.createElement("a");
    link.href = image;
    link.download = "generated-image.jpg";
    link.click();
  };

  return (
    <div className="w-full h-screen bg-[#703BE7] flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Hello There, start generating now!
        </h3>

        {/* Display Image */}
        <div className="mb-4">
          <img
            className="mx-auto max-w-full h-40 rounded-lg"
            src={generating ? drawingCat : image ? image : robot}
            alt="Generated"
          />
        </div>

        {/* Input and Button Section */}
        <div className="space-y-4">
          <input
            onChange={handleInput}
            placeholder="Describe what you want to generate..."
            className="w-full p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <button
            onClick={generateImage}
            className="w-full py-2 bg-[#8D62EC] text-white rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            {generating ? "Generating..." : "Generate"}
          </button>
          {image && !generating && (
            <button
              onClick={downloadImage}
              className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 mt-4"
            >
              Download Image
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
