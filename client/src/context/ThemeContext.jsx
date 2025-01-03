// this is the sample code for the ThemeContext.jsx file

// import React, { createContext, useState, useContext } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//     const [darkMode, setDarkMode] = useState(false);

//     const toggleTheme = () => {
//         setDarkMode(!darkMode);
//     };

//     const theme = {
//         darkMode,
//         toggleTheme,
//         colors: {
//             background: darkMode ? '#1a1a1a' : '#ffffff',
//             text: darkMode ? '#ffffff' : '#1a1a1a',
//             primary: '#007bff',
//             secondary: '#6c757d'
//         }
//     };

//     return (
//         <ThemeContext.Provider value={theme}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export const useTheme = () => {
//     const context = useContext(ThemeContext);
//     if (!context) {
//         throw new Error('useTheme must be used within a ThemeProvider');
//     }
//     return context;
// };

// export default ThemeProvider;