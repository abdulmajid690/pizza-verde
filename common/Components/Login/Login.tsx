import React, { useState } from "react";
import InputField from "../InputField/InputField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateLoginForm } from "../../libs/validation";

const Login = () => {
  const [login, setLogin] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const handleValidate = (e:any) => {
    const { name, value } = e.target;
    setLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const loginErrors = validateLoginForm(login);

    for (const key in loginErrors) {
      if (loginErrors.hasOwnProperty(key)) {
        const errorMessage = loginErrors[key];
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form onSubmit={handleSubmit}>
        <div className="login-container bg-[#4D4E53] rounded-[7px] py-5 ">
          <div className="title px-5">
            <h3 className="text-white">EXISTING MEMBER</h3>
            <div className="white-underline w-full h-[1px] bg-white my-3"></div>
          </div>

          <div className="login-fields px-10">
            <p className="bg-primary text-white p-2 rounded-[3px] sm:text-base text-[14px]">
              The provided credentials are incorrect.
            </p>
            <p className="text-white font-light my-3">
              If you have an account, please log in below.
            </p>
            <InputField
              label="Email *"
              type="text"
              name="loginEmail"
              style="text-white"
              onChange={handleValidate}
              value={login.loginEmail}
            />
            <InputField
              label="Password *"
              type="password"
              name="loginPassword"
              style="text-white"
              onChange={handleValidate}
              value={login.loginPassword}
            />
          </div>
          <div className="button flex items-center justify-end px-10">
            <p className="text-white text-[14px] mr-3 font-light">
              FORGOT YOUR PASSWORD?
            </p>
            <button
              type="submit"
              className="bg-primary rounded-[3px] text-white px-7 py-2"
            >
              LOG IN
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
