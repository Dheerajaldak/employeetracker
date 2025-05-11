import React, { useEffect, useState } from "react";
import bgimg from "../assets/secure-login-sign-up-concept-illustration-user-use-secure-login-password-protection-website-social-media-account-vector-flat-style_7737-2270.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMyLocation } from "../MapPage/MapSlice";
import { getFakeLocation } from "./FAKE_LOCATIONS";
import { connectWithSocketIOServer } from "../socketConnection/socketConn";
import { proceedWithLogin } from "../store/actions/loginPageAction";
import { connectWithPeerServer } from "../realtimeCommunication/webRTCHandler";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const myLocation = useSelector((state) => state.map.myLocation);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // Show toast notification
    toast.success("Login successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    proceedWithLogin({
      username,
      coords: {
        longitude: myLocation.longitude,
        latitude: myLocation.latitude,
      },
    });
    // navigate("/map");
    navigate("/home");
  };

  const onSuccess = (position) => {
    // console.log(position);
    dispatch(
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    );
  };
  const onError = (error) => {
    console.log("Error occurred while trying to get location");
    console.log(error);
  };
  const locationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      onSuccess,
      onError,
      locationOptions
    );
    // onSuccess(getFakeLocation());
  }, []);
  useEffect(() => {
    if (myLocation) {
      connectWithSocketIOServer();
      connectWithPeerServer();
    }
  }, [myLocation]);

  return (
    <div className="min-h-screen flex ">
      {/* Toast Container */}
      <ToastContainer />

      {/* Left side image */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2021/04/16/12/38/earth-6183491_1280.png")` }}
      ></div>

      {/* Right side form */}
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Welcome! Login..
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-gray-600">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
                placeholder="username"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sky-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
            style={{ backgroundColor: '#155861'}}
              type="submit"
              className="w-full hover:bg-teal-300  text-white py-2 rounded-md "
            >
              Sign In
            </button>
            <p className="text-center text-gray-600 text-sm mt-4">
              Don't have an account?{" "}
              <Link to={"/register"} className="text-sky-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
