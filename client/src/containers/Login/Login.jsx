import { useState } from "react";
import { useHistory } from "react-router-dom";

import API from "../../utils/API";
import jwt from "jsonwebtoken";
import { Link } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const [loginObject, setLoginObject] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginObject({ ...loginObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginObject);
    API.loginUser(loginObject)
      .then((response) => {
        console.log(response.data);

        jwt.verify(
          response.data.token,
          process.env.REACT_APP_JWT_SIGNATURE,
          (err, decoded) => {
            if (err) {
              console.log(err);
            } else {
              props.setUserId(response.data._id);
              props.setToken(response.data.token);
              alert("Successfully Logged in!");
              history.push("/admin");
            }
          }
        );
      })
      .catch((err) => {
        // potentially change this to a modal where user can click to sign up or just re-enter login info
        console.log(err);
        alert("Incorrect password or username entered!");
      });
  };
  // checks if username and password match in database
  // API.checkUser(loginObject)
  //   .then((user) => {
  //     console.log(loginObject);
  //     console.log(user);

  //     // checks if user has entered login information
  //     if (!loginObject.email || !loginObject.password) {
  //       alert("Please enter a username and password");
  //     } // checks that login matches database user
  //     else if (
  //       user.data.email === loginObject.email &&
  //       user.data.password === loginObject.password
  //     ) {
  //       props.setUserId(user.data._id);
  //       alert("Successfully Logged in!");

  //       // changes route to the admin products page
  //       routeChange("/admin");
  //     }
  //   })

  return (
    <div>
      <section className="section">
        <div className="columns is-centered is-multiline">
          <div className="column is-4">
            <form className="box">
              <h3 className="title is-3">Login to Farm to Table</h3>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="email"
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

              <button className="button is-primary" onClick={handleFormSubmit}>
                Sign in
              </button>

              {/* Directs to sign up page */}

              <h5 className="subtitle is-6">
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
