// this is the sample code for the ProductList.jsx file

// import React, { useState, useEffect } from 'react';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     Button,
// } from '@mui/material';

// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         // Simulated API call to fetch products
//         const fetchProducts = async () => {
//             try {
//                 // Replace with actual API endpoint
//                 const response = await fetch('/api/products');
//                 const data = await response.json();
//                 setProducts(data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };

//         fetchProducts();
//     }, []);

//     const handleEdit = (productId) => {
//         // Handle edit functionality
//         console.log('Edit product:', productId);
//     };

//     const handleDelete = (productId) => {
//         // Handle delete functionality
//         console.log('Delete product:', productId);
//     };

//     return (
//         <div>
//             <h2>Products List</h2>
//             <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Product Name</TableCell>
//                             <TableCell>Price</TableCell>
//                             <TableCell>Stock</TableCell>
//                             <TableCell>Category</TableCell>
//                             <TableCell>Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {products.map((product) => (
//                             <TableRow key={product.id}>
//                                 <TableCell>{product.name}</TableCell>
//                                 <TableCell>${product.price}</TableCell>
//                                 <TableCell>{product.stock}</TableCell>
//                                 <TableCell>{product.category}</TableCell>
//                                 <TableCell>
//                                     <Button
//                                         variant="contained"
//                                         color="primary"
//                                         onClick={() => handleEdit(product.id)}
//                                         sx={{ mr: 1 }}
//                                     >
//                                         Edit
//                                     </Button>
//                                     <Button
//                                         variant="contained"
//                                         color="error"
//                                         onClick={() => handleDelete(product.id)}
//                                     >
//                                         Delete
//                                     </Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// };

// export default ProductList;