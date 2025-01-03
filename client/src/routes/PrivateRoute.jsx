// this is the sample code for the PrivateRoute.jsx file

// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//     const location = useLocation();
//     const isAuthenticated = localStorage.getItem('token'); // You can modify this based on your auth logic

//     if (!isAuthenticated) {
//         // Redirect to login page if not authenticated
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }

//     return children;
// };

// export default PrivateRoute;