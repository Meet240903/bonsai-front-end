import React, { useState } from 'react';
import '../assets/css/header.css';
import bonsaiLogo from '../assets/images/bonsai-logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo">
                    <a href='/bonsai-front-end'>
                        <img src={bonsaiLogo} className='img-fluid' style={{ height: '90px', width: '150px' }} alt="Logo" />
                    </a>
                </div>
                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>Product</li>
                        <li>Templates</li>
                        <Link to="/pricing"><li>Pricing</li></Link>
                        <Link to="/review"><li>Reviews</li></Link>
                    </ul>
                </nav>
                <div className="header-buttons">
                    <Link to='/signin' className="btn login">Login</Link>
                    <Link to='/signup' className="btn start-free">Start Free</Link>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
        </header>
    );
};

export default Header;



// import React, { useState } from 'react';
// import '../assets/css/header.css';
// import bonsaiLogo from '../assets/images/bonsai-logo.svg';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <header className="header">
//             <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <div className="logo">
//                     <a href='/'>
//                         <img src={bonsaiLogo} className='img-fluid' style={{ height: '90px', width: '150px' }} alt="Logo" />
//                     </a>
//                 </div>
//                 <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
//                     <ul>
//                         <li 
//                             className="dropdown"
//                             onMouseEnter={() => setIsDropdownOpen(true)}
//                             onMouseLeave={() => setIsDropdownOpen(false)}
//                         >
//                             Product
//                             <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
//                                 <li>
//                                     <a href="/workflow">Bonsai Workflow</a>
//                                     <ul className="dropdown-submenu">
//                                         <li>Look professional, win more clients, and manage your business from one place.</li>
//                                     </ul>
//                                 </li>
//                                 <li><a href="/product2">Product 2</a></li>
//                                 <li><a href="/product3">Product 3</a></li>
//                             </ul>
//                         </li>
//                         <li><a href="/templates">Templates</a></li>
//                         <li><a href="/pricing">Pricing</a></li>
//                         <li><a href="/reviews">Reviews</a></li>
//                     </ul>
//                 </nav>
//                 <div className="header-buttons">
//                     <a href='/signin' className="btn login">Login</a>
//                     <a href='/signup' className="btn start-free">Start Free</a>
//                 </div>
//                 <button className="menu-toggle" onClick={toggleMenu}>
//                     ☰
//                 </button>
//             </div>
//         </header>
//     );
// };

// export default Header;