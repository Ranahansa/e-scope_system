// this is the sample code for the CartContext.jsx file

// import { createContext, useState, useContext } from 'react';

// // Create the cart context
// const CartContext = createContext();

// // Create a custom hook to use the cart context
// export const useCart = () => {
//     return useContext(CartContext);
// };

// // Create the cart provider component
// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);

//     // Add item to cart
//     const addToCart = (item) => {
//         setCartItems((prevItems) => {
//             const existingItem = prevItems.find((i) => i.id === item.id);
//             if (existingItem) {
//                 return prevItems.map((i) =>
//                     i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//                 );
//             }
//             return [...prevItems, { ...item, quantity: 1 }];
//         });
//     };

//     // Remove item from cart
//     const removeFromCart = (itemId) => {
//         setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//     };

//     // Update item quantity
//     const updateQuantity = (itemId, newQuantity) => {
//         setCartItems((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === itemId ? { ...item, quantity: newQuantity } : item
//             )
//         );
//     };

//     // Clear cart
//     const clearCart = () => {
//         setCartItems([]);
//     };

//     // Calculate total price
//     const getTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     };

//     const value = {
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         getTotalPrice,
//     };

//     return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };