import React from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const reloadPage = () => {
        window.location.reload();
    };


    return (
        <footer>
            {/* footer area start */}
            <div className="tp-footer-area tp-footer-style-2 tp-footer-style-5 black-bg pt-75 pb-50">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50  wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".3s"
                        >
                            <div className="tp-footer-widget footer-cols-5-1">
                                <div className="tp-footer-logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo/logo-white.png" alt="" />
                                    </a>
                                </div>
                                <div className="tp-footer-text pb-5">
                                    <p>
                                        Corporate business typically refers to large-scale enterp
                                        mansola it organizat enterprises or organizat
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50  wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".5s"
                        >
                            <div className="tp-footer-widget footer-cols-5-2">
                                <h4 className="tp-footer-title">Pages</h4>
                                <div className="tp-footer-list">
                                    <ul>
                                        <li>
                                            <a onClick={() => { navigate('/about'); reloadPage(); }} >About Us</a>
                                        </li>
                                        <li>
                                            <a onClick={() => { navigate('/service'); reloadPage(); }}>Service</a>
                                        </li>
                                        <li>
                                            <a onClick={() => { navigate('/project'); reloadPage(); }} >Project</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50  wow tpfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".7s"
                        >
                            <div className="tp-footer-widget footer-cols-5-3 d-flex justify-content-end-4">
                                <div className="tp-footer-contact-box">
                                    <h4 className="tp-footer-title">Office Information</h4>
                                    <div className="tp-footer-contact">
                                        <ul>
                                            <li>
                                                <a href="https://www.google.com/maps/place/United+States/@21.2541411,-83.1622716,7.17z/data=!4m6!3m5!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891!16zL20vMDljN3cw?entry=ttu">
                                                    1st Floor, PINNACLE BUSINESS PARK, Mahakali caves, Andheri East, Mumbai-400093
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:201555-0124">+91 9222499458</a>
                                            </li>
                                            <li>
                                                <a href="mailto:abggcd@gmail.com">bholeinteriors@gmail.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer area end */}
        </footer>
    )
}

export default Footer
