"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "@/lib/features/userSlice";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { isLoading, error, details } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ username, password }))
  };

  React.useEffect(() => {
    if (details) {
      router.push('/');
    }
  }, [details, router]); 
  
  return (
    <>
      <div className="relative w-full mt-20 lg:mt-0 lg:h-screen py-3 sm:max-w-md sm:mx-auto center">
        <div className="relative w-full px-2.5 lg:px-4 py-5 lg:py-10 mx-8 bg-gray-100 shadow md:mx-0 rounded-xl lg:rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <h4 className="text-xl lg:text-2xl font-bold text-center">
              tabler
            </h4>

            <div className="mt-5">
              <label
                className="block pb-1 text-xs lg:text-sm font-semibold text-gray-600"
                htmlFor="login"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 mt-1 mb-5 text-xs lg:text-sm border rounded-lg"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label
                className="block pb-1 text-xs lg:text-sm font-semibold text-gray-600"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 mt-1 mb-5 text-xs lg:text-sm border rounded-lg"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-2.5 lg:mt-5">
              <button
                className="w-full px-4 py-2 text-sm lg:text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                type="submit"
                disabled={isLoading}
                onClick={handleSubmit}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;
