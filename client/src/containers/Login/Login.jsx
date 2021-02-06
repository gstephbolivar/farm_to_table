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
  InputAdornment,
} from "@material-ui/core";
import API from "../../utils/API";

const Login = () => {
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  const getUserAccount = () => {};

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
        console.log(loginObject);
        console.log(user);

        if (!loginObject.username || !loginObject.password) {
          alert("Username or password did not match");
        } else if (
          user.data.username === loginObject.username &&
          user.data.password === loginObject.password
        ) {
          routeChange("/allproducts");
        } else {
          routeChange("/signup");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={6} md={3} lg={3} xl={3}>
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="h4">Login to Farm to Table</Typography>
              </Grid>
              <Grid item xs={12} xl={12}>
                {/* Username */}
                <TextField
                  fullWidth
                  id="username"
                  required
                  label="Username"
                  name="username"
                  value={loginObject.username}
                  onChange={handleInputChange}
                  // helperText="Please select your currency"
                  variant="filled"
                ></TextField>
              </Grid>
              {/* Email */}
              {/* <Grid item>
                        <TextField
                        fullWidth
                        id="email"
                        required
                        label="Email"
                        name="email"
                        value={userObject.email}
                        onChange={handleInputChange}
                        // helperText="Please select your currency"
                        variant="filled"
                        type="email"
                        ></TextField>
                        </Grid>      */}
              {/* Password */}
              <Grid item xs={12} xl={12}>
                <TextField
                  fullWidth
                  required
                  id="password"
                  label="Password"
                  variant="filled"
                  // autoComplete="current-password"
                  type="password"
                  onChange={handleInputChange}
                  name="password"
                  value={loginObject.password}
                ></TextField>
              </Grid>
            </Grid>
          </CardContent>
          <CardActionArea>
            <Button onClick={handleFormSubmit}>Login</Button>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
