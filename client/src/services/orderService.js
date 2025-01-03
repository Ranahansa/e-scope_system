// this is the sample code for orderService.js

// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// class OrderService {
//     // Create a new order
//     async createOrder(orderData) {
//         try {
//             const response = await axios.post(`${API_URL}/orders`, orderData);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     // Get all orders
//     async getAllOrders() {
//         try {
//             const response = await axios.get(`${API_URL}/orders`);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     // Get order by ID
//     async getOrderById(orderId) {
//         try {
//             const response = await axios.get(`${API_URL}/orders/${orderId}`);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     // Update order status
//     async updateOrderStatus(orderId, status) {
//         try {
//             const response = await axios.patch(`${API_URL}/orders/${orderId}`, { status });
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     // Delete order
//     async deleteOrder(orderId) {
//         try {
//             const response = await axios.delete(`${API_URL}/orders/${orderId}`);
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }
// }

// export default new OrderService();