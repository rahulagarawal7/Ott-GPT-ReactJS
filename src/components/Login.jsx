import { useRef, useState } from "react";
import { validationForm } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import logo from "../assets/Netflix_Logo.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { BG_IMG } from "../utils/constants";
const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  function handleSubmit() {
    const message = validationForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (isLoginForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth?.currentUser;
              dispatch(addUser({ uid, displayName, email }));
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  }
  function handleChangeForm() {
    setIsLoginForm(!isLoginForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute h-full w-full">
        <img className="object-cover w-full  h-full" src={BG_IMG} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-opacity-85 rounded-lg  text-white p-12 absolute bg-black sm:w-[300px] lg:w-[450px] md:w-[450px] my-48 mx-auto right-0 left-0"
      >
        <h1 className="font-bold text-3xl">
          {isLoginForm ? "RAhul" : "Sign Up"}
        </h1>
        {!isLoginForm && (
          <input
            ref={name}
            placeholder="Full Name"
            type="text"
            className="rounded-md opacity-70 p-2 my-4 w-full  bg-gray-900"
          />
        )}
        <input
          ref={email}
          placeholder="Email Address"
          type="text"
          className="p-2 my-4 w-full opacity-70 bg-gray-900 rounded-md"
        />
        <input
          ref={password}
          placeholder="Password"
          type="password"
          className=" p-2 my-4 w-full opacity-70 bg-gray-900 rounded-md"
        />
        <p className="text-red-800 font-bold ">{errorMessage}</p>
        <button
          className="bg-red-600  p-2 my-4 w-full rounded-lg"
          onClick={handleSubmit}
        >
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-5 cursor-pointer" onClick={handleChangeForm}>
          {isLoginForm
            ? "don't have account?sign Up"
            : "already have account?sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
