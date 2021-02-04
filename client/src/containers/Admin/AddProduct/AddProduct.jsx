import React from 'react';
import {Grid, Card, CardMedia, CardContent, Typography, CardActionArea, Button, TextField, InputAdornment} from '@material-ui/core';

const AddProduct = () => {

    const submit = () => {
        alert("You have added a product.")
    }

    return (
    <Grid container direction="column"
    alignItems="center"
    justify="center">
        <Grid item xs={6} xl={6}>
            <Card>
                <CardMedia
                component="img"
                height="auto"
                image="http://www.fillmurray.com/200/200"
                title="Stock Image"
                />
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item>
                    {/* <Typography variant="h5"> Product Name Goes here </Typography>
                    <Typography variant="body2"> Description goes here </Typography> */}
                        <TextField
                        required
                        id="outlined-required"
                        label="Product Name"
                        variant="outlined"
                        />
                        </Grid>
                        <Grid item>
                        <TextField
                        id="outlined-multiline-static"
                        label="Product Description"
                        multiline
                        rows={2}
                        variant="outlined"
                        />
                        </Grid>
                        <Grid item>
                        <TextField
                        required
                        id="outlined-required"
                        label="Unit Size"
                        variant="outlined"
                        />
                        </Grid>
                        <Grid item>
                        <TextField
                        required
                        id="outlined-required"
                        label="Price Per Unit"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                          }}
                        />
                        </Grid>
                        </Grid>
                </CardContent>
                <CardActionArea>
                    <Button onClick={submit}>Add Product</Button>
                </CardActionArea>
            </Card>
        </Grid>
    </Grid>
    );
};

export default AddProduct;