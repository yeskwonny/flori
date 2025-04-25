import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import { useState } from "react";

//!todo change db, submit button

function Createjournal() {
  const [formData, setFormData] = useState({
    date: "",
    worry: "",
    root: "",
    prediction: "",
    reality: "",
  });
  return (
    <div className="bg-slate-100 h-screen">
      <div className="bg-customWhite h-full m-auto mt-10 flex flex-col items-center justify-around md:w-1/2 overflow-y-auto">
        <form className="w-[90%]">
          <div className="mb-3 flex flex-row gap-3">
            <label className="block text-lg font-semibold mb-1">
              🌱 When are you planting your seed?
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1">
              🌱 What worry would you like to plant today?
            </label>
            <p className="text-gray-500 text-sm mb-2 px-3">
              What thought is sitting quietly in your mind? Feel free to write
              it down.
            </p>
            <textarea
              className="w-full p-2 border rounded-md"
              value={formData.worry}
              onChange={(e) =>
                setFormData({ ...formData, worry: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1">
              🌱 Where did this worry begin?
            </label>
            <p className="text-gray-500 text-sm mb-2 px-3">
              Reflect on the root of this feeling — fear, doubt, expectations,
              or something else.
            </p>
            <textarea
              className="w-full p-2 border rounded-md"
              value={formData.root}
              onChange={(e) =>
                setFormData({ ...formData, root: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="block text-lg font-semibold mb-1">
              🌱 What do you think will happen??
            </label>
            <p className="text-gray-500 text-sm mb-2 px-3">
              Take a moment to imagine the outcome. Will it really happen, or
              will it pass quietly?
            </p>
            <textarea
              className="w-full p-2 border rounded-md"
              value={formData.prediction}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  prediction: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-1">
              🌱 Did the seed bloom or fade away??
            </label>
            <p className="text-gray-500 text-sm mb-2 px-3">
              After some time, come back and see if the worry blossomed into
              reality or simply faded like passing clouds.
            </p>
            <textarea
              className="w-full p-2 border rounded-md"
              value={formData.reality}
              onChange={(e) =>
                setFormData({ ...formData, reality: e.target.value })
              }
            />
          </div>

          <div className="flex justify-center">
            <CustomButton title="Submit" style="w-[40%]" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Createjournal;
