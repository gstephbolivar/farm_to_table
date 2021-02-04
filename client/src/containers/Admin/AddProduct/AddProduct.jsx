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

  const productType = [
    {
      value: 'fruit',
      label: 'fruit',
    },
    {
      value: 'vegetable',
      label: 'vegetable',
    },
    {
      value: 'meat',
      label: 'meat',
    },
    {
      value: 'dairy',
      label: 'dairy',
    },
  ];
  

const AddProduct = () => {

    const [unitType, setUnitType] = useState("");
    const [category, setCategory] = useState("")
    const [productObject, setProductObject] = useState({
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
        console.log(unitType);
      };

      const handleTypeChange = (event) => {
        setCategory(event.target.value);
        console.log(category);

      };

      const handleInputChange = (event) => {
          const {name, value} = event.target;
          setProductObject({...productObject, [name]: value });
          console.log(productObject)
      }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert("You have added a product.")
        // API.addProduct({
        //     name: productObject.name,
        //     unitSize: productObject.unitSize,
        //     price: productObject.price,
        //     quantity: productObject.quantity,
        //     category: category, 
        //     unitType: unitType,
        //     description: productObject.description,
        // }).then(() => setProductObject({
        //     name: "",
        //     unitSize: 0,
        //     price: 0,
        //     quantity: 0,
        //     category: "", 
        //     unitType: "",
        //     description: "", 
        // })).catch(err => console.log(err));

    };



    return (
    <Grid container 
    alignItems="center"
    justify="center">
        <Grid item xs={6} lg={2} xl={2}>
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
                        <TextField
                        id="selectCategory"
                        select
                        label="Select Type"
                        name="category"
                        value={category}
                        onChange={handleTypeChange}
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
                        <Grid item>
                    {/* <Typography variant="h5"> Product Name Goes here </Typography>
                    <Typography variant="body2"> Description goes here </Typography> */}
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
                        <Grid item>
                        <TextField
                        required
                        id="unitSize"
                        label="Unit Size"
                        variant="outlined"
                        onChange={handleInputChange}
                        name="unitSize"
                        value={productObject.unitSize}
                        />
                        </Grid>
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