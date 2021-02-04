import {useState} from 'react';
import {Grid, Card, CardMedia, CardContent, Typography, CardActionArea, Button, TextField, InputAdornment, MenuItem} from '@material-ui/core';

const units = [
    {
      value: 'pounds',
      label: 'pounds',
    },
    {
      value: 'ounces',
      label: 'ounces',
    },
    {
      value: 'grams',
      label: 'grams',
    },
    {
      value: 'pints',
      label: 'pints',
    },
  ];
  

const AddProduct = () => {

    const [unit, setUnit] = useState("pounds");

    const handleChange = (event) => {
        setUnit(event.target.value);
      };

    const handleFormSubmit = (event) => {
        event.preventDefault();
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
                        id="outlined-select-currency"
                        select
                        label="Select Unit Type"
                        value={unit}
                        onChange={handleChange}
                        // helperText="Please select your currency"
                        variant="outlined"
                        >
                        {units.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
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
                    <Button onClick={handleFormSubmit}>Add Product</Button>
                </CardActionArea>
            </Card>
        </Grid>
    </Grid>
    );
};

export default AddProduct;