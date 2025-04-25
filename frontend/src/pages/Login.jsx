import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const { login, isLoggingIn, authUser } = useAuthStore();
  const navigate = useNavigate();
  const validateForm = () => {
    if (!formData.userName.trim()) return toast.error("Username is required");
    if (!formData.password) return toast.error("Password is required");
    return true;
  };
  console.log("auth", authUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm) {
      const success = await login(formData);
      console.log(success);
      if (success) {
        navigate("/intro");
      }
    }
  };
  return (
    <div className="bg-slate-100 h-screen">
      <div className="bg-customWhite h-full m-auto mt-3 flex flex-col items-center  justify-center md:w-1/2">
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
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10"
              value={formData.userName}
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
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
          <CustomButton title={isLoggingIn ? "Loading..." : "Login"} />
        </form>

        <Link
          to="/signup"
          className="text-sm  hover:underline hover:text-blue-600 mt-4 inline-block"
        >
          {"Don't"} have an account?
        </Link>
      </div>
    </div>
  );
}

export default Login;
