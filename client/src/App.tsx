import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Loading from "./pages/Loading/Loading";
import Error from "./pages/Error/Error";
import Protected from "./components/Protected/Protected";
import Account from "./pages/Account/Account";
import Logout from "./pages/Logout/Logout";
const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 1000);
  }, [location.pathname, navigate]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />

          <Route element={<Protected />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signout" element={<Logout />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
