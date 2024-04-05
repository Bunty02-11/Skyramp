import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header2() {
    const navigate = useNavigate();

    const reloadHomePage = (id) => {
        navigate('/');
        window.scrollTo(0, 0);
        window.location.reload();
    };

    const reloadAboutPage = (id) => {
        navigate('/about');
        window.scrollTo(0, 0);
        window.location.reload();
    };

    const reloadServicePage = (id) => {
        navigate('/service');
        window.scrollTo(0, 0);
        window.location.reload();
    };
    const reloadProjectPage = (id) => {
        navigate('/project');
        window.scrollTo(0, 0);
        window.location.reload();
    };

    const reloadContactPage = (id) => {
        navigate('/contact');
        window.scrollTo(0, 0);
        window.location.reload();
    };
    return (
        <div>
            <div className="tp-header-area tp-header-tranparent tp-header-style-4 tp-header-style-5 tp-int-menu tp-header-sticky-cloned">
                <div className="container custom-container-3">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-4 col-6">
                            <div className="tp-header-logo">
                                <a href="index.html">
                                    <img src="assets/img/logo/logo-black.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-8 d-none d-xl-block">
                            <div className="tp-header-menu">
                                <nav className="tp-main-menu-content">
                                    <ul>
                                        <li className="has-dropdown-2">
                                            <a onClick={reloadHomePage}>Home</a>
                                        </li>
                                        <li>
                                            <a onClick={reloadAboutPage}>About Us </a>
                                        </li>
                                        <li className="has-dropdown-2">
                                            <a onClick={reloadServicePage}>Services</a>
                                        </li>
                                        <li className="has-dropdown-2">
                                            <a onClick={reloadProjectPage}>Projects</a>
                                        </li>
                                        <li>
                                            <a onClick={reloadContactPage}>Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-8 col-6">
                            <div className="tp-header-right d-flex align-items-center justify-content-end">
                                <div className="tp-header-bar">
                                    <button className="tp-menu-bar">
                                        <i className="fa-solid fa-bars" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header2
