// this is the sample code for authService.js

// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/auth/'; // Replace with your API endpoint

// class AuthService {
//     async login(username, password) {
//         try {
//             const response = await axios.post(API_URL + 'login', {
//                 username,
//                 password
//             });
//             if (response.data.token) {
//                 localStorage.setItem('user', JSON.stringify(response.data));
//             }
//             return response.data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     logout() {
//         localStorage.removeItem('user');
//     }

//     register(username, email, password) {
//         return axios.post(API_URL + 'register', {
//             username,
//             email,
//             password
//         });
//     }

//     getCurrentUser() {
//         return JSON.parse(localStorage.getItem('user'));
//     }

//     getToken() {
//         const user = this.getCurrentUser();
//         return user?.token;
//     }

//     isAuthenticated() {
//         const user = this.getCurrentUser();
//         return !!user && !!user.token;
//     }
// }

// export default new AuthService();