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

const Login = (props) => {
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  const [loginObject, setLoginObject] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginObject({ ...loginObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // checks if username and password match in database
    API.checkUser(loginObject)
      .then((user) => {
        //console.log(loginObject);
        //console.log(user);

        // checks if user has entered login information
        if (!loginObject.username || !loginObject.password) {
          alert("Please enter a username and password");
        } // checks that login matches database user
        else if (
          user.data.username === loginObject.username &&
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
      <div class="column is-4">
        <form class="box">
          <h3 class="title is-3">Login to Farm to Table</h3>
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="username"
                fullWidth
                id="username"
                required
                name="username"
                value={loginObject.username}
                onChange={handleInputChange}
                variant="filled"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="********"
              fullWidth
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

          <button class="button is-primary" onClick={handleFormSubmit}>
            Sign in
          </button>
        </form>
        </div>
        </div>
      </section>
    </div>


  );
};

export default Login;
