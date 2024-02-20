import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { NavLink, NavigationType, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";
import { setCredential } from "../slices/authSlice";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitRegisterHandler = async (e) => {
    e.preventDefault();

    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex =
      /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-zA-Z0-9]).{6,}$/;
    const mobileRegex = /^(?![0-5])\d{10}$/;
    const nameRegex = /^[^\s]+(\s[^\s]+)*$/;

    // Check if any field is empty
    if (!name || !mobile || !email || !password) {
      toast.error("All fields should be filled");
    } else if (!name.match(nameRegex)) {
      toast.error("Name cannot contain consecutive spaces");
    } else if (!mobile.match(mobileRegex)) {
      toast.error("Enter a valid mobile number");
    } else if (!email.match(emailRegex)) {
      toast.error("Invalid email address");
    } else if (!password.match(passwordRegex)) {
      toast.error(
        "Password must be at least 6 characters and contain at least one special character"
      );
    } else if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      try {
        const res = await register({ name, email, password, mobile }).unwrap();
        dispatch(setCredential({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src="/Group 31.png" alt="logo" />
          Opus Blitz
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
               
                <input
                  onChange={(e)=>setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  value={name} 
                  className='bg-gray-50 border border-gray-30 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
                  placeholder="Name"
                  required=""
                />
                
              </div>
              
              <div>
                
                <input
                  onChange={(e)=>setMobile(e.target.value)}
                  type="text"
                  name="mobile"
                  id="mobile"
                  value={mobile} 
                  className='bg-gray-50 border border-gray-30 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'
                  placeholder="Mobile Number"
                  required=""
                />
              </div>
              <div>
                
                <input
                  onChange={(e)=> setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div>
                
                <input
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Enter your password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                ></input>
              </div>
              <div>
                
                <input
                  onChange={(e)=> setConfirmPassword(e.target.value)}
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  value={confirmPassword}
                  placeholder="Re-enter password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                ></input>
              </div>
              <button
                onClick={submitRegisterHandler}
                type="button"
                className="w-full text-white bg-emerald-500 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account ?{" "}
                <NavLink
                  
                  className="font-medium text-primary-600 hover:underline dark:text-cyan-500"
                  to={"/login"}
                >
                  Login
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
