// this is the sample code for formatters.js

// // Date formatters
// export const formatDate = (date) => {
//     if (!date) return '';
//     return new Date(date).toLocaleDateString();
// };

// // Currency formatters
// export const formatCurrency = (amount, currency = 'USD') => {
//     return new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: currency
//     }).format(amount);
// };

// // Number formatters
// export const formatNumber = (number) => {
//     return new Intl.NumberFormat('en-US').format(number);
// };

// // Text formatters
// export const capitalizeFirstLetter = (string) => {
//     if (!string) return '';
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// };

// // Phone number formatter
// export const formatPhoneNumber = (phoneNumber) => {
//     if (!phoneNumber) return '';
//     const cleaned = phoneNumber.replace(/\D/g, '');
//     const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
//     if (match) {
//         return '(' + match[1] + ') ' + match[2] + '-' + match[3];
//     }
//     return phoneNumber;
// };