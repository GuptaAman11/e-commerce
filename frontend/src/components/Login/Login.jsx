import React, { useState } from "react";
import { useLogin } from "../../hooks/Signup";
const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const {userLogin} = useLogin()
//   const userLogin = async () => {
//     try {
//         console.log(loginDetails)
//       const response = await fetch("http://localhost:8000/api/v1/users/login", {
//         headers: {
//           "Content-Type": "application/JSON",
//         },
//         method: "POST",
//         body: JSON.stringify({
//           email: loginDetails.email,
//           password: loginDetails.password,
//         }),
//       });
//       const responseData = await response.json();
//       if (response.ok) {
//         console.log(responseData);
//       }
//       localStorage.setItem('token')

//     } catch (error) {
//         console.log(error)
//     }
//   };

  const onSubmithandle = async (e) => {
    e.preventDefault();
    await userLogin(loginDetails);
  };
  const handleOnChange = async (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    });
    console.log(loginDetails)
  };

  return (
    <>
      <div className="flex justify-center items-center bg-purple-200 h-screen w-screen">
        <div className="wrapper h-[100%] w-[100%] lg:h-[70%] lg:w-[30%] bg-purple-200   rounded-lg px-4 py-4 gap-4">
          <form
            action="#"
            onSubmit={onSubmithandle}
            className="form w-[50%] h-[70%]  lg:h-[100%] border-2 border-rose-600 lg:w-[100%] bg-purple-400 rounded-md  px-4 py-4 grid grid-cols-1 items-center"
          >
            <h1 className="text-center text-2xl">login</h1>
            
            <div className=" flex flex-col">
              <label for="email">Your email</label>
              <input
                onChange={handleOnChange}
                type="text"
                name="email"
                placeholder="Enter your email"
                required
                id="btn"
                className="rounded-md px-4 py-1"
              />
            </div>
            <div className=" flex flex-col">
              <label for="password">Password</label>
              <input
                onChange={handleOnChange}
                type="text"
                name="password"
                placeholder="Enter your Password"
                required
                id="btn"
                className="rounded-md px-4 py-1"
              />
            </div>
            {/* <!-- <div className="">
                            <label for="address">Your Add</label>
                            <input onChange={handleOnChange} type="text" placeholder="Enter your full Add" required id="btn"/>
                            </div> --> */}
            <div className="btn-group flex flex-col lg:flex-row justify-between px-5">
              <button
                type="submit"
                id="btn"
                className="rounded-full bg-white px-4 py-2 items-center mt-2"
              > Submitt </button>
              <input
                onChange={handleOnChange}
                type="reset"
                value="Cancel"
                id="btn"
                className="rounded-full bg-white px-4 py-2 items-center mt-2"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
