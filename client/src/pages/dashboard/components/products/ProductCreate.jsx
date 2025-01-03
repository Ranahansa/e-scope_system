// this is the sample code for the ProductCreate.jsx file

// import React, { useState } from 'react';
// import {
//     Box,
//     Button,
//     Card,
//     TextField,
//     Typography,
//     Container,
//     Grid,
// } from '@mui/material';

// const ProductCreate = () => {
//     const [productData, setProductData] = useState({
//         name: '',
//         description: '',
//         price: '',
//         category: '',
//         stock: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProductData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add your API call here to create product
//         console.log('Product data submitted:', productData);
//     };

//     return (
//         <Container maxWidth="lg">
//             <Box sx={{ mt: 4, mb: 4 }}>
//                 <Typography variant="h4" component="h1" gutterBottom>
//                     Create New Product
//                 </Typography>
//                 <Card sx={{ p: 3 }}>
//                     <form onSubmit={handleSubmit}>
//                         <Grid container spacing={3}>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="Product Name"
//                                     name="name"
//                                     value={productData.name}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     multiline
//                                     rows={4}
//                                     label="Description"
//                                     name="description"
//                                     value={productData.description}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </Grid>
//                             <Grid item xs={12} md={6}>
//                                 <TextField
//                                     fullWidth
//                                     type="number"
//                                     label="Price"
//                                     name="price"
//                                     value={productData.price}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </Grid>
//                             <Grid item xs={12} md={6}>
//                                 <TextField
//                                     fullWidth
//                                     label="Category"
//                                     name="category"
//                                     value={productData.category}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </Grid>
//                             <Grid item xs={12} md={6}>
//                                 <TextField
//                                     fullWidth
//                                     type="number"
//                                     label="Stock"
//                                     name="stock"
//                                     value={productData.stock}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <Button
//                                     type="submit"
//                                     variant="contained"
//                                     color="primary"
//                                     size="large"
//                                 >
//                                     Create Product
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </Card>
//             </Box>
//         </Container>
//     );
// };

// export default ProductCreate;