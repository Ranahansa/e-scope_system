// this is the sample code for the Table component

// import React from 'react';
// import './Table.css';

// const Table = ({ headers, data, onRowClick }) => {
//   return (
//     <div className="table-container">
//       <table className="custom-table">
//         <thead>
//           <tr>
//             {headers.map((header, index) => (
//               <th key={index}>{header}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIndex) => (
//             <tr
//               key={rowIndex}
//               onClick={() => onRowClick && onRowClick(row)}
//               className="table-row"
//             >
//               {Object.values(row).map((cell, cellIndex) => (
//                 <td key={cellIndex}>{cell}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;