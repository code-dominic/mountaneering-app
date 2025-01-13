import React, { useState } from "react";
import { Mountain, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Events", to: "events" },
    { name: "Timeline", to: "timeline" },
    { name: "Sponsors", to: "sponsors" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-[#1e3a8a] backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Mountain className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">
              Alpine Adventures
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="active"
                  className="relative cursor-pointer text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition-all group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 h-1 w-0 bg-yellow-300 transition-all duration-500 ease-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            className="fixed inset-y-0 right-0 w-64 bg-[#1e3a8a] shadow-lg z-50"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="active"
                  className="block cursor-pointer text-white hover:text-yellow-300 text-lg font-medium transition-all hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
