import React, { useState } from "react";
import { useRegister } from "../../hooks/Signup";

const SignUp = () => {
    
  const [signupFormData, setSignupFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    phoneNumber: "",
    password: "",
    typeOfUser: "",
  });
  const {register} = useRegister()

//   const register = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:8000/api/v1/users/register",
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           method: "POST",
//           body: JSON.stringify({
//             // email, name, password ,typeOfUser , phoneNumber , address
//             email: signupFormData.email,
//             name: signupFormData.fullname,
//             password: signupFormData.password,
//             address: signupFormData.address,
//             phoneNumber: signupFormData.phoneNumber,
//             typeOfUser: signupFormData.typeOfUser,
//           }),
//         }
//       );
//       const responseData = await response.json();
//       if (response.ok) {
//         console.log(responseData);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData({
      ...signupFormData,
      [name]: value,
    });
     console.log(signupFormData)
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await register(signupFormData);
  };

  return (
    <>
      <div className="container flex justify-center items-center bg-purple-200 h-screen w-screen">
        <div className="wrapper wrapper h-[100%] w-[100%] lg:h-[80%] lg:w-[30%] bg-purple-200   rounded-lg px-4 py-4 gap-4">
          <form
            onSubmit={handleOnSubmit}
            className="form w-[50%] h-[70%]  lg:h-[100%] border-2 border-rose-600 lg:w-[100%] bg-purple-400 rounded-md  px-4 py-4 grid grid-cols-1 items-center"
          >
            <h1 className="text-center text-2xl">Sign-Up</h1>
            <div className=" flex flex-col">
              <label for="fullname">Full name</label>
              <input
                name="fullname"
                onChange={handleOnChange}
                type="text"
                placeholder="Full name"
                required
                id="btn"
                className="rounded-md px-4 py-1"
              />
            </div>
            <div className=" flex flex-col">
              <label for="emial">Your email</label>
              <input
                name="email"
                onChange={handleOnChange}
                type="text"
                placeholder="Enter your email"
                required
                id="btn"
                className="rounded-md px-4 py-1"
              />
            </div>
            <div className=" flex flex-col">
              <label for="password">Password</label>
              <input
                name="password"
                onChange={handleOnChange}
                type="text"
                placeholder="Enter your Password"
                required
                id="btn"
                className="rounded-md px-4 py-1"
              />
            </div>
            <div className=" flex flex-col">
              <label for="address">Your Add</label>
              <input
                name="address"
                onChange={handleOnChange}
                type="text"
                placeholder="Enter your full Add"
                required
                id="btn"
                className="rounded-md px-4 py-1"
              />
            </div>
            <div className=" flex flex-col">
              <label for="phoneNumber">Your Phone number</label>
              <input
                name="phoneNumber"
                onChange={handleOnChange}
                type="number"
                placeholder="Enter your Phone number"
                required
                id="btn"
                className="rounded-md px-4 py-1"
              />
            </div>
            <div className="btn-group flex flex-col lg:flex-row justify-between px-5">
              <label for="Buyer">Buyer</label>
              <input
                onChange={handleOnChange}
                type="radio"
                value="Buyer"
                name="typeOfUser"
              />
              <label for="Seller">Seller</label>
              <input
                onChange={handleOnChange}
                type="radio"
                value="Seller"
                name="typeOfUser"
              />
              <label for="Admin">Admin</label>
              <input
                onChange={handleOnChange}
                type="radio"
                value="Admin"
                name="typeOfUser"
              />
            </div>
            <div className="btn-group flex flex-col lg:flex-row justify-between px-5">
              <button
                type="submit"
                className="rounded-full bg-white px-4 py-2 items-center mt-2"
              />
              <input
                name=""
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

export default SignUp;
