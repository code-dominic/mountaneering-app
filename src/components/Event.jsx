import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const events = [
  {
    title: "Winter Summit Challenge",
    date: "December 2024",
    location: "Mount Baker, USA",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    description: "A challenging winter ascent perfect for experienced climbers.",
  },
  {
    title: "Beginner's Alpine Course",
    date: "July 2024",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606",
    description: "Learn fundamental mountaineering skills in the heart of Europe.",
  },
  {
    title: "High Altitude Expedition",
    date: "September 2024",
    location: "Nepal Himalayas",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    description: "Experience the majesty of the world's highest peaks.",
  },
];

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="events"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Upcoming Events
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join our next mountaineering adventures
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-all duration-300">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="text-sm text-gray-600 mb-4 space-y-1">
                    <p className="font-medium">{event.date}</p>
                    <p>{event.location}</p>
                  </div>
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium 
                    hover:bg-blue-600 transform hover:-translate-y-1 transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
