import { Formik } from "formik";
import FooterOfSite from "./footer";
import HeaderOfSite from "./header";
import classes from "../../css/checkout.module.css";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Checkout() {
  let data = useSelector((state) => state.cart.success);
  let toSubmit = false;
  function handler(event) {
    event.preventDefault();
    if (data) window.location.href = "../success";
  }
  return (
    <div>
      <HeaderOfSite page="cart" />
      <Formik
        initialValues={{
          email: "",
          password: "",
          phone: "+000-00-000-0000",
          name: "",
          surname: "",
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Required"),
          password: Yup.string("Enter your password")
            .min(8, "Password should be of minimum 8 characters length")
            .required("Password is required"),
          phone: Yup.string()
            .required("Phone is required")
            .test("regex", "+000-00-000-0000", (val) => {
              let regExp = new RegExp(
                "[+][0-9][0-9][0-9][-][0-9][0-9][-][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9]"
              );
              return regExp.test(val);
            }),
          name: Yup.string("Enter your name").min(
            3,
            "Name should be of minimum 3 characters length"
          ),
          surname: Yup.string("Enter your surname").min(
            3,
            "Surname should be of minimum 3 characters length"
          ),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          if (dirty && Object.keys(errors).length === 0) {
            data = true;
          } else data = false;

          // window.location.href = "../success";
          return (
            <form onSubmit={handleSubmit}>
              <div className={classes.group}>
                <label htmlFor="email" className={classes.labels}>
                  Email
                </label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? classes.text_input_error
                      : classes.text_input
                  }
                />
                {errors.email && touched.email && (
                  <div className={classes.input_feedback}>{errors.email}</div>
                )}
              </div>
              <div className={classes.group}>
                <label htmlFor="password" className={classes.labels}>
                  Password
                </label>
                <input
                  id="password"
                  placeholder="Enter your password"
                  type="text"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? classes.text_input_error
                      : classes.text_input
                  }
                />
                {errors.password && touched.password && (
                  <div className={classes.input_feedback}>
                    {errors.password}
                  </div>
                )}
              </div>
              <div className={classes.group}>
                <label htmlFor="phone" className={classes.labels}>
                  Phone
                </label>
                <input
                  id="phone"
                  placeholder="Enter your phone"
                  type="text"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.phone && touched.phone
                      ? classes.text_input_error
                      : classes.text_input
                  }
                />
                {errors.phone && touched.phone && (
                  <div className={classes.input_feedback}>{errors.phone}</div>
                )}
              </div>
              <div className={classes.group}>
                <label htmlFor="name" className={classes.labels}>
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? classes.text_input_error
                      : classes.text_input
                  }
                />
                {errors.name && touched.name && (
                  <div className={classes.input_feedback}>{errors.name}</div>
                )}
              </div>
              <div className={classes.group}>
                <label htmlFor="surname" className={classes.labels}>
                  Surname
                </label>
                <input
                  id="surname"
                  placeholder="Enter your surname"
                  type="text"
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.surname && touched.surname
                      ? classes.text_input_error
                      : classes.text_input
                  }
                />
                {errors.surname && touched.surname && (
                  <div className={classes.input_feedback}>{errors.surname}</div>
                )}
              </div>
            </form>
          );
        }}
      </Formik>
      <div className={classes.buttons_container}>
        <Link to="/catalog">
          <button type="submit" className={classes.goBack}>
            go Back
          </button>
        </Link>
        <button type="button" className={classes.finish} onClick={handler}>
          Finish
        </button>
      </div>
      <FooterOfSite />
    </div>
  );
}
export default Checkout;
