import React from "react";
import { motion } from "framer-motion";

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Grow faster with our
          <span className="text-slate-400"> all in one solution</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Learn more
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Do a thing</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-0 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            {/* <span className="block text-center font-semibold text-indigo-50">
              FEATURE DEMO HERE
                </span> */}
                <img className="rounded-t-2xl" src="https://cdn.pixabay.com/photo/2019/06/14/23/05/black-forest-4274490_1280.jpg" alt="" />
          
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Do another thing</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-0 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            {/* <span className="block text-center font-semibold text-orange-50">
              FEATURE DEMO HERE
            </span> */}
            <img src="https://cdn.pixabay.com/photo/2020/02/28/21/15/space-4888643_1280.jpg" className="rounded-t-2xl " alt="" />
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>And this too</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-14 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-0 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            {/* <span className="block text-center font-semibold text-emerald-50">
              FEATURE DEMO HERE
            </span> */}
            <img src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg" className="rounded-t-2xl" alt="" />
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>And finally this</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-14 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            {/* <span className="block text-center font-semibold text-red-50">
              FEATURE DEMO HERE
            </span> */}
            <img src="https://cdn.pixabay.com/photo/2024/07/06/04/27/map-8875911_1280.png" alt="" />
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};