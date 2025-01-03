// this is the sample code for Modal page

// import React from 'react';
// import PropTypes from 'prop-types';
// import './Modal.css';

// const Modal = ({ isOpen, onClose, children, title }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h2>{title}</h2>
//           <button className="modal-close" onClick={onClose}>
//             ×
//           </button>
//         </div>
//         <div className="modal-body">{children}</div>
//       </div>
//     </div>
//   );
// };

// Modal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
// };

// export default Modal;