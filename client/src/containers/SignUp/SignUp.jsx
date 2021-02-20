import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./signUp.css";
import states from "../SignUp/states.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [userObject, setUserObject] = useState({
    name: "",
    // address: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    password: "",
    email: "",
    role: "customer",
  });

  const [errorMessage, setErrorMessage] = useState({});

  // validates input fields
  const validateForm = (value) => {
    let errors = {};
    let isValid = false;

    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regZip = /^[0-9]{5}(?:-[0-9]{4})?$/;

    // email
    if (!value.email) {
      errors.email = "Email is Required";
    } else if (!regEmail.test(value.email)) {
      errors.email = "Invalid Email entered (name@email.com)";
    }

    // Full Name
    if (!value.name.trim()) {
      errors.name = "Full Name Required";
    } else if (!regName.test(value.name)) {
      errors.name = "Invalid Name entered (First Last)";
    }
    // Street
    if (!value.street) {
      errors.street = "Street Address Required";
    }

    // City
    if (!value.city) {
      errors.city = "City Required";
    }

    // state
    if (!value.state || value.state === "Select a State") {
      errors.state = "State Required";
    }

    //zip
    if (!value.zip) {
      errors.zip = "Zip Required";
    } else if (!regZip.test(value.zip)) {
      errors.zip = "Invalid Zip entered";
    }

    // password
    if (!value.password) {
      errors.password = "Password is Required";
    } else if (value.password.length <= 6) {
      errors.password = "Password must be longer than 6 characters";
    }

    // sets the isValid flag to true if there are no errors
    if (Object.keys(errors).length === 0) {
      isValid = true;
    }

    // errors set to state and isValid flag returned
    setErrorMessage(errors);
  
    return isValid;
  };

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserObject({ ...userObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm(userObject);
   

    // if there are no errors, the API call is made to create an account
    if (isValid) {
      API.addUser({
        name: userObject.name,
        // address: userObject.address,
        address: {
          street: userObject.street,
          city: userObject.city,
          state: userObject.state,
          zip: userObject.zip,
        },
        password: userObject.password,
        email: userObject.email,
        role: userObject.role,
      })
        .then(() => {
          setUserObject({
            name: "",
            // address: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            password: "",
            email: "",
            role: "customer",
          });
          toast.success(
            "Successfully created account! Please login to continue.",
            { hideProgressBar: true }
          );

          // redirects page to login after account is created
          history.push("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <section className="section">
        <div className="columns is-centered is-multiline">
          <div className="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen">
            <ToastContainer />
            <form className="box">
              <div className="columns is-grouped is-centered is-mobile">
                <img
                  src="./assets/icons/signUp_1.svg"
                  className="figure-img img-fluid rounded"
                  id="signUp-icon-1"
                  alt="strawberry and bluberries"
                />
                <h3 className="title is-3" id="login-headline">
                  Sign Up
                </h3>
                <img
                  src="./assets/icons/signUp_2.svg"
                  className="figure-img img-fluid rounded"
                  id="signUp-icon-2"
                  alt="tomato and pear icon"
                />
              </div>
              <div className="field is-grouped is-grouped-center">
                {/* Email */}
                <div className="control is-expanded">
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        fullwidth="true"
                        placeholder="oldmacdonald@domain.com"
                        id="email"
                        required
                        label="Email"
                        name="email"
                        value={userObject.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {errorMessage.email && (
                    <p className="errors">{errorMessage.email}</p>
                  )}
                </div>
                {/* Full Name */}
                <div className="control is-expanded">
                  <div className="field">
                    <label className="label">Full Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="name"
                        placeholder="Old Macdougal"
                        fullwidth="true"
                        id="fullName"
                        required
                        label="First and Last Name"
                        name="name"
                        value={userObject.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {errorMessage.name && (
                    <p className="errors">{errorMessage.name}</p>
                  )}
                </div>
              </div>
              {/* Home Address */}
              <div className="field">
                <label className="label">Street</label>
                <div className="control">
                  <input
                    className="input"
                    type="address"
                    placeholder="3203 FM 1960"
                    fullwidth="true"
                    id="street"
                    label="street"
                    name="street"
                    value={userObject.street}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              {errorMessage.street && (
                <p className="errors">{errorMessage.street}</p>
              )}
              <div className="field is-grouped is-grouped-center">
                {/* City */}

                <div className="control is-expanded">
                  <div className="field">
                    <label className="label">City</label>
                    <div className="control">
                      <input
                        className="input"
                        type="address"
                        placeholder="East Humble"
                        fullwidth="true"
                        id="city"
                        label="city"
                        name="city"
                        value={userObject.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {errorMessage.city && (
                    <p className="errors">{errorMessage.city}</p>
                  )}
                </div>

                {/* State */}
                <div className="control is-expanded">
                  <div className="field">
                    <label className="label">State</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select
                          className="input"
                          type="address"
                          placeholder="Texas"
                          fullwidth="true"
                          id="state"
                          label="state"
                          name="state"
                          value={userObject.state}
                          onChange={handleInputChange}
                        >
                          {states.map((option) => (
                            <option key={option.code} value={option.name}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  {errorMessage.state && (
                    <p className="errors">{errorMessage.state}</p>
                  )}
                </div>
                {/* Zip code */}
                <div className="control is-expanded">
                  <div className="field">
                    <label className="label">Zip</label>
                    <div className="control">
                      <input
                        className="input"
                        type="address"
                        placeholder="77338"
                        fullwidth="true"
                        id="zip"
                        label="zip"
                        name="zip"
                        value={userObject.zip}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {errorMessage.zip && (
                    <p className="errors">{errorMessage.zip}</p>
                  )}
                </div>
              </div>
              {/* Password */}
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="********"
                    required
                    id="password"
                    onChange={handleInputChange}
                    name="password"
                    value={userObject.password}
                  />
                </div>
              </div>
              {errorMessage.password && (
                <p className="errors">{errorMessage.password}</p>
              )}
              <div className="field has-text-centered">
                <button
                  className="button"
                  type="submit"
                  id="signUp-btn"
                  onClick={handleFormSubmit}
                >
                  Create account
                </button>
              </div>
              <h5 className="subtitle is-6 has-text-centered">
                Already a member?{" "}
                <Link className="title is-6" to="/login">
                  Login here.
                </Link>
              </h5>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
