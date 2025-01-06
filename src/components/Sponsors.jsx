import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sponsors = [
  {
    name: "Mountain Gear Co.",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=300&fit=crop",
  },
  {
    name: "Alpine Equipment",
    logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=300&h=300&fit=crop",
  },
  {
    name: "Summit Outfitters",
    logo: "https://images.unsplash.com/photo-1563986768817-257bf91c5753?w=300&h=300&fit=crop",
  },
  {
    name: "Peak Performance",
    logo: "https://images.unsplash.com/photo-1563986768935-18d812fd8c71?w=300&h=300&fit=crop",
  }
];

const Sponsors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Sponsors</h2>
          <p className="mt-4 text-lg text-gray-600">Trusted by industry leaders</p>
        </div>
        <Slider {...settings}>
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4"
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-20 w-auto mx-auto"
                />
                <h3 className="text-center mt-4 text-gray-800">{sponsor.name}</h3>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sponsors;
