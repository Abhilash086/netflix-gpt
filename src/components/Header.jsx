import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, PROFILE_PIC } from "../utils/constants";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error")
      });
  };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({uid, email, displayName}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });

      return ()=> unsubscribe();
    }, []);

  return (
    <div className="px-8 py-6 absolute w-full z-10 bg-gradient-to-b flex items-center justify-between from-black">
      <div className="flex items-center">
        <img
          className="w-[150px] mix-blend-normal contrast-200 opacity-[1]"
          src={LOGO}
          alt="Logo"
        />
        <h1 className="font-bold text-4xl text-white -m-5 -mt-7">-GPT</h1>
      </div>
      {user && <div className="flex gap-3">
        <img
          className="w-10"
          src={PROFILE_PIC}
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
