// this is the sample code for AuthContext.jsx

// import { createContext, useState, useContext, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // Check if user is logged in on component mount
//     useEffect(() => {
//         // Check localStorage for existing auth token
//         const token = localStorage.getItem('authToken');
//         if (token) {
//             // You can add token verification logic here
//             setUser({ token });
//         }
//         setLoading(false);
//     }, []);

//     // Login function
//     const login = async (credentials) => {
//         try {
//             // Add your login API call here
//             // const response = await api.login(credentials);
//             const mockUser = { id: 1, name: 'User', token: 'mock-token' };
//             setUser(mockUser);
//             localStorage.setItem('authToken', mockUser.token);
//             return true;
//         } catch (error) {
//             console.error('Login error:', error);
//             return false;
//         }
//     };

//     // Logout function
//     const logout = () => {
//         setUser(null);
//         localStorage.removeItem('authToken');
//     };

//     const value = {
//         user,
//         loading,
//         login,
//         logout,
//     };

//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
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

// export default AuthContext;