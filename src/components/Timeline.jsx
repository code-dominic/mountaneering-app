import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "1995",
    title: "Foundation",
    description: "Established our first mountaineering camp",
  },
  {
    year: "2000",
    title: "International Expansion",
    description: "Started operations in European Alps",
  },
  {
    year: "2010",
    title: "High Altitude Program",
    description: "Launched expeditions to 8000m peaks",
  },
  {
    year: "2015",
    title: "Training Academy",
    description: "Opened our professional training facility",
  },
  {
    year: "2020",
    title: "Digital Evolution",
    description: "Introduced virtual training programs",
  },
  {
    year: "2024",
    title: "Global Recognition",
    description: "Awarded Best Mountaineering School",
  },
];

const Timeline = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            Milestones that shaped our legacy
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-blue-200" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Invisible Spacer for Alignment */}
                <div className="w-1/2" />

                {/* Timeline Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white z-10" />

                {/* Timeline Card */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pl-8" : "pr-8"
                  }`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                    }}
                    className="bg-white p-6 rounded-lg shadow-md transition-all"
                  >
                    <span className="text-blue-600 font-bold">{event.year}</span>
                    <h3 className="text-xl font-semibold mt-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
