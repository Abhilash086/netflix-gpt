import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, PROFILE_PIC, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store=> store?.gpt?.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (value)=>{
    dispatch(changeLanguage(value));
  }

  const handleClick = ()=>{
    dispatch(toggleGptSearchView());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="px-4 sm:px-8 py-6 fixed w-full z-30 bg-gradient-to-b flex items-center justify-between from-black">
      <div className="flex items-center gap-2 justify-center">
          <img
            className="w-[100px] sm:w-[150px] mix-blend-normal contrast-200 opacity-[1]"
            src={LOGO}
            alt="Logo"
          />
          <h1 className="font-bold text-xl sm:text-4xl text-white -ml-5 -mt-1 sm:-ml-6 sm:-mt-2">
            -GPT
          </h1>
      </div>
      {user && (
        <div className={`flex py-1 gap-3`}>
          <select className={`bg-[#e0ceced4] ${showGptSearch ? "block" : "hidden"} cursor-pointer border px-1 text-lg`} onChange={(e)=> handleLanguageChange(e.target.value)}>
            {
              SUPPORTED_LANGUAGES.map(item=> <option key={item.identifier} value={item.identifier}>{item.language}</option>)
            }
          </select>
          <button
            onClick={handleClick}
            className="hover:bg-red-700 px-2 text-sm text-white sm:text-lg rounded-sm border cursor-pointer bg-white/15 border-white "
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className="w-6 h-6 sm:h-auto sm:w-10" src={PROFILE_PIC} alt="" />
          <button
            onClick={handleSignOut}
            className="border border-black py-1 px-4 bg-red-500/75 text-[14px] sm:text-lg text-white cursor-pointer"
          >
            {"Sign out"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
