import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Navbar from "./components/Navbar";
import CreateJournal from "./pages/CreateJournal";
import DashBoard from "./pages/DashBoard";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(authUser);

  // if ((isCheckingAuth, !authUser)) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <span className="loading loading-dots loading-xl"></span>
  //     </div>
  //   );
  // }

  //!todo checking user is authenticated or not!
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
          // element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/journal/new" element={<CreateJournal />} />
        <Route path="/journal/dashboard" element={<DashBoard />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
