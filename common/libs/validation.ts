
interface FormData {
    first_name: any;
    email: any;
    password: any;
    confirm_password: any;
    mobile: any; 
    post_code:any;
    country:any;
    address:any;
    last_name:any;
    town:any;
  }
  
  interface FormErrors {
    first_name?: any;
    last_name?:any;
    email?: any;
    password?: any;
    confirm_password?: any;
    mobile?: any; 
    post_code?:any;
    country?:any;
    address?:any;
    town?:any;
    loginEmail?: any; 
  loginPassword?: any;
  [key: string]: string;
  }
  
  export const validateRegistrationForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};
  console.log(formData)
    if (formData.first_name.trim() === "") {
      errors.first_name = "First Name is required";
    }
    if (formData.last_name.trim() === "") {
      errors.last_name = "Last Name is required";
    }
    if (formData.post_code.trim() === "") {
      errors.post_code = "PostCode is required";
    }
    if (formData.country.trim() === "") {
      errors.country = "Country Name is required";
    }
    if (formData.town.trim() === "") {
      errors.town = "Town Name is required";
    }
    if (formData.address.trim()=== ""){
      errors.address = "Address Name is required";
    }
    if (formData.email.trim()==""){
      errors.email = "Email Name is required";
    }
    if (formData.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) { 
      errors.email = "Invalid email format";
    }
    if (formData.password.trim() === "") {
      errors.password = "Password is required";
    }
    if (formData.password !== formData.confirm_password) {
      errors.confirm_password = "Passwords do not match";
    }
    if (formData.mobile.trim() === "") {
      errors.mobile = "Mobile number is required";
    } else if (!isValidMobile(formData.mobile)) { 
      errors.mobile = "Invalid mobile number format";
    }
  
    return errors;
  };
  
  // Helper function to validate email format
  function isValidEmail(email: any): boolean {
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  
  function isValidMobile(mobile: any): boolean {
    
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobile);
  }

// Login validation

export const validateLoginForm = (login: { loginEmail: any; loginPassword: any }): FormErrors => {
  const errors: FormErrors = {};

  if (login.loginEmail.trim() === "") {
    errors.loginEmail = "Login Email is required";
  } else if (!isValidEmail(login.loginEmail)) {
    errors.loginEmail = "Invalid email format";
  }

  if (login.loginPassword.trim() === "") {
    errors.loginPassword = "Login Password is required";
  }

  return errors;
};



