import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Account = () => {
  const userData = useSelector((state: RootState) => state.user);
  const email = useSelector((state: RootState) => userData.user?.email);

  return (
    <>
      <div className="flex mt-auto mx-auto">
        <Navbar />
      </div>

      <section className="flex justify-center mx-auto font-Default text-white border p-[100px] mt-40  w-[50%] rounded-lg">
        <h1>Account: {email}</h1>
        <br />
        <div className="absolute mt-4">
          <ul>
            <li>
              <Link to="/account/edit">Edit Account</Link>
            </li>
            <li>
              <Link to="/account/delete">Delete Account</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Account;
