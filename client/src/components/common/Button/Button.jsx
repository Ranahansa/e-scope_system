// this is the sample code for the Button component


// import React from 'react';
// import PropTypes from 'prop-types';
// import './Button.css';

// const Button = ({ 
//   children, 
//   type = 'button', 
//   variant = 'primary', 
//   size = 'medium',
//   disabled = false,
//   onClick,
//   className = ''
// }) => {
//   const buttonClasses = `button ${variant} ${size} ${className}`;

//   return (
//     <button
//       type={type}
//       className={buttonClasses}
//       disabled={disabled}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   type: PropTypes.oneOf(['button', 'submit', 'reset']),
//   variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   disabled: PropTypes.bool,
//   onClick: PropTypes.func,
//   className: PropTypes.string
// };

// export default Button;