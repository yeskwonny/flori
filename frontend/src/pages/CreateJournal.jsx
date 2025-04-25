import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";

//!todo change db, submit button

function Createjournal() {
  const [formData, setFormData] = useState({
    plantingDate: "",
    worry: "",
    root: "",
    prediction: "",
    reality: "",
  });
  const [step, setStep] = useState(1);
  return (
    <div className="bg-slate-100 h-screen">
      <div className="bg-customWhite h-full m-auto mt-20 flex flex-col items-center justify-around md:w-1/2 overflow-y-auto">
        {step === 1 && (
          <Step1
            formData={formData}
            setFormData={setFormData}
            next={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            setFormData={setFormData}
            back={() => setStep(1)}
          />
        )}
      </div>
    </div>
  );
}

export default Createjournal;
