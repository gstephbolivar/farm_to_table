import React from "react";
import {Grid, Typography} from '@material-ui/core';



const Home = () => {
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={1} md={1} lg={1} xl={6} align="center">
        <Typography variant="h1" align="center">Farm to Table</Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
