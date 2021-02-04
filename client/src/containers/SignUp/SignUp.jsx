import {useState} from 'react';
import API from "../../../utils/API";
import {Grid, Card, CardMedia, CardContent, Typography, CardActionArea, Button, TextField, InputAdornment, MenuItem} from '@material-ui/core';

const SignUp = () => {
    const [unitType, setUnitType] = useState("pounds");
    const [category, setCategory] = useState("fruit");
    const [totalAmount, setTotalAmount] = useState(0);
    const [userObject, setUserObject] = useState({
       name: "",
       unitSize: 0,
       price: 0,
       quantity: 0,
       category: "", 
       unitType: "",
       description: "",
    })

    const handleUnitChange = (event) => {
        setUnitType(event.target.value);
      };

      const handleCategoryChange = (event) => {
        setCategory(event.target.value);
      };

      const handleTotalAmountChange = (event) => {
        setTotalAmount(event.target.value);
      };

      const handleInputChange = (event) => {
          const {name, value} = event.target;
          setProductObject({...productObject, [name]: value });
          
      };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        API.addProduct({
            name: productObject.name,
            unitSize: productObject.unitSize,
            price: productObject.price,
            quantity: totalAmount/productObject.unitSize,
            category: category, 
            unitType: unitType,
            description: productObject.description,
        }).then(() => {
          setTotalAmount(0)
          setProductObject({
            name: "",
            unitSize: 0,
            price: 0,
            quantity: 0,
            category: "", 
            unitType: "",
            description: "", 
        })}).catch(err => console.log(err));
    };



    return (
    <Grid container 
    alignItems="center"
    justify="center">
        <Grid item xs={6} md={3} lg={1} xl={1}>
            <Card>
                <CardMedia
                component="img"
                height="auto"
                image="https://previews.123rf.com/images/krisdog/krisdog1512/krisdog151200015/49394957-cartoon-gardener-character-in-a-blue-overalls-holding-a-garden-for-hand-tool-and-giving-a-thumbs-up-.jpg"
                title="Stock Image"
                />
                <CardContent>
                    <Grid container spacing={1}>
                    <Grid item>
                      {/* What kind of product it is */}
                        <TextField
                        id="selectCategory"
                        select
                        label="Select Type"
                        name="category"
                        value={category}
                        onChange={handleCategoryChange}
                        // helperText="Please select your currency"
                        variant="outlined"
                        >
                        {productType.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                        </Grid>
                        {/* the name of the product */}
                        <Grid item>
                        <TextField
                        required
                        id="productName"
                        label="Product Name"
                        variant="outlined"
                        onChange={handleInputChange}
                        name="name"
                        value={productObject.name}
                        />
                        </Grid>
                        {/* description of the product */}
                        <Grid item>
                        <TextField
                        id="productDescription"
                        label="Product Description"
                        multiline
                        rows={2}
                        variant="outlined"
                        onChange={handleInputChange}
                        name="description"
                        value={productObject.description}
                        />
                        </Grid>
                        {/* The unit type the product will be sold by */}
                        <Grid item>
                        <TextField
                        id="unitType"
                        select
                        name="unitType"
                        label="Select Unit Type"
                        value={unitType}
                        onChange={handleUnitChange}
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
                        {/* The total amount of the product */}
                        <Grid item>
                        <TextField
                        required
                        id="totalAmount"
                        label="Total amount of pounds/ounces/etc..."
                        variant="outlined"
                        onChange={handleTotalAmountChange}
                        name="totalAmount"
                        value={totalAmount}
                        />
                        </Grid>
                        {/* The size of which each unit will be sold (Example: you buy strawberries by the pound in most places, but costco sells them in 3 pound boxes. So a "unit" is either 1 pound or 3 pounds respectively.) */}
                        <Grid item>
                        <TextField
                        required
                        id="unitSize"
                        label="Unit Size to Sell"
                        variant="outlined"
                        onChange={handleInputChange}
                        name="unitSize"
                        value={productObject.unitSize}
                        />
                        </Grid>
                        {/* the price at which each unit is sold per unit */}
                        <Grid item>
                        <TextField
                        required
                        id="productPrice"
                        label="Price Per Unit"
                        variant="outlined"
                        onChange={handleInputChange}
                        name="price"
                        value={productObject.price}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                          }}
                        />
                        </Grid>
                        {/* This is the total number of "units" that are available to be sold. It is calculated for you as you enter the total amount of each product and the unit size to sell by. */}
                        <Grid item>
                        <TextField
                        disabled
                        required
                        id="quantity"
                        label="Quantity"
                        variant="outlined"
                        onChange={handleInputChange}
                        name="quantity"
                        value={totalAmount/productObject.unitSize}
                        helperText="Total number of units"
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


export default SignUp;