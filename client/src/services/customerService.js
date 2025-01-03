// this is the sample code for customerService.js

// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/customers'; // Adjust the base URL according to your backend

// class CustomerService {
//     // Get all customers
//     async getAllCustomers() {
//         try {
//             const response = await axios.get(API_URL);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     // Get customer by ID
//     async getCustomerById(id) {
//         try {
//             const response = await axios.get(`${API_URL}/${id}`);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     // Create new customer
//     async createCustomer(customerData) {
//         try {
//             const response = await axios.post(API_URL, customerData);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     // Update customer
//     async updateCustomer(id, customerData) {
//         try {
//             const response = await axios.put(`${API_URL}/${id}`, customerData);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     // Delete customer
//     async deleteCustomer(id) {
//         try {
//             const response = await axios.delete(`${API_URL}/${id}`);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }
// }

// export default new CustomerService();