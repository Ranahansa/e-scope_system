// this is the sample code for helpers.js

// // Date formatting helper
// export const formatDate = (date) => {
//     return new Date(date).toLocaleDateString();
// };

// // Number formatting helper
// export const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD'
//     }).format(amount);
// };

// // String truncation helper
// export const truncateText = (text, maxLength = 100) => {
//     if (text.length <= maxLength) return text;
//     return text.slice(0, maxLength) + '...';
// };

// // Array shuffling helper
// export const shuffleArray = (array) => {
//     const shuffled = [...array];
//     for (let i = shuffled.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//     }
//     return shuffled;
// };

// // Local storage helpers
// export const setLocalStorage = (key, value) => {
//     try {
//         localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//         console.error('Error saving to localStorage:', error);
//     }
// };

// export const getLocalStorage = (key) => {
//     try {
//         const item = localStorage.getItem(key);
//         return item ? JSON.parse(item) : null;
//     } catch (error) {
//         console.error('Error reading from localStorage:', error);
//         return null;
//     }
// };

// // URL query parameter helper
// export const getQueryParams = () => {
//     return Object.fromEntries(new URLSearchParams(window.location.search));
// };

// // Debounce function helper
// export const debounce = (func, wait) => {
//     let timeout;
//     return (...args) => {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(this, args), wait);
//     };
// };