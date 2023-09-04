import { Outlet } from "react-router-dom";
import Login from "../../pages/Login/Login";

const Protected = () => {
  const isAuth = JSON.parse(localStorage.getItem("token") !== null);

  return isAuth ? <Outlet /> : <Login />;
};

export default Protected;
