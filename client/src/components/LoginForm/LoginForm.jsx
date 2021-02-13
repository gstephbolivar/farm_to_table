// import {useState} from 'react';
// import { useHistory } from 'react-router-dom';
// import {Grid, Card, CardContent, Typography, CardActionArea, Button, TextField, InputAdornment} from '@material-ui/core';

// const LoginForm = () => {

//     const history = useHistory();

//   const routeChange = () =>{ 
//     let path = `/allproducts`; 
//     history.push(path);
//   }

//     const [loginObject, setLoginObject] = useState({
//        username: "",
//        password: "",
//        email: "", 
//     });

//       const handleInputChange = (event) => {
//           const {name, value} = event.target;
//           setLoginObject({...userObject, [name]: value });
//       };

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         // If (user information is correct) {then... 
//         routeChange();
//         //} else { 
//         // alert(Login Information is incorrect);
//         // }
//     };



//     return (
//     <Grid container 
//     alignItems="center"
//     justify="center">
//         <Grid item xs={6} md={3} lg={1} xl={1}>
//             <Card>
//                 <CardContent>
//                     <Grid container spacing={1}>
//                         <Grid item>
//                             <Typography variant="h4">Sign up for Farm To Table</Typography>
//                         </Grid>
//                     <Grid item>
//                       {/* Username */}
//                         <TextField
//                         fullWidth
//                         id="username"
//                         required
//                         label="Username"
//                         name="username"
//                         value={userObject.username}
//                         onChange={handleInputChange}
//                         // helperText="Please select your currency"
//                         variant="filled"
//                         >
//                         </TextField>
//                         </Grid>
//                         {/* Email */}
//                         {/* <Grid item>
//                         <TextField
//                         fullWidth
//                         id="email"
//                         required
//                         label="Email"
//                         name="email"
//                         value={userObject.email}
//                         onChange={handleInputChange}
//                         // helperText="Please select your currency"
//                         variant="filled"
//                         type="email"
//                         ></TextField>
//                         </Grid>      */}
//                         {/* Password */}
//                         <Grid item>
//                         <TextField
//                         fullWidth
//                         required
//                         id="password"
//                         label="Password"
//                         variant="filled"
//                         // autoComplete="current-password"
//                         type="password"
//                         onChange={handleInputChange}
//                         name="password"
//                         value={userObject.password}
//                         ></TextField>
//                         </Grid>                  
//                         </Grid>
//                 </CardContent>
//                 <CardActionArea>
//                     <Button onClick={handleFormSubmit}>Login</Button>
//                 </CardActionArea>
//             </Card>
//         </Grid>
//     </Grid>
//     );
// };


// export default LoginForm;