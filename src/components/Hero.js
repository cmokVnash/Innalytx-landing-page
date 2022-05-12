import React from "react";
import Nav from "./Nav";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div
        className="relative flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-cover min-w-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-70">
          <Nav />
        </div>

        <div className="container flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, x: -80, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2 }}
            className="container relative flex flex-1 flex-col font-hairline px-6 md:px-10 pb-1 pr-12 text-2xl font-hairline text-white"
          >
            <h2 className="relative z-20 text-5xl font-extrabold leading-tight text-white">
              Bridging the Gap Between
              <br /> Business and Technology
            </h2>
            <p className="relative z-20 block mt-4 text-xl">
              We've created the ultimate resource for turning your culture into
              a super-powered productivity machine by encouraging collaboration
              growth, and incentives!
            </p>
            <div className="flex mt-4 mb-2 md:mb-0">
              <a
                href="#_"
                className="flex items-center self-start justify-center px-3 py-2.5 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-lg shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-8"
              >
                Get Started
              </a>
              <a
                href="#_"
                className="flex items-center self-start justify-center px-3 py-2.5 mt-5 ml-5 text-base font-medium leading-tight text-indigo-500 transition duration-150 ease-in-out bg-gray-200 border-transparent rounded-lg shadow hover:bg-white focus:outline-none focus:border-gray-100 focus:shadow-outline-gray md:py-4 md:text-lg md:px-8"
              >
                How It Works
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative w-full lg:w-2/5 ml-10 mt-4 overflow-hidden rounded-lg shadow-2xl cursor-pointer group"
          >
            <div className="absolute flex items-center justify-center flex-1 mb-10 lg-mb-0 z-10 w-full h-full bg-black bg-opacity-25"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3290&q=80"
              alt=""
              className="object-cover w-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Deleted */}

      {/* <div
        className="container relative min-h-screen bg-cover "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-70">
          <Nav />
        </div>

        <div className="container flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
          <div className="container flex flex-1 flex-col items-center text-2xl font-hairline text-white">
            <h2 className="relative z-20 text-5xl font-extrabold leading-tight text-white">
              Bridging the Gap Between
              <br /> Business and Technology
            </h2>
            <p className="relative z-20 block mt-4 text-xl">
              We've created the ultimate resource for turning your culture into
              a super-powered productivity machine by encouraging collaboration
              growth, and incentives!
            </p>
            <div className="flex mt-4 z-20">
              <a
                href="#_"
                className="flex items-center self-start justify-center px-3 py-2.5 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-lg shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-8"
              >
                Get Started
              </a>
              <a
                href="#_"
                className="flex items-center self-start justify-center px-3 py-2.5 mt-5 ml-5 text-base font-medium leading-tight text-indigo-500 transition duration-150 ease-in-out bg-gray-200 border-transparent rounded-lg shadow hover:bg-white focus:outline-none focus:border-gray-100 focus:shadow-outline-gray md:py-4 md:text-lg md:px-8"
              >
                How It Works
              </a>
            </div>
          </div>
          <div className="relative w-full md:w-2/5 ml-10 overflow-hidden rounded-lg shadow-2xl cursor-pointer group">
            <div className="absolute flex items-center justify-center flex-1 mb-10 lg-mb-0 z-10 w-full h-full bg-black bg-opacity-25"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3290&q=80"
              alt=""
              className="object-cover w-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
