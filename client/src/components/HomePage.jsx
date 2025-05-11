import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const globeRef = useRef();
  const [points, setPoints] = useState([]);

  useEffect(() => {
    setPoints([
      { lat: 37.7749, lng: -122.4194, name: "Dheeraj" },
      { lat: 51.5074, lng: -0.1278, name: "London" },
      { lat: 28.6139, lng: 77.209, name: "New Delhi" },
      { lat: -33.8688, lng: 151.2093, name: "Sydney" },
      { lat: 17.385, lng: 78.4867, name: "Hyderabad" },
      { lat: 19.076, lng: 72.8777, name: "Mumbai" },
      { lat: 13.0827, lng: 80.2707, name: "Chennai" },
      { lat: 12.9716, lng: 77.5946, name: "Bangalore" },
    ]);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;
      globeRef.current.camera().position.z = 300;
    }
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Globe Section - Responsive */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen flex items-center justify-center px-4 lg:px-8">
          <div className="">
            <Globe
              ref={globeRef}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              backgroundColor="rgba(0,0,0,0)"
              pointsData={points}
              pointLat="lat"
              pointLng="lng"
              pointAltitude={0.03}
              pointColor={() => "#22c55e"}
              pointLabel={(d) => d.name}
              width={undefined}
              height={undefined}
            />
          </div>
        </div>

        {/* Text Section - Responsive */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="max-w-md text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Sales Tracker
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              Visualize and monitor your sales performance across regions in
              real-time. Track your sales team’s reach and activity using our
              interactive 3D globe.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => navigate("/map")}
                className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 transition duration-300 rounded-md text-white font-semibold text-base shadow-md"
              >
                Live Tracking (Map)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA for Large Screens */}
      <div className="hidden lg:flex w-full h-28 items-center justify-center bg-gray-900 cursor-pointer">
        <button
          onClick={() => navigate("/map")}
          className="px-20 py-3 bg-cyan-500 hover:bg-cyan-600 transition duration-300 rounded-md text-white font-semibold text-lg shadow-lg"
        >
          Live Tracking (Map)
        </button>
      </div>
    </>
  );
};

export default HomePage;
