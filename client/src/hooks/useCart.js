// this is sample code for useCart.js

// import { useState, useEffect } from 'react';

// const useCart = () => {
//     const [cart, setCart] = useState([]);
//     const [total, setTotal] = useState(0);

//     useEffect(() => {
//         // Calculate total whenever cart changes
//         const calculateTotal = () => {
//             const sum = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
//             setTotal(sum);
//         };

//         calculateTotal();
//     }, [cart]);

//     const addToCart = (item) => {
//         setCart(prevCart => {
//             const existingItem = prevCart.find(i => i.id === item.id);
//             if (existingItem) {
//                 return prevCart.map(i =>
//                     i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//                 );
//             }
//             return [...prevCart, { ...item, quantity: 1 }];
//         });
//     };

//     const removeFromCart = (itemId) => {
//         setCart(prevCart => prevCart.filter(item => item.id !== itemId));
//     };

//     const updateQuantity = (itemId, quantity) => {
//         setCart(prevCart =>
//             prevCart.map(item =>
//                 item.id === itemId ? { ...item, quantity: quantity } : item
//             )
//         );
//     };

//     const clearCart = () => {
//         setCart([]);
//     };

//     return {
//         cart,
//         total,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//     };
// };

// export default useCart;