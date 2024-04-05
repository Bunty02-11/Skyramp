import React from 'react'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'
import Header2 from '../Layout/Header2'

function About() {
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
                        About Us
                      </h3>
                    </div>
                    <div className="breadcrumb__list">
                      <span>
                        <a href="index.html">Home</a>
                      </span>
                      <span className="dvdr">
                        <i className="fa-solid fa-angle-right" />
                      </span>
                      <span>About Us</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb area end */}
        {/* Header2 area start */}
        <Header2/>
        {/* Header2 area end */}
        {/* about area start */}
        <div className="tp-about-area tp-about-bg p-relative grey-bg mt-120 pb-120">
          <div className="tp-about-big-text d-none d-xl-block">
            <h6>About Us</h6>
          </div>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
                <div className="tp-about-thumb-box z-index">
                  <div className="tp-hover-distort-wrapper">
                    <div className="canvas" />
                    <div
                      className="tp-hover-distort"
                      data-displacementimage="assets/img/webgl/10.jpg"
                    >
                      <img
                        className="tp-hover-distort-img front"
                        src="assets/img/about/thumb-1.jpg"
                        alt=""
                      />
                      <img
                        className="tp-hover-distort-img back"
                        src="assets/img/about/thumb-1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 order-0 order-lg-1">
                <div className="tp-about-content">
                  <div className="tp-about-title-box mb-20">
                    <span className="tp-section-subtitle tp-split-text tp-split-in-right">
                      About Us
                    </span>
                    <h3 className="tp-section-title tp-split-text tp-split-in-right">
                      Elevate Your Space design Elevate Your Life
                    </h3>
                  </div>
                  <div className="tp-about-text mb-25">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sit amet rhoncus nunc Duis egestas ac ante sed
                      tincidunt. Maecenas in nisi et arcu vulputat isn aliquam
                      Nullam ut metus purus Suspendisse{" "}
                    </p>
                  </div>
                  <div className="tp-about-list mb-35">
                    <ul>
                      <li>
                        <i className="fa-light fa-check" />
                        It is a Long Established fact a reader designer
                      </li>
                      <li>
                        <i className="fa-light fa-check" />
                        Many Desktop publishing packages our
                      </li>
                      <li>
                        <i className="fa-light fa-check" />
                        Something by accident sometimes happy
                      </li>
                    </ul>
                  </div>
                  <a className="tp-btn-black" href="about-us.html">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="offset-xl-3 offset-lg-3 col-xl-6 col-lg-6 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="tp-about-thumb-boxs z-index text-center mt-80">
                  <div className="tp-hover-distort-wrapper">
                    <div className="canvas" />
                    <div
                      className="tp-hover-distort"
                      data-displacementimage="assets/img/webgl/10.jpg"
                    >
                      <img
                        className="tp-hover-distort-img front"
                        src="assets/img/about/thumb-2.jpg"
                        alt=""
                      />
                      <img
                        className="tp-hover-distort-img back"
                        src="assets/img/about/thumb-2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about area end */}
        {/* funfact area start */}
        <div className="tp-funfact-area tp-funfact-height black-bg fix p-relative">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 order-1 order-lg-0">
                <div className="tp-funfact-item-box d-flex justify-content-between">
                  <div className="tp-funfact-item p-relative">
                    <h6 className="tp-funfact-number">
                      <i
                        className="purecounter"
                        data-purecounter-duration={1}
                        data-purecounter-end={40}
                      >
                        0
                      </i>
                      k
                    </h6>
                    <span>
                      Award Won For <br /> Our Quality
                    </span>
                    <div className="tp-funfact-icon">
                      <span>
                        <svg
                          width={21}
                          height={35}
                          viewBox="0 0 21 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6905 2.18625C14.6905 1.60219 14.463 1.05258 14.0496 0.639687C13.2233 -0.187187 11.7822 -0.187187 10.9565 0.639687L9.8906 1.705C9.13865 1.37523 8.32162 1.1975 7.47615 1.1975C5.86943 1.1975 4.35842 1.82312 3.22256 2.95953L2.12936 4.05273C2.12936 4.05273 2.12881 4.05273 2.12881 4.05328C2.12881 4.05383 2.12881 4.05383 2.12826 4.05383L0.582246 5.60039C0.368418 5.81422 0.368418 6.15984 0.582246 6.37367L2.4624 8.25328C1.72029 9.36672 1.83896 10.8881 2.82006 11.8692C3.36146 12.4106 4.0817 12.7092 4.84732 12.7092C5.42209 12.7092 5.97061 12.5413 6.43764 12.2285L8.31615 14.107C8.42279 14.2137 8.56279 14.2673 8.70279 14.2673C8.84279 14.2673 8.98279 14.2137 9.08943 14.107L10.636 12.5605C10.636 12.5605 10.6365 12.5605 10.6365 12.5599L11.7303 11.4667C12.5358 10.6612 13.0576 9.68117 13.3097 8.64758L15.7843 11.8659V14.6348L12.0136 22.1756C11.8785 22.4458 11.9879 22.7745 12.258 22.9095C12.3368 22.9489 12.4204 22.9675 12.5025 22.9675C12.7032 22.9675 12.8962 22.857 12.9925 22.6651L16.8206 15.0088C16.8583 14.9334 16.878 14.8491 16.878 14.7644V13.1237V11.68C16.878 11.5591 16.8381 11.4421 16.7643 11.347L13.4819 7.07969C13.465 6.30094 13.2971 5.52711 12.9804 4.80141L13.0537 4.72812L17.9718 11.1222V13.1237V14.6353L13.2588 24.0612H11.4093C10.5047 24.0612 9.76865 24.7973 9.76865 25.7019V31.1706H5.39365C4.79045 31.1706 4.2999 31.6612 4.2999 32.2644V34.4519C4.2999 34.7543 4.5449 34.9987 4.84678 34.9987H20.1593C20.4612 34.9987 20.7062 34.7543 20.7062 34.4519V32.2644C20.7062 31.6612 20.2156 31.1706 19.6124 31.1706H17.4249V28.9831C17.4249 28.6807 17.1799 28.4362 16.878 28.4362H15.2374V25.7019C15.2374 25.0817 14.8874 24.5469 14.3783 24.2685L19.0081 15.0094C19.0458 14.9334 19.0655 14.8491 19.0655 14.7644V10.9362C19.0655 10.8154 19.0256 10.6984 18.9518 10.6032L13.8336 3.94883L14.0496 3.73281C14.463 3.31992 14.6905 2.77031 14.6905 2.18625ZM10.8624 25.7019C10.8624 25.4 11.1079 25.155 11.4093 25.155H13.5968C13.8981 25.155 14.1437 25.4 14.1437 25.7019V31.1706H10.8624V25.7019ZM19.6124 33.905H5.39365V32.2644H10.3155H14.6905H19.6124V33.905ZM16.3312 29.53V31.1706H15.2374V29.53H16.3312ZM11.7297 1.41297C12.1432 0.999531 12.8629 0.999531 13.2763 1.41297C13.483 1.61969 13.5968 1.89422 13.5968 2.18625C13.5968 2.47828 13.483 2.75281 13.2763 2.95953L12.4292 3.80664C12.2247 3.50914 11.9944 3.22367 11.7297 2.95953C11.4672 2.69703 11.1829 2.46516 10.8837 2.25844L11.7297 1.41297ZM3.59279 11.0965C3.04154 10.5447 2.93764 9.72055 3.26576 9.05773L5.62717 11.4191C4.966 11.7303 4.12436 11.6275 3.59279 11.0965ZM10.9565 10.694L10.2494 11.4011L5.421 6.57273C5.20717 6.35891 4.86154 6.35891 4.64772 6.57273C4.43389 6.78656 4.43389 7.13219 4.64772 7.34601L9.47607 12.1744L8.70279 12.9477L1.74162 5.98703L2.5149 5.2132L3.07873 5.77703C3.18537 5.88367 3.32537 5.93726 3.46537 5.93726C3.60537 5.93726 3.74537 5.88367 3.85201 5.77703C4.06584 5.5632 4.06584 5.21758 3.85201 5.00375L3.28818 4.43992L3.99529 3.73281C5.91428 1.81328 9.03693 1.81383 10.9565 3.73281C12.8754 5.65234 12.8754 8.775 10.9565 10.694Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M17.4219 13.6719C17.7239 13.6719 17.9688 13.427 17.9688 13.125C17.9688 12.823 17.7239 12.5781 17.4219 12.5781C17.1198 12.5781 16.875 12.823 16.875 13.125C16.875 13.427 17.1198 13.6719 17.4219 13.6719Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="tp-funfact-item p-relative">
                    <h6 className="tp-funfact-number">
                      <i
                        className="purecounter"
                        data-purecounter-duration={1}
                        data-purecounter-end={8}
                      >
                        0
                      </i>
                      k
                    </h6>
                    <span>
                      Satisficed <br /> Client review
                    </span>
                    <div className="tp-funfact-icon">
                      <span>
                        <svg
                          width={19}
                          height={35}
                          viewBox="0 0 19 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.068 15.8594C17.3863 15.8594 17.6882 15.721 17.896 15.4804C18.1038 15.2398 18.1962 14.9209 18.1497 14.6054L16.1936 1.40055C16.0749 0.602109 15.3776 0 14.5705 0H4.42701C3.62037 0 2.92256 0.602109 2.80389 1.40055L0.847717 14.6054C0.801233 14.9204 0.893655 15.2392 1.10147 15.4804C1.30928 15.7216 1.61115 15.8594 1.92944 15.8594H10.0456V30.0781H8.95186V17.5C8.95186 17.1976 8.70686 16.9531 8.40498 16.9531C8.10311 16.9531 7.85811 17.1976 7.85811 17.5V30.0781H7.31123C6.70803 30.0781 6.21748 30.5687 6.21748 31.1719V32.2656H4.57686C3.97365 32.2656 3.48311 32.7562 3.48311 33.3594V34.4531C3.48311 34.7555 3.72811 35 4.02998 35H14.9675C15.2694 35 15.5144 34.7555 15.5144 34.4531V33.3594C15.5144 32.7562 15.0238 32.2656 14.4206 32.2656H12.78V31.1719C12.78 30.5687 12.2894 30.0781 11.6862 30.0781H11.1394V15.8594H17.068ZM14.4206 33.3594V33.9062H4.57686V33.3594H7.31123H11.6862H14.4206ZM11.6868 32.2656H7.31123V31.1719H8.40498H10.5925H11.6862L11.6868 32.2656ZM3.88561 1.56078C3.92553 1.29445 4.15795 1.09375 4.42701 1.09375H14.571C14.8401 1.09375 15.0725 1.29445 15.1119 1.56078L17.0691 14.7656H1.92944L3.88561 1.56078Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M5.44794 2.19632C5.1499 2.15694 4.87099 2.35819 4.82669 2.65734L3.28724 13.048C3.24294 13.3466 3.44911 13.6249 3.74826 13.6692C3.7756 13.6725 3.8024 13.6747 3.82919 13.6747C4.09552 13.6747 4.32904 13.48 4.3695 13.2076L5.90896 2.81702C5.95271 2.51898 5.74654 2.24062 5.44794 2.19632Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M15.1639 13.6713C15.1907 13.6713 15.2175 13.6691 15.2448 13.6653C15.5434 13.621 15.7501 13.3426 15.7058 13.0441L14.1664 2.65343C14.1221 2.35429 13.847 2.15304 13.5451 2.19241C13.2465 2.23671 13.0398 2.51507 13.0841 2.81366L14.6236 13.2043C14.664 13.4766 14.8975 13.6713 15.1639 13.6713Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M12.95 13.6735C12.9768 13.6735 13.0036 13.6713 13.0309 13.6675C13.3295 13.6232 13.5362 13.3448 13.4919 13.0462L11.9711 2.78245C11.9268 2.48331 11.6511 2.28151 11.3498 2.32144C11.0512 2.36573 10.8445 2.64409 10.8888 2.94269L12.4097 13.207C12.4501 13.4788 12.6836 13.6735 12.95 13.6735Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M7.6481 2.32144C7.3506 2.28151 7.07115 2.48331 7.02685 2.78245L5.50599 13.0467C5.46169 13.3453 5.66786 13.6237 5.96701 13.668C5.99435 13.6713 6.02115 13.6735 6.04794 13.6735C6.31427 13.6735 6.54779 13.4788 6.58825 13.2064L8.10911 2.94269C8.15341 2.64409 7.94669 2.36573 7.6481 2.32144Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M9.5 2.1875C9.19813 2.1875 8.95312 2.43195 8.95312 2.73438V13.125C8.95312 13.4274 9.19813 13.6719 9.5 13.6719C9.80187 13.6719 10.0469 13.4274 10.0469 13.125V2.73438C10.0469 2.43195 9.80187 2.1875 9.5 2.1875Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="tp-funfact-item p-relative">
                    <h6 className="tp-funfact-number">
                      <i
                        className="purecounter"
                        data-purecounter-duration={1}
                        data-purecounter-end={10}
                      >
                        0
                      </i>
                      k
                    </h6>
                    <span>
                      projects Has <br /> Been Completed{" "}
                    </span>
                    <div className="tp-funfact-icon">
                      <span>
                        <svg
                          width={35}
                          height={35}
                          viewBox="0 0 35 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.3438 9.84375C27.3438 4.41602 22.9277 0 17.5 0C12.0723 0 7.65625 4.41602 7.65625 9.84375C7.65625 15.2715 12.0723 19.6875 17.5 19.6875C17.6848 19.6875 17.8648 19.67 18.0469 19.6596V22.4219H16.9531V21.3281C16.9531 21.0257 16.7081 20.7812 16.4062 20.7812C16.1044 20.7812 15.8594 21.0257 15.8594 21.3281V22.4219H15.3125C15.0106 22.4219 14.7656 22.6663 14.7656 22.9688V25.1562C14.7656 25.4587 15.0106 25.7031 15.3125 25.7031H15.8594V31.7188H10.5197C9.89406 31.7188 9.33242 32.0666 9.05242 32.6255C8.79648 33.1379 8.82328 33.7345 9.12406 34.2218C9.42484 34.7091 9.94656 35 10.5197 35H24.4803C25.0529 35 25.5746 34.7091 25.8759 34.2218C26.1773 33.7345 26.2041 33.1379 25.9476 32.6255C25.6681 32.0666 25.1059 31.7188 24.4803 31.7188H19.1406V25.7031H19.6875C19.9894 25.7031 20.2344 25.4587 20.2344 25.1562V22.9688C20.2344 22.6663 19.9894 22.4219 19.6875 22.4219H19.1406V19.5393C23.7885 18.7545 27.3438 14.7115 27.3438 9.84375ZM24.9692 33.1149C25.0923 33.361 24.9933 33.5688 24.9457 33.647C24.897 33.7247 24.7554 33.9062 24.4803 33.9062H10.5197C10.2446 33.9062 10.103 33.7247 10.0543 33.6465C10.0062 33.5683 9.90719 33.361 10.0308 33.1144C10.1237 32.9284 10.3113 32.8125 10.5197 32.8125H16.4062H18.5938H24.4803C24.6887 32.8125 24.8763 32.9284 24.9692 33.1149ZM18.0469 31.7188H16.9531V25.7031H18.0469V31.7188ZM19.1406 24.6094H15.8594V23.5156H19.1406V24.6094ZM8.75 9.84375C8.75 5.01922 12.6755 1.09375 17.5 1.09375C22.3245 1.09375 26.25 5.01922 26.25 9.84375C26.25 14.6683 22.3245 18.5938 17.5 18.5938C12.6755 18.5938 8.75 14.6683 8.75 9.84375Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M24.8756 7.80336C24.7947 7.51297 24.4939 7.34344 24.2029 7.42273L19.3861 8.75547C19.1635 8.37156 18.8321 8.06203 18.429 7.87117C18.8315 6.39297 19.6776 4.39469 21.316 4.39469C21.5588 4.39469 21.7726 4.23445 21.841 4.00094C21.9094 3.76742 21.8153 3.5175 21.6102 3.3868C20.3819 2.60203 18.9606 2.1875 17.4999 2.1875C15.6072 2.1875 13.7888 2.88641 12.3806 4.1557C12.1564 4.35805 12.1383 4.70367 12.3401 4.92789L15.6783 8.6368C15.448 8.98297 15.3124 9.3975 15.3124 9.84375C15.3124 9.99687 15.3288 10.1456 15.3589 10.29C13.9348 10.8555 11.8343 11.3761 10.851 10.0702C10.7044 9.87656 10.4479 9.79945 10.221 9.88695C9.99349 9.97227 9.85021 10.1981 9.8688 10.4404C9.98037 11.8934 10.5032 13.2787 11.3815 14.4462C12.5201 15.9595 14.1716 16.992 16.0321 17.354C16.0671 17.3611 16.1021 17.3644 16.1371 17.3644C16.3936 17.3644 16.6222 17.1834 16.673 16.922L17.6317 12.0176C18.0905 11.9897 18.5078 11.8218 18.8479 11.5533C19.9909 12.5737 21.4035 14.2253 20.6718 15.6915C20.5629 15.9086 20.6111 16.1716 20.7894 16.3368C20.8933 16.433 21.0267 16.4828 21.1612 16.4828C21.2575 16.4828 21.3548 16.4571 21.4418 16.4052C22.6925 15.6565 23.6976 14.5698 24.3506 13.2628C25.1955 11.5691 25.382 9.62992 24.8756 7.80336ZM17.4999 3.28125C18.2956 3.28125 19.0776 3.42508 19.8121 3.70234C18.7233 4.33016 17.8805 5.69023 17.355 7.67102C17.046 7.6918 16.7572 7.77547 16.4964 7.91164L13.5334 4.61945C14.672 3.75266 16.0611 3.28125 17.4999 3.28125ZM15.7089 16.1541C14.3329 15.7653 13.1211 14.9384 12.2559 13.7884C11.7774 13.1529 11.4225 12.4414 11.2021 11.6878C12.3587 12.1811 13.9523 12.0362 15.8516 11.2656C16.0474 11.4926 16.2858 11.6785 16.5587 11.8098L15.7089 16.1541ZM17.4999 10.9375C16.8967 10.9375 16.4061 10.447 16.4061 9.84375C16.4061 9.24055 16.8967 8.75 17.4999 8.75C18.1031 8.75 18.5936 9.24055 18.5936 9.84375C18.5936 10.447 18.1031 10.9375 17.4999 10.9375ZM23.3717 12.7745C23.0162 13.4865 22.5383 14.122 21.9624 14.6552C21.8869 13.4023 21.0491 12.0433 19.5162 10.6903C19.6261 10.4305 19.6874 10.144 19.6874 9.84375C19.6874 9.83117 19.6841 9.81969 19.6836 9.80711L23.9459 8.62805C24.2122 10.0335 24.0143 11.4871 23.3717 12.7745Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M17.4961 10.2539C17.7226 10.2539 17.9062 10.0703 17.9062 9.84375C17.9062 9.61723 17.7226 9.43359 17.4961 9.43359C17.2696 9.43359 17.0859 9.61723 17.0859 9.84375C17.0859 10.0703 17.2696 10.2539 17.4961 10.2539Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 order-0 order-lg-1">
                <div className="tp-funfact-title-box">
                  <span className="tp-section-subtitle text-white tp-split-text tp-split-in-right">
                    Counter
                  </span>
                  <h3 className="tp-section-title text-white tp-split-text tp-split-in-right">
                    Aesthetics with Interior Flaire
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* funfact area end */}
        {/* testimonial area star */}
        <div className="tp-testimonial-area pt-140 pb-150">
          <div className="container">
            <div className="tp-testimonial-title-wrap mb-85">
              <div className="row align-items-end">
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-testimonial-title-box">
                    <span className="tp-section-subtitle tp-split-text tp-split-in-right">
                      Testimonial
                    </span>
                    <h3 className="tp-section-title tp-split-text tp-split-in-right">
                      Discover the Art Interior Transformation
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="tp-testimonial-top-text">
                    <p className="mb-0">
                      loborti viverra laoreet matti ullamcorper posuere viverra
                      Aliquam eros justo, posuere lobortis non, Aliquam eros
                      justo, posuere loborti viverra laorematullamcorpeposuere
                      viverra
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-testimonial-wrapper">
              <div className="swiper-container tp-testimonial-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="tp-testimonial-item d-flex align-items-center">
                      <div className="tp-testimonial-author-thumb-box p-relative">
                        <div className="tp-testimonial-author-thumb">
                          <img
                            src="assets/img/testimonial/thumb-1-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tp-testimonial-quot">
                          <span>
                            <svg
                              width={25}
                              height={19}
                              viewBox="0 0 25 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0.125V9.5H6.25C6.25 12.9453 3.44844 15.75 0 15.75V18.875C5.16953 18.875 9.375 14.6695 9.375 9.5V0.125H0ZM15.625 0.125V9.5H21.875C21.875 12.9453 19.0734 15.75 15.625 15.75V18.875C20.7945 18.875 25 14.6695 25 9.5V0.125H15.625Z"
                                fill="currentcolor"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="tp-testimonial-author-box">
                        <div className="tp-testimonial-author-info">
                          <h4 className="tp-testimonial-title">
                            Annette Black
                          </h4>
                          <span>Marketing Coordinator</span>
                        </div>
                        <div className="tp-testimonial-text">
                          <p>
                            loborti viverra laoreet matti ullamcorper posuere in
                            viverra Aliquam eros justo, posuere lobortis non dei
                            Aliquam eros justo, posuere loborti
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-testimonial-item d-flex align-items-center">
                      <div className="tp-testimonial-author-thumb-box p-relative">
                        <div className="tp-testimonial-author-thumb">
                          <img
                            src="assets/img/testimonial/thumb-1-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="tp-testimonial-quot">
                          <span>
                            <svg
                              width={25}
                              height={19}
                              viewBox="0 0 25 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0.125V9.5H6.25C6.25 12.9453 3.44844 15.75 0 15.75V18.875C5.16953 18.875 9.375 14.6695 9.375 9.5V0.125H0ZM15.625 0.125V9.5H21.875C21.875 12.9453 19.0734 15.75 15.625 15.75V18.875C20.7945 18.875 25 14.6695 25 9.5V0.125H15.625Z"
                                fill="currentcolor"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="tp-testimonial-author-box">
                        <div className="tp-testimonial-author-info">
                          <h4 className="tp-testimonial-title">
                            Nathanael Gonsalves
                          </h4>
                          <span>Marketing Coordinator</span>
                        </div>
                        <div className="tp-testimonial-text">
                          <p>
                            loborti viverra laoreet matti ullamcorper posuere in
                            viverra Aliquam eros justo, posuere lobortis non dei
                            Aliquam eros justo, posuere loborti
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial area end */}
      </main>
      <Footer/>
    </div>
  </div>
</>

    </div>
  )
}

export default About
