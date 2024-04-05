import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Header2 from '../Layout/Header2'

function Contact() {
    return (
        <div>
            <>
                {/* <div id="loading">
                    <div id="loading-center">
                        <div id="loading-center-absolute">
                            <div className="object" id="object_four" />
                            <div className="object" id="object_three" />
                            <div className="object" id="object_two" />
                            <div className="object" id="object_one" />
                        </div>
                    </div>
                </div> */}
                {/* pre loader area end */}
                {/* back to top start */}
                <div className="back-to-top-wrapper">
                    <button id="back_to_top" type="button" className="back-to-top-btn">
                        <svg
                            width={12}
                            height={7}
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 6L6 1L1 6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                {/* back to top end */}
                {/* search popup start */}
                <div className="search__popup d-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="search__wrapper">
                                    <div className="search__top d-flex justify-content-between align-items-center">
                                        <div className="search__logo">
                                            <a href="index.html">
                                                <img src="assets/img/logo/logo-white.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="search__close">
                                            <button
                                                type="button"
                                                className="search__close-btn search-close-btn"
                                            >
                                                <svg
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M17 1L1 17"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M1 1L17 17"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="search__form">
                                        <form action="#">
                                            <div className="search__input">
                                                <input
                                                    className="search-input-field"
                                                    type="text"
                                                    placeholder="Type here to search..."
                                                />
                                                <span className="search-focus-border" />
                                                <button type="submit">
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M19.0002 19.0002L17.2002 17.2002"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* search popup end */}
                {/* tp-offcanvus-area-start */}
                <div className="tpoffcanvas-area">
                    <div className="tpoffcanvas">
                        <div className="tpoffcanvas__close-btn">
                            <button className="close-btn">
                                <i className="fal fa-times" />
                            </button>
                        </div>
                        <div className="tpoffcanvas__logo">
                            <a href="index.html">
                                <img src="assets/img/logo/logo-white.png" alt="" />
                            </a>
                        </div>
                        <div className="tpoffcanvas__title">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                                incidunt eaque ab cumque, porro maxime autem sed.
                            </p>
                        </div>
                        <div className="tp-main-menu-mobile d-xl-none" />
                        <div className="tpoffcanvas__contact-info">
                            <div className="tpoffcanvas__contact-title">
                                <h5>Contact us</h5>
                            </div>
                            <ul>
                                <li>
                                    <i className="fa-light fa-location-dot" />
                                    <a
                                        href="https://www.google.com/maps/@23.8223586,90.3661283,15z"
                                        target="_blank"
                                    >
                                        Melbone st, Australia, Ny 12099
                                    </a>
                                </li>
                                <li>
                                    <i className="fas fa-envelope" />
                                    <a href="mailto:solaredge@gmail.com">themepure@gmail.com</a>
                                </li>
                                <li>
                                    <i className="fal fa-phone-alt" />
                                    <a href="tel:+48555223224">+48 555 223 224</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tpoffcanvas__input">
                            <div className="tpoffcanvas__input-title">
                                <h4>Get UPdate</h4>
                            </div>
                            <form action="#">
                                <div className="p-relative">
                                    <input type="text" placeholder="Enter mail" />
                                    <button>
                                        <i className="fas fa-paper-plane" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="tpoffcanvas__social">
                            <div className="social-icon">
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-pinterest-p" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body-overlay" />
                {/* tp-offcanvus-area-end */}
                <Header/>
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            {/* breadcrumb area start */}
                            <div className="breadcrumb__pt">
                                <div
                                    className="breadcrumb__area breadcrumb__overlay breadcrumb__height p-relative fix"
                                    data-background="assets/img/breadcurmb/breadcurmb.jpg"
                                >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <div className="breadcrumb__content z-index">
                                                    <div className="breadcrumb__section-title-box mb-20">
                                                        <h3 className="breadcrumb__title tp-split-text tp-split-in-right">
                                                            Contact Us
                                                        </h3>
                                                    </div>
                                                    <div className="breadcrumb__list">
                                                        <span>
                                                            <a href="index.html">Home</a>
                                                        </span>
                                                        <span className="dvdr">
                                                            <i className="fa-solid fa-angle-right" />
                                                        </span>
                                                        <span>Contact Us</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Header2/>
                            {/* breadcrumb area end */}
                            {/* form area start */}
                            <div className="tp-form-area pt-145 pb-150">
                                <div className="container">
                                    <div className="tp-form-top pb-100">
                                        <div className="row">
                                            <div className="col-xl-8 col-lg-8 mb-50">
                                                <div className="tp-form-box tp-form-box-style-2">
                                                    <h4 className="tp-section-title pb-60">
                                                        Enter You Personal Details
                                                    </h4>
                                                    <form
                                                        id="contact-form"
                                                        action="https://html.hixstudio.net/interno-prev/interno/assets/mail.php"
                                                        method="POST"
                                                    >
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6 mb-30">
                                                                <div className="tp-form-input-box">
                                                                    <input
                                                                        name="name"
                                                                        type="text"
                                                                        placeholder="First name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 mb-30">
                                                                <div className="tp-form-input-box">
                                                                    <input
                                                                        name="email"
                                                                        type="email"
                                                                        placeholder="Your Email"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 mb-30">
                                                                <div className="tp-form-input-box">
                                                                    <input
                                                                        name="phone"
                                                                        type="text"
                                                                        placeholder="Phone"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-6 mb-30">
                                                                <div className="tp-form-input-box">
                                                                    <input
                                                                        name="address"
                                                                        type="text"
                                                                        placeholder="Address"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-lg-12 mb-30">
                                                                <div className="tp-form-textarea-box">
                                                                    <textarea
                                                                        name="message"
                                                                        placeholder="Messege"
                                                                        defaultValue={""}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className="tp-btn-theme black-bg" type="submit">
                                                            <span>Send a messege</span>
                                                        </button>
                                                        <p className="ajax-response" />
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 mb-50">
                                                <div className="tp-contact-box">
                                                    <h4 className="tp-section-title pb-10">Get in touch </h4>
                                                    <p className="pb-25">
                                                        It is a long established fact that a reader will be
                                                        distrol acted bioiiy desig the rea dablea contentIt is a
                                                        long established fact that a reader will be{" "}
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <div className="tp-contact-item d-flex align-items-center">
                                                                <div className="tp-contact-icon-2">
                                                                    <span>
                                                                        <svg
                                                                            width={15}
                                                                            height={21}
                                                                            viewBox="0 0 15 21"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M6.5625 20.0312C4.53125 17.4922 0 11.4375 0 8C0 3.85938 3.32031 0.5 7.5 0.5C11.6406 0.5 15 3.85938 15 8C15 11.4375 10.4297 17.4922 8.39844 20.0312C7.92969 20.6172 7.03125 20.6172 6.5625 20.0312ZM7.5 10.5C8.86719 10.5 10 9.40625 10 8C10 6.63281 8.86719 5.5 7.5 5.5C6.09375 5.5 5 6.63281 5 8C5 9.40625 6.09375 10.5 7.5 10.5Z"
                                                                                fill="currentcolor"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div className="tp-contact-content">
                                                                    <h6>Address</h6>
                                                                    <a
                                                                        href="https://www.google.com/maps/place/Cumberland+House,+SK,+Canada/@53.6729773,-103.7836571,8z/data=!4m15!1m8!3m7!1s0x4b0d03d337cc6ad9:0x9968b72aa2438fa5!2sCanada!3b1!8m2!3d56.130366!4d-106.346771!16zL20vMGQwNjBn!3m5!1s0x52f917b0cc93e6c1:0x44da1470d37ba724!8m2!3d53.958266!4d-102.267444!16zL20vMDZteWx5?entry=ttu"
                                                                        target="_blank"
                                                                    >
                                                                        Dhaka 102, utl 1216, road 45 house shantighar
                                                                        rahuta, 1213
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="tp-contact-item d-flex align-items-center">
                                                                <div className="tp-contact-icon-2">
                                                                    <span>
                                                                        <svg
                                                                            width={20}
                                                                            height={15}
                                                                            viewBox="0 0 20 15"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M18.125 0C19.1406 0 20 0.859375 20 1.875C20 2.5 19.6875 3.04688 19.2188 3.39844L10.7422 9.76562C10.2734 10.1172 9.6875 10.1172 9.21875 9.76562L0.742188 3.39844C0.273438 3.04688 0 2.5 0 1.875C0 0.859375 0.820312 0 1.875 0H18.125ZM8.47656 10.7812C9.375 11.4453 10.5859 11.4453 11.4844 10.7812L20 4.375V12.5C20 13.9062 18.8672 15 17.5 15H2.5C1.09375 15 0 13.9062 0 12.5V4.375L8.47656 10.7812Z"
                                                                                fill="currentcolor"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div className="tp-contact-content">
                                                                    <h6>Email Address</h6>
                                                                    <a href="mailto:ijmnhhasan000@yourmail.com">
                                                                        ijmnhhasan000@yourmail.com
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="tp-contact-item d-flex align-items-center">
                                                                <div className="tp-contact-icon-2">
                                                                    <span>
                                                                        <svg
                                                                            width={21}
                                                                            height={21}
                                                                            viewBox="0 0 21 21"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M19.9609 15.6172L19.0234 19.5625C18.9062 20.1484 18.4375 20.5391 17.8516 20.5391C8.00781 20.5 0 12.4922 0 2.64844C0 2.0625 0.351562 1.59375 0.9375 1.47656L4.88281 0.539062C5.42969 0.421875 6.01562 0.734375 6.25 1.24219L8.08594 5.5C8.28125 6.00781 8.16406 6.59375 7.73438 6.90625L5.625 8.625C6.95312 11.3203 9.14062 13.5078 11.875 14.8359L13.5938 12.7266C13.9062 12.3359 14.4922 12.1797 15 12.375L19.2578 14.2109C19.7656 14.4844 20.0781 15.0703 19.9609 15.6172Z"
                                                                                fill="currentcolor"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div className="tp-contact-content">
                                                                    <h6>Phone number</h6>
                                                                    <a href="tel:0000000000000">0000-0000-00-000</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="tp-map-box">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146513.05509247648!2d73.19133525789097!3d54.98596156928781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43aafde2f601090b%3A0x5eefc33861a69b1a!2z4KaT4Kau4Ka44KeN4KaVLCBPbXNrIE9ibGFzdCwg4Kaw4Ka-4Ka24Ka_4Kav4Ka84Ka-!5e0!3m2!1sbn!2sbd!4v1689181288902!5m2!1sbn!2sbd"
                                                    width={600}
                                                    height={450}
                                                    style={{ border: 0 }}
                                                    allowFullScreen=""
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* form area end */}
                            {/* brand area start */}
                          
                            {/* brand area end */}
                        </main>
                        <Footer/>
                    </div>
                </div>
            </>

        </div>
    )
}

export default Contact
