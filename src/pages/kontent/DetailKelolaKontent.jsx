import { useState } from "react";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
export default function DetailKelolaKontent() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: "Step 1: Overview", image: step1 },
    { id: 2, label: "Step 2: Development", image: step2 },
    { id: 3, label: "Step 3: Completion", image: step3 },
  ];

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full h-screen  p-5">
      <h1 className="font-bold font-poppins mb-4">Detail Kelola Konten</h1>

      {/* Step Content */}
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-xl font-semibold mb-2">
          {steps[currentStep - 1].label}
        </h2>
        <img
          src={steps[currentStep - 1].image}
          alt={steps[currentStep - 1].label}
          className="w-1/2 flex justify-center items-center"
        />
      </div>

      {/* Step-Specific Content */}
      <div className="text-center mt-4">
        {currentStep === 1 && (
          <div className="w-full h-60 bg-slate-200 mb-5">
            <h1>TEST HALAMAN 1</h1>
          </div>
        )}
        {currentStep === 2 && (
          <div className="w-full h-60 bg-slate-200 mb-5">
            <h1>TEST HALAMAN 2</h1>
          </div>
        )}
        {currentStep === 3 && (
          <div className="w-full h-60 bg-slate-200 mb-5">
            <h1>TEST HALAMAN 3</h1>
          </div>
        )}
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevStep}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={currentStep === steps.length}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
