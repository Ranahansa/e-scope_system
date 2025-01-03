// this is the sample code for the ProductDetail.jsx file

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//     Box,
//     Typography,
//     Card,
//     CardMedia,
//     CardContent,
//     Grid,
//     Chip,
//     Divider,
// } from '@mui/material';

// const ProductDetail = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         // Simulated API call - replace with your actual API endpoint
//         const fetchProductDetail = async () => {
//             try {
//                 // Replace with actual API call
//                 const response = await fetch(`/api/products/${id}`);
//                 const data = await response.json();
//                 setProduct(data);
//             } catch (error) {
//                 console.error('Error fetching product details:', error);
//             }
//         };

//         fetchProductDetail();
//     }, [id]);

//     if (!product) {
//         return <Box>Loading...</Box>;
//     }

//     return (
//         <Box sx={{ p: 3 }}>
//             <Grid container spacing={3}>
//                 <Grid item xs={12} md={6}>
//                     <Card>
//                         <CardMedia
//                             component="img"
//                             height="400"
//                             image={product.image || 'placeholder-image.jpg'}
//                             alt={product.name}
//                         />
//                     </Card>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <Card sx={{ p: 3 }}>
//                         <Typography variant="h4" gutterBottom>
//                             {product.name}
//                         </Typography>
//                         <Chip
//                             label={`In Stock: ${product.stockQuantity}`}
//                             color={product.stockQuantity > 0 ? 'success' : 'error'}
//                             sx={{ mb: 2 }}
//                         />
//                         <Typography variant="h5" color="primary" gutterBottom>
//                             ${product.price}
//                         </Typography>
//                         <Divider sx={{ my: 2 }} />
//                         <Typography variant="body1" paragraph>
//                             {product.description}
//                         </Typography>
//                         <Box sx={{ mt: 2 }}>
//                             <Typography variant="subtitle1">Product Details:</Typography>
//                             <Typography variant="body2">SKU: {product.sku}</Typography>
//                             <Typography variant="body2">Category: {product.category}</Typography>
//                             <Typography variant="body2">Brand: {product.brand}</Typography>
//                         </Box>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default ProductDetail;