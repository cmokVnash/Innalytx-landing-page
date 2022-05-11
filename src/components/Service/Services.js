import React, { useEffect, useState } from "react";
import { data } from "../Data";
import "./Services.css";

const Services = () => {
  const [projects] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = projects.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, projects]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <div className="bg-gray-900">
        <div className="">
          <h1 className="text-center text-3xl font-bold tracking-wide text-gray-100">
            Our Projects
          </h1>
          <hr
            style={{ display: "block", margin: "10px auto" }}
            className="w-36"
          />
        </div>
        <div className="section-center">
          {projects.map((item, indexprojects) => {
            const { id, image, name, title } = item;
            let position = "nextSlide";
            if (indexprojects === index) {
              position = "activeSlide";
            }
            if (
              indexprojects === index - 1 ||
              (index === 0 && indexprojects === projects.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <div class="relative  rounded-lg block md:flex items-center bg-gray-100 shadow-xl h-96">
                  <div
                    class="relative w-full md:w-2.5/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                    style={{ minHeight: "19rem" }}
                  >
                    <img
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src={image}
                      alt=""
                    />
                    <div class="absolute inset-0 w-full h-full opacity-75"></div>
                    <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white"></div>
                  </div>
                  <div class="w-full md:w-2.5/5 h-full flex-col-reverse lg:flex-row  bg-gray-100 rounded-lg">
                    <div class="p-12">
                      <h2 className="text-gray-700 font-bold text-xl py-2">
                        Innalytx-Lite
                      </h2>
                      <p class="text-gray-600">
                        <span class="text-gray-900">Missguided</span> is a
                        UK-based fashion retailer that has nearly doubled in
                        size since last year. They integrated Stripe to deliver
                        seamless checkout across mobile and web for customers in
                        100+ countries, all while automatically combating fraud.
                      </p>
                      <a
                        class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 text-center"
                        href=""
                      >
                        <span className="block text-center m-auto underline">
                          Visit Our Website
                        </span>
                      </a>
                    </div>
                    <svg
                      class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                  </div>
                </div>
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <i className="fas fa-arrow-left" />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
