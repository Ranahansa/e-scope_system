// this is the sample code for orderSlice.js and I used redux toolkit for this code

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     orders: [],
//     loading: false,
//     error: null,
//     currentOrder: null
// };

// const orderSlice = createSlice({
//     name: 'orders',
//     initialState,
//     reducers: {
//         setLoading: (state, action) => {
//             state.loading = action.payload;
//         },
//         setOrders: (state, action) => {
//             state.orders = action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         setError: (state, action) => {
//             state.error = action.payload;
//             state.loading = false;
//         },
//         addOrder: (state, action) => {
//             state.orders.push(action.payload);
//         },
//         updateOrder: (state, action) => {
//             const index = state.orders.findIndex(order => order.id === action.payload.id);
//             if (index !== -1) {
//                 state.orders[index] = action.payload;
//             }
//         },
//         deleteOrder: (state, action) => {
//             state.orders = state.orders.filter(order => order.id !== action.payload);
//         },
//         setCurrentOrder: (state, action) => {
//             state.currentOrder = action.payload;
//         }
//     }
// });

// export const {
//     setLoading,
//     setOrders,
//     setError,
//     addOrder,
//     updateOrder,
//     deleteOrder,
//     setCurrentOrder
// } = orderSlice.actions;

// export default orderSlice.reducer;