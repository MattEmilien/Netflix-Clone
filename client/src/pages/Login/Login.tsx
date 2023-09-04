import "./Login.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { axiosClient } from "../../client";
("");
import { setUser } from "../../slices/userSlice";

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
      stiffness: 250,
      damping: 17,
    },
  },
};

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const onAnimationComplete = () => {
    setIsVisible(false);
  };

  const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return useCallback(
      async (form: Record<string, any>) => {
        try {
          const response = await axiosClient.post("/api/login", form);
          if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", JSON.stringify(response.data.email));
            dispatch(setUser(response.data));
            navigate("/home");
          }
        } catch (error) {
          setInvalidCredentials(true);
        }
      },
      [navigate, dispatch]
    );
  };

  const login = useLogin();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!email || !password) {
        alert("Please enter your email and password");
        return;
      }

      const lowercaseEmail = email.toLowerCase();
      const trimmedPassword = password.trim();
      login({ email: lowercaseEmail, password: trimmedPassword });
    },
    [login, email, password]
  );

  return (
    <motion.div
      className="overflow-hidden"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <h1 className="my-[40px] mx-[40px] text-red-600 text-5xl font-bold cursor-pointer">
        NETFLIX
      </h1>

      <div className=" min-h-screen flex items-center justify-center bg-black text-white lg:w-screen lg:h-screen scrollbar scrollbar-thumb-red-600 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div className="rounded w-[400px] h-[600px] bg-black flex flex-col gap-3">
          <form
            className="login-form flex flex-col bg-black"
            onSubmit={handleSubmit}
          >
            <h1 className="bg-black font-Default text-[32px] m-auto mt-5">
              Log In
            </h1>
            <div className="input-containers flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email or Phone Number"
                required
                value={email}
                onChange={handleEmailChange}
                className="bg-pge w-[100%] h-[45px] mt-3 rounded-lg pl-5"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="bg-pge w-[100%] h-[45px] mt-2 rounded-lg pl-5"
              />
            </div>

            <motion.button
              type="submit"
              className="box block bg-red-600 px-[4px] py-3 rounded cursor-pointer text-white pr-5 w-full mt-5"
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Sign In
            </motion.button>

            <motion.button
              type="button"
              className="box"
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                to="/signup"
                className="block bg-red-600 px-[4px] py-3 rounded cursor-pointer text-white pr-5 w-full mt-3"
              >
                Sign Up
              </Link>
            </motion.button>
            <div className="options flex flex-col items-center mt-3">
              <label className="">
                <input type="checkbox" name="remember-me" className="" />{" "}
                Remember me
              </label>
            </div>
          </form>
          {invalidCredentials && (
            <motion.div
              className={`invalid-credentials-message bg-red-700 p-4 rounded-md text-white text-center ${
                isVisible ? "visible" : "hidden"
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 2 }}
              onAnimationComplete={onAnimationComplete} // Call this function when animation completes
            >
              <h1 className="text-lg">
                A user with these credentials was not found in our database!
              </h1>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
