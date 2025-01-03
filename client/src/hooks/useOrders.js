// this is sample code for useOrders.js


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useOrders = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const fetchOrders = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get('/api/orders');
//             setOrders(response.data);
//             setError(null);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const createOrder = async (orderData) => {
//         try {
//             setLoading(true);
//             const response = await axios.post('/api/orders', orderData);
//             setOrders([...orders, response.data]);
//             setError(null);
//             return response.data;
//         } catch (err) {
//             setError(err.message);
//             return null;
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     return {
//         orders,
//         loading,
//         error,
//         fetchOrders,
//         createOrder
//     };
// };

// export default useOrders;