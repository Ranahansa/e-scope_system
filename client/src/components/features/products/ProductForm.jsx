// this is the sample code for the ProductForm component

// import React, { useState } from 'react';
// import './ProductForm.css';

// const ProductForm = ({ onSubmit, initialProduct }) => {
//     const [product, setProduct] = useState(initialProduct || {
//         name: '',
//         price: '',
//         description: '',
//         category: '',
//         stockQuantity: '',
//         imageUrl: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct(prevProduct => ({
//             ...prevProduct,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(product);
//     };

//     return (
//         <form className="product-form" onSubmit={handleSubmit}>
//             <h2>Product Details</h2>
            
//             <div className="form-group">
//                 <label htmlFor="name">Product Name</label>
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={product.name}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="price">Price</label>
//                 <input
//                     type="number"
//                     id="price"
//                     name="price"
//                     value={product.price}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="description">Description</label>
//                 <textarea
//                     id="description"
//                     name="description"
//                     value={product.description}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="category">Category</label>
//                 <select
//                     id="category"
//                     name="category"
//                     value={product.category}
//                     onChange={handleChange}
//                     required
//                 >
//                     <option value="">Select Category</option>
//                     <option value="electronics">Electronics</option>
//                     <option value="clothing">Clothing</option>
//                     <option value="books">Books</option>
//                     <option value="other">Other</option>
//                 </select>
//             </div>

//             <div className="form-group">
//                 <label htmlFor="stockQuantity">Stock Quantity</label>
//                 <input
//                     type="number"
//                     id="stockQuantity"
//                     name="stockQuantity"
//                     value={product.stockQuantity}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="imageUrl">Image URL</label>
//                 <input
//                     type="url"
//                     id="imageUrl"
//                     name="imageUrl"
//                     value={product.imageUrl}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>

//             <button type="submit" className="submit-button">
//                 Save Product
//             </button>
//         </form>
//     );
// };

// export default ProductForm;