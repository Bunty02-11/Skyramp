import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'


function Project() {
    return (
        <div>
            <>
                {/* pre loader area start */}
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
                                                            Project
                                                        </h3>
                                                    </div>
                                                    <div className="breadcrumb__list">
                                                        <span>
                                                            <a href="index.html">Home</a>
                                                        </span>
                                                        <span className="dvdr">
                                                            <i className="fa-solid fa-angle-right" />
                                                        </span>
                                                        <span>Project</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* breadcrumb area end */}
                            {/* project area start */}
                            <div className="tp-project-4-area pt-150 pb-90 fix">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="tp-project-title-box text-center mb-30">
                                                <span className="tp-section-subtitle">Latests Project</span>
                                                <h3 className="tp-section-title">
                                                    Where Form Meets Function <br /> with Flair designer
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="tp-project-filter masonary-menu text-center pb-60">
                                                <button data-filter="*" className="active">
                                                    <span>All</span>
                                                </button>
                                                <button data-filter=".cat1">
                                                    <span>Exterior</span>
                                                </button>
                                                <button data-filter=".cat2">
                                                    <span>Side View</span>
                                                </button>
                                                <button data-filter=".cat3">
                                                    <span>Worldwide</span>
                                                </button>
                                                <button data-filter=".cat4">
                                                    <span>Countrylife</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row grid gx-35">
                                        <div className="col-lg-4 col-md-6 grid-item cat5 cat3 cat2">
                                            <div className="tp-project-4-item p-relative">
                                                <div className="tp-project-4-thumb">
                                                    <img src="assets/img/project/project-4-1.jpg" alt="" />
                                                </div>
                                                <div className="tp-project-4-content">
                                                    <h6 className="tp-project-4-title">
                                                        <a href="project-details.html">New York Gallery</a>
                                                    </h6>
                                                    <p>orem npsum dolor sit conse cteturs adipiscing elit</p>
                                                    <a
                                                        className="tp-btn-border-lg white-border"
                                                        href="project-details.html"
                                                    >
                                                        <span>Read More</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 grid-item cat4 cat1 cat2 cat5">
                                            <div className="tp-project-4-item p-relative">
                                                <div className="tp-project-4-thumb">
                                                    <img src="assets/img/project/project-4-2.jpg" alt="" />
                                                </div>
                                                <div className="tp-project-4-content">
                                                    <h6 className="tp-project-4-title">
                                                        <a href="project-details.html">Las vegas Gallery</a>
                                                    </h6>
                                                    <p>orem npsum dolor sit conse cteturs adipiscing elit</p>
                                                    <a
                                                        className="tp-btn-border-lg white-border"
                                                        href="project-details.html"
                                                    >
                                                        <span>Read More</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 grid-item cat2 cat4 cat3 cat5">
                                            <div className="tp-project-4-item p-relative">
                                                <div className="tp-project-4-thumb">
                                                    <img src="assets/img/project/project-4-3.jpg" alt="" />
                                                </div>
                                                <div className="tp-project-4-content">
                                                    <h6 className="tp-project-4-title">
                                                        <a href="project-details.html">St jones Gallery</a>
                                                    </h6>
                                                    <p>orem npsum dolor sit conse cteturs adipiscing elit</p>
                                                    <a
                                                        className="tp-btn-border-lg white-border"
                                                        href="project-details.html"
                                                    >
                                                        <span>Read More</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 grid-item cat1 cat3 cat2 cat4">
                                            <div className="tp-project-4-item p-relative">
                                                <div className="tp-project-4-thumb">
                                                    <img src="assets/img/project/project-4-4.jpg" alt="" />
                                                </div>
                                                <div className="tp-project-4-content">
                                                    <h6 className="tp-project-4-title">
                                                        <a href="project-details.html">California Gallery</a>
                                                    </h6>
                                                    <p>orem npsum dolor sit conse cteturs adipiscing elit</p>
                                                    <a
                                                        className="tp-btn-border-lg white-border"
                                                        href="project-details.html"
                                                    >
                                                        <span>Read More</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 grid-item cat1 cat3 cat2 cat4">
                                            <div className="tp-project-4-item p-relative">
                                                <div className="tp-project-4-thumb">
                                                    <img src="assets/img/project/project-4-5.jpg" alt="" />
                                                </div>
                                                <div className="tp-project-4-content">
                                                    <h6 className="tp-project-4-title">
                                                        <a href="project-details.html">Newyork golf club house</a>
                                                    </h6>
                                                    <p>orem npsum dolor sit conse cteturs adipiscing elit</p>
                                                    <a
                                                        className="tp-btn-border-lg white-border"
                                                        href="project-details.html"
                                                    >
                                                        <span>Read More</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 grid-item cat1 cat3 cat2 cat4">
                                            <div className="tp-project-4-item p-relative">
                                                <div className="tp-project-4-thumb">
                                                    <img src="assets/img/project/project-4-6.jpg" alt="" />
                                                </div>
                                                <div className="tp-project-4-content">
                                                    <h6 className="tp-project-4-title">
                                                        <a href="project-details.html">Newyork golf club house</a>
                                                    </h6>
                                                    <p>orem npsum dolor sit conse cteturs adipiscing elit</p>
                                                    <a
                                                        className="tp-btn-border-lg white-border"
                                                        href="project-details.html"
                                                    >
                                                        <span>Read More</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* project area end */}
                            {/* contact area start */}
                            <div className="tp-contact-area p-relative black-bg fix pt-115 pb-120 z-index">
                                <div className="tp-contact-shape-1">
                                    <img src="assets/img/contact/shape-1-1.png" alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="tp-contact-left">
                                                <div className="tp-contact-title-box mb-20">
                                                    <span className="tp-section-subtitle tp-split-text tp-split-in-right">
                                                        Message
                                                    </span>
                                                    <h3 className="tp-section-title text-white tp-split-text tp-split-in-right">
                                                        Do you Question <br />
                                                        Please Contact Us ?
                                                    </h3>
                                                </div>
                                                <div className="tp-contact-text">
                                                    <p>
                                                        Nemo design enim ipsam voluptatem quim voluptas sit
                                                        aspernatur aut odit auting fugit sed thisnquia
                                                        consequuntur magni dolores eos designer heresm qui ratione{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-xl-6 col-lg-6 wow tpfadeRight"
                                            data-wow-duration=".9s"
                                            data-wow-delay=".7s"
                                        >
                                            <div className="tp-contact-right">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 mb-20">
                                                            <div className="tp-contact-input-box">
                                                                <input type="email" placeholder="Your Email" />
                                                                <div className="tp-contact-icon">
                                                                    <span>
                                                                        <svg
                                                                            width={16}
                                                                            height={15}
                                                                            viewBox="0 0 16 15"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M14.9727 1.76172L13.2227 13.1094C13.1953 13.3828 13.0312 13.6289 12.7852 13.7656C12.6484 13.8203 12.5117 13.875 12.3477 13.875C12.2383 13.875 12.1289 13.8477 12.0195 13.793L8.68359 12.3984L7.28906 14.4766C7.17969 14.668 6.98828 14.75 6.79688 14.75C6.49609 14.75 6.25 14.5039 6.25 14.2031V11.5781C6.25 11.3594 6.30469 11.168 6.41406 11.0312L12.375 3.375L4.33594 10.6211L1.51953 9.44531C1.21875 9.30859 1 9.03516 1 8.67969C0.972656 8.29688 1.13672 8.02344 1.4375 7.85938L13.6875 0.886719C13.9609 0.722656 14.3438 0.722656 14.6172 0.914062C14.8906 1.10547 15.0273 1.43359 14.9727 1.76172Z"
                                                                                fill="currentcolor"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 mb-20">
                                                            <div className="tp-contact-input-box">
                                                                <input type="text" placeholder="Your Phone" />
                                                                <div className="tp-contact-icon">
                                                                    <span>
                                                                        <svg
                                                                            width={15}
                                                                            height={15}
                                                                            viewBox="0 0 15 15"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M13.9727 11.332L13.3164 14.0938C13.2344 14.5039 12.9062 14.7773 12.4961 14.7773C5.60547 14.75 0 9.14453 0 2.25391C0 1.84375 0.246094 1.51562 0.65625 1.43359L3.41797 0.777344C3.80078 0.695312 4.21094 0.914062 4.375 1.26953L5.66016 4.25C5.79688 4.60547 5.71484 5.01562 5.41406 5.23438L3.9375 6.4375C4.86719 8.32422 6.39844 9.85547 8.3125 10.7852L9.51562 9.30859C9.73438 9.03516 10.1445 8.92578 10.5 9.0625L13.4805 10.3477C13.8359 10.5391 14.0547 10.9492 13.9727 11.332Z"
                                                                                fill="currentcolor"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 mb-20">
                                                            <div className="tp-contact-input-box">
                                                                <input type="text" placeholder="Your Address" />
                                                                <div className="tp-contact-icon">
                                                                    <span>
                                                                        <svg
                                                                            width={11}
                                                                            height={15}
                                                                            viewBox="0 0 11 15"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M4.59375 14.4219C3.17188 12.6445 0 8.40625 0 6C0 3.10156 2.32422 0.75 5.25 0.75C8.14844 0.75 10.5 3.10156 10.5 6C10.5 8.40625 7.30078 12.6445 5.87891 14.4219C5.55078 14.832 4.92188 14.832 4.59375 14.4219ZM5.25 7.75C6.20703 7.75 7 6.98438 7 6C7 5.04297 6.20703 4.25 5.25 4.25C4.26562 4.25 3.5 5.04297 3.5 6C3.5 6.98438 4.26562 7.75 5.25 7.75Z"
                                                                                fill="currentcolor"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 mb-20">
                                                            <div className="tp-contact-textarea-box">
                                                                <textarea
                                                                    placeholder="Write Message.."
                                                                    defaultValue={""}
                                                                />
                                                                <div className="tp-contact-icon">
                                                                    <span>
                                                                        <svg
                                                                            width={14}
                                                                            height={11}
                                                                            viewBox="0 0 14 11"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M12.6875 0.5C13.3984 0.5 14 1.10156 14 1.8125C14 2.25 13.7812 2.63281 13.4531 2.87891L7.51953 7.33594C7.19141 7.58203 6.78125 7.58203 6.45312 7.33594L0.519531 2.87891C0.191406 2.63281 0 2.25 0 1.8125C0 1.10156 0.574219 0.5 1.3125 0.5H12.6875ZM5.93359 8.04688C6.5625 8.51172 7.41016 8.51172 8.03906 8.04688L14 3.5625V9.25C14 10.2344 13.207 11 12.25 11H1.75C0.765625 11 0 10.2344 0 9.25V3.5625L5.93359 8.04688Z"
                                                                                fill="currentcolor"
                                                                            />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <button className="tp-btn-border height w-100">
                                                    <span>Send Message</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* contact area end */}
                        </main>
                       <Footer/>
                    </div>
                </div>
            </>

        </div>
    )
}

export default Project
