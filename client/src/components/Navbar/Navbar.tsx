import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TiUser } from "react-icons/ti";
import { BiSolidDownArrow } from "react-icons/bi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const email = (
    (localStorage.getItem("email") || "").split("@")[0] || ""
  ).replace(/"/g, "");

  useEffect(() => {
    // Add an event listener to track scroll position
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("menu-toggle", handleMenuToggle);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("menu-toggle", handleMenuToggle);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    // Check the scroll position to determine whether to make the Navbar stick
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const navbarClassName = isScrolled
    ? "flex items-center justify-between p-4 z-[100] w-full fixed bg-black/80"
    : "flex items-center justify-between p-4 z-[100] w-full absolute black/5 ";

  return (
    <div className={navbarClassName}>
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <ul className="flex items-center mr-auto ml-10 space-x-10 text-white font-Default">
        <li>
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/" className="">
            TV Shows
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="">
            My List
          </Link>
        </li>
        <li>
          <Link to="/about" className="">
            New & Top Rated
          </Link>
        </li>
      </ul>

      <div className="flex flex-row scale-[2.5] mr-10">
        <motion.div
          onHoverStart={() => setIsMenuOpen(true)}
          onHoverEnd={() => setIsMenuOpen(false)}
        >
          <motion.button
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.7 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <TiUser className="text-white bg-red-600 rounded-lg" />
          </motion.button>

          <motion.button
            className="box"
            whileHover={{ rotate: 180, scale: 1.2 }}
            whileTap={{ scale: 0.7 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <BiSolidDownArrow className="text-white scale-[0.3]" />
          </motion.button>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute top-6 -right-2 w-[70px] bg-pge/60 rounded-sm shadow-lg"
            >
              <ul className="flex flex-col items-center space-y-[5px] p-[10px] text-white font-Default text-[8px]">
                <li>User: {email}</li>
                <li>
                  <Link to="/account" className="">
                    Account
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="">
                    Help
                  </Link>
                </li>
                <li>
                  <Link to="/signout" className="">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
