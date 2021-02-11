import { useState } from "react";
import API from "../../utils/API";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  TextField,
} from "@material-ui/core";

const SignUp = () => {
  const [userObject, setUserObject] = useState({
    username: "",
    name: "",
    address: "",
    password: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserObject({ ...userObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.addUser({
      username: userObject.username,
      name: userObject.name,
      address: userObject.address,
      password: userObject.password,
      email: userObject.email,
    })
      .then(() => {
        setUserObject({
          username: "",
          name: "",
          address: "",
          password: "",
          email: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={6} md={3} lg={1} xl={1}>
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item>
                <Typography variant="h4">Sign up for Farm To Table</Typography>
              </Grid>
              <Grid item>
                {/* Username */}
                <TextField
                  fullWidth
                  id="username"
                  required
                  label="Username"
                  name="username"
                  value={userObject.username}
                  onChange={handleInputChange}
                  // helperText="Please select your currency"
                  variant="filled"
                ></TextField>
              </Grid>
              {/* Full Name */}
              <Grid item>
                <TextField
                  fullWidth
                  id="fullName"
                  required
                  label="First and Last Name"
                  name="name"
                  value={userObject.name}
                  onChange={handleInputChange}
                  // helperText="Please select your currency"
                  variant="filled"
                ></TextField>
              </Grid>
              {/* Email */}
              <Grid item>
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
              </Grid>
              {/* Home address */}
              <Grid item>
                <TextField
                  fullWidth
                  id="homeAddress"
                  label="Home Address"
                  name="address"
                  value={userObject.address}
                  onChange={handleInputChange}
                  // helperText="Please select your currency"
                  variant="filled"
                ></TextField>
              </Grid>
              {/* Password */}
              <Grid item>
                <TextField
                  required
                  id="password"
                  label="Password"
                  variant="filled"
                  // autoComplete="current-password"
                  type="password"
                  onChange={handleInputChange}
                  name="password"
                  value={userObject.password}
                ></TextField>
              </Grid>
            </Grid>
          </CardContent>
          <CardActionArea>
            <Button onClick={handleFormSubmit}>Create Account</Button>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignUp;
