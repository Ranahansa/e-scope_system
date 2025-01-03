// this is the sample code for productService.js

// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api/products'; // adjust the URL as needed

// class ProductService {
//     // Get all products
//     async getAllProducts() {
//         try {
//             const response = await axios.get(API_BASE_URL);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     // Get a single product by ID
//     async getProductById(id) {
//         try {
//             const response = await axios.get(`${API_BASE_URL}/${id}`);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     // Create a new product
//     async createProduct(productData) {
//         try {
//             const response = await axios.post(API_BASE_URL, productData);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     // Update a product
//     async updateProduct(id, productData) {
//         try {
//             const response = await axios.put(`${API_BASE_URL}/${id}`, productData);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     // Delete a product
//     async deleteProduct(id) {
//         try {
//             const response = await axios.delete(`${API_BASE_URL}/${id}`);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }
// }

// export default new ProductService();