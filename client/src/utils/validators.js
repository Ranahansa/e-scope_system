// this is the sample code for validators.js

// // Validation utility functions

// // Email validation
// export const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// };

// // Password validation (minimum 8 characters, at least one number and one letter)
// export const isValidPassword = (password) => {
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     return passwordRegex.test(password);
// };

// // Required field validation
// export const isRequired = (value) => {
//     return value !== null && value !== undefined && value.trim() !== '';
// };

// // Phone number validation
// export const isValidPhone = (phone) => {
//     const phoneRegex = /^\+?[\d\s-]{10,}$/;
//     return phoneRegex.test(phone);
// };

// // URL validation
// export const isValidURL = (url) => {
//     try {
//         new URL(url);
//         return true;
//     } catch {
//         return false;
//     }
// };

// // Number range validation
// export const isInRange = (number, min, max) => {
//     return number >= min && number <= max;
// };