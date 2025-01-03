// this is sample code for the slider bar


// import React, { useState } from 'react';
// import './SliderBar.css';

// const SliderBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//       <button className="toggle-btn" onClick={toggleSidebar}>
//         {isOpen ? '×' : '☰'}
//       </button>
      
//       <div className="sidebar-content">
//         <nav>
//           <ul>
//             <li>
//               <a href="/dashboard">Dashboard</a>
//             </li>
//             <li>
//               <a href="/products">Products</a>
//             </li>
//             <li>
//               <a href="/orders">Orders</a>
//             </li>
//             <li>
//               <a href="/customers">Customers</a>
//             </li>
//             <li>
//               <a href="/settings">Settings</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default SliderBar;