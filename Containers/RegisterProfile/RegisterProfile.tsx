import React, { useState } from "react";
import InputField from "../../common/Components/InputField/InputField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateRegistrationForm } from "../../common/libs/validation";

const RegisterProfile = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    address: "",
    town: "",
    country: "",
    post_code: "",
    email: "",
    password: "",
    confirm_password: "",
    
  });
  const handleValidate = (e:any) => {
    const { name, value } = e.target;
    console.log("lol",name,value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
  
    const errors = validateRegistrationForm(formData);
  // console.log("dell",errors)
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        const errorMessage = errors[key];
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
  
  console.log("formData", formData)
  return (
    <>
      <div>
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
          <div className="register-container px-5">
            <div className="title px-5">
              <h3 className="text-primary font-bold">REGISTER</h3>
              <p>
                Create an account to access member only benefits, move through
                the checkout process faster, view and track your orders and
                more.
              </p>
            </div>
            <div className="black-underline w-full h-[1px] bg-black mt-3"></div>

            <div className="user-details py-5 px-5">
              <InputField
                label="First Name *"
                type="text"
                name="first_name"
                value={formData.first_name}
                style=""
                onChange={handleValidate}
              />

              <InputField
                label="Last Name *"
                type="text"
                name="last_name"
                style=""
                value={formData.last_name}
                onChange={handleValidate}
              />
              <div className="input-container flex justify-between items-center ">
                <label className="flex-1">Mobile *</label>
                <div className="flex-[2_0_1%] w-full flex items-center gap-x-5">
                  <span className="">+44</span>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleValidate}
                    className="rounded-[3px] h-[35px] shadow-[0px_0px_6px_#00000042] w-full px-3"
                  />
                </div>
              </div>
            </div>
            <div className="black-underline w-full h-[1px] bg-black "></div>
            <div className="address-form pt-5 px-5">
              <InputField
                label="Address *"
                type="text"
                name="address"
                style=""
                value={formData.address}
                onChange={handleValidate}
              />
              <InputField label="Town *" type="text" name="town" style=""  value={formData.town} />
              <InputField
                label="Country *"
                type="text"
                name="country"
                style=""
                onChange={handleValidate}
                value={formData.country}
              />
              <InputField
                label="Post Code *"
                type="text"
                name="post_code"
                value={formData.post_code}
                style=""
                onChange={handleValidate}
              />
              <InputField label="Email *" type="email" name="email" style=""  onChange={handleValidate}  value={formData.email}/>
            </div>
            <div className="black-underline w-full h-[1px] bg-black "></div>
            <div className="password-details pt-3 px-5">
              <p className="text-center ">
                Your email will be used as your username.
              </p>
              <div className="mt-3">
                {" "}
                <InputField
                  label="Password *"
                  type="password"
                  name="password"
                  style=""
                  value={formData.password}
                  onChange={handleValidate}
                />
                <InputField
                  label="Confirm Password *"
                  type="password"
                  name="confirm_password"
                  style=""
                  onChange={handleValidate}
                  value={formData.confirm_password}
                />
              </div>

              <div className="button flex justify-between items-center">
                <p className="text-[12px]">* Mandatory fields</p>
                <button
                  type="submit"
                  className="bg-primary px-3 py-2 shadow-[0px_3px_6px_#00000029] text-[14px] rounded-[3px] text-white"
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterProfile;
