import logo from "../assets/Netflix_Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleButton } from "../utils/toggleSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const dispatch = useDispatch();
  const gptSearch = useSelector((store) => store?.toggle.toggle);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);
  function handleSignOut() {
    alert("want to SignOut");
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  const handleGPTClicked = () => {
    dispatch(toggleButton());
  };
  const handleLanguageChanged = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute py-2 px-4 bg-gradient-to-b from-black w-full z-30 flex flex-col md:flex-row  ">
      <img className="w-32 mx-auto md:mx-0 " src={logo} alt="logo" />
      {user && (
        <div className="flex w-full justify-between md:my-0 -my-8 ">
          <ul className="flex px-6 gap-4 my-6 text-[12px]  text-white">
            <li>
              <button
                className="md:mb-2 md:mt-0 mt-2 md:w-20 w-20 "
                onClick={handleGPTClicked}
              >
                {gptSearch ? "Home" : "Search GPT"}
              </button>
            </li>
          </ul>

          <div className="flex  md:my-5 my-7 px-4  w-[160px] md:w-[250px] justify-between ">
            <h3 className="text-white  md:my-2  ">
              {user?.displayName.split(" ")[0]}
            </h3>
            {gptSearch ? (
              <select
                className=" bg-black text-white  bg-opacity-20"
                onChange={handleLanguageChanged}
              >
                {SUPPORTED_LANGUAGES?.map((lang) => (
                  <option
                    className=""
                    key={lang.identifier}
                    value={lang.identifier}
                  >
                    {lang.language}
                  </option>
                ))}
              </select>
            ) : (
              <div className="hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="18"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                  />
                </svg>
              </div>
            )}

            <div className="text-white text-sm  ">
              <svg
                onClick={handleSignOut}
                xmlns="http://www.w3.org/200/svg"
                height="20"
                width="20"
                viewBox="0 0 576 512"
                className="mx-3"
              >
                <path
                  fill="#ffffff"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c.2 35.5-28.5 64.3-64 64.3l-320.4 0c-35.3 0-64-28.7-64-64l0-160.4-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0z"
                />
              </svg>
              (logout)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
