import { useState } from "react";
import { useHistory } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../utils/API";
import jwt from "jsonwebtoken";
import { Link } from "react-router-dom";
import "./login.css";

const Login = (props) => {
  const history = useHistory();

  const [loginObject, setLoginObject] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({});

  // validates input fields
  const validateForm = (value) => {
    let errors = {};
    let isValid = false;

    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // email
    if (!value.email) {
      errors.email = "Email is Required";
    } else if (!regEmail.test(value.email)) {
      errors.email = "Invalid Email entered (name@email.com)";
    }

    // password
    if (!value.password) {
      errors.password = "Password is Required";
    }

    // sets the isValid flag to true if there are no errors
    if (Object.keys(errors).length === 0) {
      isValid = true;
    }

    // errors set to state and isValid flag returned
    setErrorMessage(errors);
    
    return isValid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginObject({ ...loginObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  

    const isValid = validateForm(loginObject);

    if (isValid) {
      API.loginUser(loginObject)
        .then((response) => {
          

          jwt.verify(
            response.data.token,
            process.env.REACT_APP_JWT_SIGNATURE,
            (err, decoded) => {
              if (err) {
                console.log(err);
              } else {
                props.setUserId(response.data._id);
                // sets token to state
                props.setToken(response.data.token);

                // set the token to localStorage
                localStorage.setItem("token", response.data.token);

                // set role to state
                props.setRole(response.data.role);

                //set role to local storage
                localStorage.setItem("role", response.data.role);
                toast.success("Login successful. Happy Shopping!");
                
                // if user is an admin, redirect user to admin page otherwise redirect to all products page
                response.data.role === "admin"
                  ? history.push("/admin")
                  : history.push("/allproducts");
              }
            }
          );
        })
        .catch((err) => {
          // potentially change this to a modal where user can click to sign up or just re-enter login info
          console.log(err);
          toast.dark("Username or password is incorrect. Please try again.");
          
        });
    }
  };

  return (
    <div>

      <section className="section">
        <div className="columns is-centered is-multiline">
          <div className="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen">
            <form className="box">
              <div className="columns is-grouped is-centered is-mobile">
                <img
                  src="./assets/icons/login_2.svg"
                  className="figure-img img-fluid rounded"
                  id="login-icon-2"
                  alt="carrot cabbage icon"
                />
                <h3 className="title is-3" id="login-headline">
                  Log in
                </h3>
                <img
                  src="./assets/icons/login_1.svg"
                  className="figure-img img-fluid rounded"
                  id="login-icon-1"
                  alt="apple avocado icon"
                />
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="oldmacdonald@domain.com"
                    fullwidth="true"
                    id="email"
                    required
                    name="email"
                    value={loginObject.email}
                    onChange={handleInputChange}
                    variant="filled"
                  />
                </div>
              </div>
              {errorMessage.email && (
                <p className="errors">{errorMessage.email}</p>
              )}

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="********"
                    fullwidth="true"
                    required
                    id="password"
                    label="Password"
                    variant="filled"
                    onChange={handleInputChange}
                    name="password"
                    value={loginObject.password}
                  />
                </div>
              </div>
              {errorMessage.password && (
                <p className="errors">{errorMessage.password}</p>
              )}
              <div className="field has-text-centered">
                <button
                  className="button"
                  id="login-btn"
                  onClick={handleFormSubmit}
                >
                  Login
                </button>
              </div>
              {/* Directs to sign up page */}

              <h5 className="subtitle is-6 has-text-centered">
                Not a member?{" "}
                <Link className="title is-6" to="/signup">
                  Sign up here.
                </Link>
              </h5>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
