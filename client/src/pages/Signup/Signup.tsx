import "./Signup.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  },
};

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle form submission here
  };

  return (
    <motion.div
      className="page-container bg-gradient-radial relative min-h-screen flex justify-center items-center overflow-hidden"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white z-10">
        <div className="content-container">
          <header className="header border border-gray-300 shadow-md p-4 flex justify-between items-center w-full mb-8">
            <h1 className="text-red-600 text-5xl font-bold cursor-pointer mx-4">
              <a href="/">NETFLIX</a>
            </h1>
            <p className="mx-4 font-Default text-[19px] text-gray-500">
              <a href="/login">
                <span className="hover:underline">Login</span>
              </a>
            </p>
          </header>

          <form
            className="min-h-screen flex flex-col items-center justify-center text-white lg:w-screen lg:h-screen"
            onSubmit={handleSubmit}
          >
            <img
              src="https://icon-library.com/images/devices-icon/devices-icon-1.jpg"
              alt="Digital Devices"
              className="w-[200px] h-auto"
            />
            <h2 className="font-Default text-3xl text-center text-gray-700 mt-4">
              Enter an email address and set up a password for your new account
            </h2>
            <p className="font-Default text-[20px] text-center text-gray-700 mt-2">
              Just a few more steps and you're done
            </p>
            <input
              type="email"
              placeholder="Email or Phone Number"
              required
              value={email}
              onChange={handleEmailChange}
              className="bg-pge w-[400px] h-[45px] mt-4 rounded-lg pl-5"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={handlePasswordChange}
              className="bg-pge w-[400px] h-[45px] mt-2 rounded-lg pl-5"
            />

            <motion.button
              className="box relative bg-red-600 text-white px-4 py-9 rounded cursor-pointer w-[400px] mt-4"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link to="/signup">
                <span className="font-Default text-[25px] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                  Next
                </span>
                <MdNavigateNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
              </Link>
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
