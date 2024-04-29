import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons from react-icons

function Header() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div>
            <div className="tp-header-area tp-header-tranparent tp-header-style-4 tp-header-style-5">
                <div className="container custom-container-3">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-4 col-6">
                            <div className="tp-header-logo">
                                <a href="index.html">
                                    <img src="assets/img/logo/logo-white.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-8 d-none d-xl-block" style={{ textAlign: 'center' }}>
                            <div className="tp-header-menu">
                                <nav className="tp-main-menu-content">
                                    <ul style={{ padding: 0, margin: 0 }}>
                                        <li style={{ display: 'inline-block', marginRight: '20px' }}>
                                            <a onClick={() => { navigate('/'); reloadPage(); }}>Home</a>
                                        </li>
                                        <li style={{ display: 'inline-block', marginRight: '20px' }}>
                                            <a onClick={() => { navigate('/about'); reloadPage(); }}>About Us</a>
                                        </li>
                                        <li style={{ display: 'inline-block', marginRight: '20px' }}>
                                            <a onClick={() => { navigate('/service'); reloadPage(); }}>Services</a>
                                        </li>
                                        <li style={{ display: 'inline-block', marginRight: '20px' }}>
                                            <a onClick={() => { navigate('/project'); reloadPage(); }}>Projects</a>
                                        </li>
                                        <li style={{ display: 'inline-block' }}>
                                            <a onClick={() => { navigate('/contact'); reloadPage(); }}>Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-6 d-block d-xl-none" style={{ textAlign: 'right' }}>
                            <button onClick={toggleMenu} className="menu-toggle-button" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#ffffff', position: 'relative', zIndex: '1100' }}>
                            {menuOpen ? <FiX size={24} style={{ color: 'black', position: 'relative', zIndex: '1200' }} /> : <FiMenu size={24} style={{ color: 'black', position: 'relative', zIndex: '1200' }} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '1000' }}>
                    <div style={{ backgroundColor: '#ffffff', padding: '50px', borderRadius: '100px', boxShadow: '0 0 10px rgba(0, 0, 0, 0)', zIndex: '1100', textAlign: 'center' }}>
                        <div className="tp-header-logo" style={{ position: 'absolute', top: '20px', left: '20px' }}>
                            <a onClick={() => { navigate('/'); reloadPage(); }} >
                                <img src="assets/img/logo/logo-white.png" alt="" />
                            </a>
                        </div>
                        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                            <li style={{ marginBottom: '40px' }}>
                                <a onClick={() => { navigate('/'); reloadPage(); }} style={{ color: '#000000', textDecoration: 'none', fontSize: '32px' }}>Home</a>
                            </li>
                            <li style={{ marginBottom: '40px' }}>
                                <a onClick={() => { navigate('/about'); reloadPage(); }} style={{ color: '#000000', textDecoration: 'none', fontSize: '32px' }}>About Us</a>
                            </li>
                            <li style={{ marginBottom: '40px' }}>
                                <a onClick={() => { navigate('/service'); reloadPage(); }} style={{ color: '#000000', textDecoration: 'none', fontSize: '32px' }}>Services</a>
                            </li>
                            <li style={{ marginBottom: '40px' }}>
                                <a onClick={() => { navigate('/project'); reloadPage(); }} style={{ color: '#000000', textDecoration: 'none', fontSize: '32px' }}>Projects</a>
                            </li>
                            <li>
                                <a onClick={() => { navigate('/contact'); reloadPage(); }} style={{ color: '#000000', textDecoration: 'none', fontSize: '32px' }}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
