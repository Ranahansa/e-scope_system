// this is the sample code for api.js

// import axios from 'axios';

// // Define base URL for API calls
// const API_BASE_URL = 'http://localhost:5000/api'; // Adjust this to your backend URL

// // Create axios instance with default config
// const apiClient = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// // Add request interceptor for authentication
// apiClient.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // API service methods
// export const api = {
//     // Authentication
//     login: (credentials) => apiClient.post('/auth/login', credentials),
//     register: (userData) => apiClient.post('/auth/register', userData),

//     // Users
//     getUser: (id) => apiClient.get(`/users/${id}`),
//     updateUser: (id, data) => apiClient.put(`/users/${id}`, data),

//     // Products or other resources
//     getProducts: () => apiClient.get('/products'),
//     getProductById: (id) => apiClient.get(`/products/${id}`),
//     createProduct: (data) => apiClient.post('/products', data),
//     updateProduct: (id, data) => apiClient.put(`/products/${id}`, data),
//     deleteProduct: (id) => apiClient.delete(`/products/${id}`),
// };

// export default api;