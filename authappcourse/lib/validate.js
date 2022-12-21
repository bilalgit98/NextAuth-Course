export default function login_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must Be Greater Than 8 and Less Than 20 Characters Long";
  } else if (values.password.includes("")) {
    errors.password = "Invalid Password";
  }
  return errors;
}

export function registerValidate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.includes("")) {
    errors.username = "Invalid Username";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must Be Greater Than 8 and Less Than 20 Characters Long";
  } else if (values.password.includes("")) {
    errors.password = "Invalid Password";
  }

  // confirm passowrd
  if (!values.Cpassword) {
    errors.Cpassword = "Required";
  } else if (values.password !== values.Cpassword) {
    errors.Cpassword = "Passwords Do not match!!";
  } else if (values.Cpassword.includes("")) {
    errors.Cpassword = "Invalid Confirm Password";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}
