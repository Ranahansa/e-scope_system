// this is the original file that was used to fetch data from the server


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useInventory = () => {
//     const [inventory, setInventory] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     // Fetch inventory
//     const fetchInventory = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get('/api/inventory');
//             setInventory(response.data);
//             setError(null);
//         } catch (err) {
//             setError('Failed to fetch inventory');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Add item to inventory
//     const addItem = async (item) => {
//         try {
//             setLoading(true);
//             const response = await axios.post('/api/inventory', item);
//             setInventory([...inventory, response.data]);
//             return true;
//         } catch (err) {
//             setError('Failed to add item');
//             return false;
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Remove item from inventory
//     const removeItem = async (itemId) => {
//         try {
//             setLoading(true);
//             await axios.delete(`/api/inventory/${itemId}`);
//             setInventory(inventory.filter(item => item.id !== itemId));
//             return true;
//         } catch (err) {
//             setError('Failed to remove item');
//             return false;
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Update item in inventory
//     const updateItem = async (itemId, updates) => {
//         try {
//             setLoading(true);
//             const response = await axios.put(`/api/inventory/${itemId}`, updates);
//             setInventory(inventory.map(item => 
//                 item.id === itemId ? response.data : item
//             ));
//             return true;
//         } catch (err) {
//             setError('Failed to update item');
//             return false;
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchInventory();
//     }, []);

//     return {
//         inventory,
//         loading,
//         error,
//         addItem,
//         removeItem,
//         updateItem,
//         refreshInventory: fetchInventory
//     };
// };

// export default useInventory;