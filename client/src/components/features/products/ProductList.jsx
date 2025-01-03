// this is the sample code for the ProductList component

// import React, { useState, useEffect } from 'react';
// import './ProductList.css';

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     const fetchProducts = async () => {
//         try {
//             // Replace with your actual API endpoint
//             const response = await fetch('your-api-endpoint/products');
//             const data = await response.json();
//             setProducts(data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="product-list-container">
//             <h2>Our Products</h2>
//             <div className="product-grid">
//                 {products.map((product) => (
//                     <div key={product.id} className="product-card">
//                         <img src={product.image} alt={product.name} />
//                         <h3>{product.name}</h3>
//                         <p>{product.description}</p>
//                         <p className="price">${product.price}</p>
//                         <button className="add-to-cart">Add to Cart</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductList;