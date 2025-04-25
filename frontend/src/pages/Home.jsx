import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-100 h-screen">
      <div className="bg-customWhite h-full m-auto mt-3 flex flex-col items-center justify-around md:w-1/2">
        <div className="flex flex-col items-center">
          <img src="../../public/flower/logo3.png" className="w-[200px]" />
          <h1 className="text-center w-[60%] mt-10 text-base font-bold tracking-wide text-slate-600">
            Your thoughts are seeds. Give them time, and they will grow into
            something beautiful.
          </h1>

          <div className="flex flex-col items-center mt-28">
            <button
              className="bg-customYellow font-semibold rounded-md px-10 py-3 transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => navigate("/login")}
            >
              Start
            </button>
            <Link className="hover:underline mt-2" to="/signup">
              Are you new to Flori?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
