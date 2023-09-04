import React, { useState } from "react";
import { motion } from "framer-motion";
import { CgLogOut } from "react-icons/cg";
const removeStoredInfo = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  window.location.reload();
};

const Logout = () => {
  const [confirmLogout, setConfirmLogout] = useState(false);

  const handleLogout = () => {
    setConfirmLogout(true);
    setTimeout(() => {
      removeStoredInfo();
    }, 4500); // Delay for 0.5 seconds (500 milliseconds)
  };

  return (
    <div className="relative text-white flex justify-center gap-4 my-80">
      {confirmLogout ? (
        <motion.div
          className={`bg-red-700 p-4 rounded-md text-white text-center`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-lg">You have been logged out</h1>
        </motion.div>
      ) : (
        <div className="absolute text-center ">
          <p>Are you sure you want to logout?</p>
          <motion.button
            className="box relative bg-red-600 text-white px-4 py-2 rounded cursor-pointer w-[200px] mt-5"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLogout}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <CgLogOut className="absolute right-4 top-1/2 transform -translate-y-1/2" />
            Logout
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Logout;
