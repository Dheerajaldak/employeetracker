import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShuffleHero = () => {
   const navigate = useNavigate();
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto mt-10">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Real-time insights
        </span>
        <h3 className="text-4xl md:text-6xl font-extrabold">
          Track Your Sales Growth
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Monitor KPIs, analyze performance, and unlock opportunities with our
          powerful sales tracking dashboard.
        </p>
        <button 
         onClick={() => navigate("/map")}
        className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          View Location
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
const squareData = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2019/04/24/14/03/map-4152197_1280.jpg", // dashboard
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2020/02/18/11/02/map-4859139_1280.png", // data graph
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2015/09/05/21/13/analytics-925379_1280.jpg", // analytics
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1657727534685-36b09f84e193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW1wbG95ZWUlMjAlMkMlMjBzYWxlcyUyMHRyYWNrZXJ0fGVufDB8fDB8fHww", // team collaboration
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlJTIwJTJDJTIwc2FsZXMlMjB0cmFja2VydHxlbnwwfHwwfHx8MA%3D%3D", // laptop with stats
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1625217527288-93919c99650a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9jYXRpb24lMjB0cmFja2luZ3xlbnwwfHwwfHx8MA%3D%3D", // charts
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9jYXRpb24lMjB0cmFja2luZ3xlbnwwfHwwfHx8MA%3D%3D", // CRM dashboard
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1610985725707-bb0766bf123b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxvY2F0aW9uJTIwdHJhY2tpbmd8ZW58MHx8MHx8fDA%3D", // strategy planning
  },
  {
    id: 9,
    src: "https://plus.unsplash.com/premium_photo-1681487829842-2aeff98f8b63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9jYXRpb24lMjB0cmFja2luZ3xlbnwwfHwwfHx8MA%3D%3D", // business charts
  },
  {
    id: 10,
    src: "https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg",
  },
  {
    id: 11,
    src: "https://plus.unsplash.com/premium_photo-1681487077388-5a2c641a1e21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdsb2JlfGVufDB8fDB8fHww",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 15,
    src: "https://plus.unsplash.com/premium_photo-1661573729122-6619f62ef0ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
