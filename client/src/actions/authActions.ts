import { Dispatch } from "redux";
import axios from "axios";

export const login = (user: User) => ({
  type: "LOGIN",
  payload: user,
});

export const logoutAction = { type: "LOGOUT" };

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      // Send a POST request to your backend login endpoint
      const response = await axios.post<User>(
        "http://localhost:3000/api/login",
        {
          email,
          password,
        }
      );

      // Assuming your backend returns user data and a token upon successful login
      const user: User = response.data;

      // Dispatch the login action with the user and token
      dispatch(login(user));
    } catch (error) {
      console.error(error);
      // Handle login error (e.g., show an error message)
    }
  };
};
