import React from 'react';
import {Grid, Card, CardMedia, CardContent} from '@material-ui/core';

const AddProduct = () => {

    const submit = () => {
        alert("You have added a product.")
    }

    return (
    <Grid container>
        <Grid item>
            <Card>
                <CardMedia
                component="img
                height="auto
                image="http://www.fillmurray.com/200/200"
                title="Stock Image"/>
                <CardContent>
                    <Typography variant="h5"> Product Name Goes here </Typography>
                    <Typography variant="body2"> Description goes here </Typography>
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