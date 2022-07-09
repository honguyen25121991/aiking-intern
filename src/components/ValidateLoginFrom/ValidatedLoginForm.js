import React from "react";
import { Formik } from "formik";

import "./ValidateLoginFrom.scss";

const initialValues = {
  email: "",
  password: "",
  username: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexuser =
    /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.username) {
    errors.username = "User is required";
  } else if (!regexuser.test(values.username)) {
    errors.username = "Invalid User";
  } else if (values.username.length < 4) {
    errors.username = "User too short";
  } else if (values.username.length > 10) {
    errors.username = "User too long";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  } else if (values.password.length > 10) {
    errors.password = "Password too long";
  }

  return errors;
};

const submitForm = (values) => {
  console.log(values);
};

const Form = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <div className="Validate__container ">
            <h1 className="text-center">REGISTER</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="email">UserName</label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.username && touched.username ? "input-error" : null
                  }
                />
                {errors.username && touched.username && (
                  <span className="error">{errors.username}</span>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              <div className="form-row">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                {errors.password && touched.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>

              <button
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Register
              </button>
            </form>
            <div className="p__content--bottom">
              <p>
                By registering I confirm I have read and agree to Terms of Use.
                We send occasional marketing messages which can be switched off
                in account settings. We manage personal data as set out in our
                Privacy Notice.
              </p>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Form;
