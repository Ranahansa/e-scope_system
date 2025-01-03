// this is the sample code for the Input component

// import React from 'react';
// import PropTypes from 'prop-types';
// import './Input.css';

// const Input = ({
//   type = 'text',
//   name,
//   value,
//   onChange,
//   placeholder,
//   label,
//   error,
//   className,
//   disabled = false,
// }) => {
//   return (
//     <div className={`input-container ${className || ''}`}>
//       {label && <label htmlFor={name}>{label}</label>}
//       <input
//         type={type}
//         id={name}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className={`input-field ${error ? 'error' : ''}`}
//         disabled={disabled}
//       />
//       {error && <span className="error-message">{error}</span>}
//     </div>
//   );
// };

// Input.propTypes = {
//   type: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
//   label: PropTypes.string,
//   error: PropTypes.string,
//   className: PropTypes.string,
//   disabled: PropTypes.bool,
// };

// export default Input;