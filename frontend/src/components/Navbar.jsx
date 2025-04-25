import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="px-4 h-20 flex items-center">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:my-auto w-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              Flori
            </Link>
          </div>
          {/* checking authuser later -only auth user can see */}
          <div className="flex w-full justify-around sm:w-[30%]">
            <Link to={"/journal/new"}>
              <span className="">Create Journal</span>
            </Link>
            <Link to={"/journal/dashboard"}>
              <span className="">DashBoard</span>
            </Link>
            <button className="flex gap-2 items-center" onClick={logout}>
              <span className="">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
