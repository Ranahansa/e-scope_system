// this is sample code for useAuth.js



// import { useState, useEffect, createContext, useContext } from 'react';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Check if user is logged in (e.g., check localStorage or token)
//         const token = localStorage.getItem('token');
//         if (token) {
//             // Validate token and set user
//             setUser({ token }); // Replace with actual user data
//         }
//         setLoading(false);
//     }, []);

//     const login = async (credentials) => {
//         try {
//             // Add your login API call here
//             const response = await fetch('/api/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(credentials),
//             });
//             const data = await response.json();
            
//             if (response.ok) {
//                 setUser(data.user);
//                 localStorage.setItem('token', data.token);
//                 return true;
//             }
//             return false;
//         } catch (error) {
//             console.error('Login error:', error);
//             return false;
//         }
//     };

//     const logout = () => {
//         setUser(null);
//         localStorage.removeItem('token');
//     };

//     return (
//         <AuthContext.Provider value={{ user, loading, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };