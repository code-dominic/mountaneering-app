import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const CustomNextArrow = ({ onClick }) => (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black/50 hover:bg-black rounded-full p-2"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black/50 hover:bg-black rounded-full p-2"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const slides = [
    {
      image: "https://plus.unsplash.com/premium_photo-1676218968741-8179dd7e533f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Conquer Your Summit",
      subtitle: "Experience the thrill of mountaineering with world-class guides",
    },
    {
      image: "https://images.unsplash.com/photo-1600298882525-1ac025c98b68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Explore the Wild",
      subtitle: "Unleash your spirit of adventure and explore untamed beauty",
    },
    {
      image: "https://images.unsplash.com/photo-1599818965433-6911c964993c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Reach New Heights",
      subtitle: "Push your limits and achieve your goals",
    },
  ];

  return (
    <div id="home" className="relative h-screen">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative h-full flex items-center justify-center text-center"
            >
              <div className="max-w-3xl px-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-wide"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-200 mb-8"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <a
                    href="#about"
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-blue-700 transform hover:scale-110 hover:shadow-xl hover:tracking-wider"
                  >
                    Start Your Journey
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
