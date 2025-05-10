import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <div className="px-8 py-6 absolute w-full z-10 bg-gradient-to-b flex items-center justify-between from-black">
      <div className="flex items-center">
        <img
          className="w-[150px] mix-blend-normal contrast-200 opacity-[1]"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
        <h1 className="font-bold text-4xl text-white -m-5 -mt-7">-GPT</h1>
      </div>
      {user && <div className="flex gap-3">
        <img
          className="w-10"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt=""
        />
        <button
          onClick={handleSignOut}
          className="border border-black px-4 bg-red-500/75  text-white cursor-pointer rounded-md"
        >
          {"Sign out"}
        </button>
      </div>}
    </div>
  );
};

export default Header;
