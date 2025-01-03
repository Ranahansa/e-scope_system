// this is the sample code for the Register.jsx file

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Register.css';

// const Register = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         try {
//             // Add your registration API call here
//             console.log('Registration form submitted:', formData);
            
//             // After successful registration, redirect to login
//             navigate('/login');
//         } catch (error) {
//             console.error('Registration error:', error);
//         }
//     };

//     return (
//         <div className="register-container">
//             <h2>Create Account</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <input
//                         type="text"
//                         name="firstName"
//                         placeholder="First Name"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <input
//                         type="text"
//                         name="lastName"
//                         placeholder="Last Name"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email Address"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//             <p>
//                 Already have an account?{' '}
//                 <span onClick={() => navigate('/login')} className="login-link">
//                     Login here
//                 </span>
//             </p>
//         </div>
//     );
// };

// export default Register;