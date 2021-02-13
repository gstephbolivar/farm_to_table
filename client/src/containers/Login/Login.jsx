import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  TextField,
} from "@material-ui/core";
import API from "../../utils/API";
import jwt from "jsonwebtoken";

const Login = (props) => {
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

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

    API.loginUser(loginObject)
      .then((response) => {
        console.log(response.data);

        jwt.verify(response.data.token, "secretpassword", (err, decoded) => {
          if (err) {
            console.log(err);
          } else {
            props.setUserId(response.data._id);
            props.setToken(response.data.token);
            alert("Successfully Logged in!");
            routeChange("/admin");
          }
        });
    // checks if username and password match in database
    API.checkUser(loginObject)
      .then((user) => {
        console.log(loginObject);
        console.log(user);

        // checks if user has entered login information
        if (!loginObject.email || !loginObject.password) {
          alert("Please enter a username and password");
        } // checks that login matches database user
        else if (
          user.data.email === loginObject.email &&
          user.data.password === loginObject.password
        ) {
          props.setUserId(user.data._id);
          alert("Successfully Logged in!");

          // changes route to the admin products page
          routeChange("/admin");
        }
      })
      .catch((err) => {
        // potentially change this to a modal where user can click to sign up or just re-enter login info
        console.log(err);
        alert("Incorrect password or username entered!");
      });
  };

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
                    type="password"
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
                <a className="title is-6" href="/signup">
                  Sign up here.
                </a>
              </h5>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
