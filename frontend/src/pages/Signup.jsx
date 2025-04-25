import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import toast from "react-hot-toast";
import CustomButton from "../components/Button";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    userName: "",
  });

  const { signup, isSigningUp } = useAuthStore();
  const navigate = useNavigate();
  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!formData.userName.trim()) return toast.error("Username is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm) {
      const success = await signup(formData);
      console.log(success);
      if (success) {
        navigate("/login");
      }
    }
  };
  return (
    <div className="bg-slate-100 h-screen">
      <div className="bg-customWhite h-screen m-auto mt-3 flex flex-col items-center  justify-center md:w-1/2">
        <div className="">
          <img
            src="../../public/flower/logo3.png"
            className="w-[200px] mx-auto"
          />

          <p className="w-[80%] text-center mx-auto text-slate-500">
            Your thoughts are seeds. Give them time, and they will grow into
            something beautiful.
          </p>
        </div>

        <form
          className="w-full flex flex-col px-3 mt-3"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full input input-bordered  h-10"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full input input-bordered  h-10"
              value={formData.userName}
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full input input-bordered  h-10"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <div className="relative">
              <div className="absolute right-1 flex mt-3 text-gray-500 ">
                <button
                  className="z-50"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <LuEyeClosed size={18} />
                  ) : (
                    <LuEye size={18} />
                  )}
                </button>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>
          <CustomButton title="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
