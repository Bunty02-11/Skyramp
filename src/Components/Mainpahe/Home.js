import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { useNavigate } from 'react-router-dom';
import Topbutton from '../Topbutton/Topbutton';


function Home() {
    const navigate = useNavigate();

    const reloadPage = () => {
        window.location.reload(0, 0);
    };


    return (
        <div>
            <>
                {/* back to top start */}
                <Topbutton />
                {/* back to top end */}
                {/* header area start */}
                <Header />
                {/* header area end */}
                {/* slider area start */}
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <div className="tp-slider-3-area">
                                <div className="tp-slider-3-wrapper p-relative">
                                    <div className="tp-slider-dots" />
                                    <div className="swiper-container tp-slider-3-active">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="tp-slider-3-height p-relative fix grey-bg">
                                                    <div
                                                        className="tp-slider-3-bg tp-slider-3-overlay"
                                                        data-background="assets/img/slider/slider-5-1.jpg"
                                                    />
                                                    <div className="tp-slider-3-social d-none d-xxl-block">
                                                        <a href="#">
                                                            <i className="fa-brands fa-facebook-f" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa-brands fa-twitter" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa-brands fa-instagram" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa-brands fa-linkedin" />
                                                        </a>
                                                    </div>
                                                    <div className="tp-hero-2-funfact-box d-none d-md-flex justify-content-between">
                                                        <div className="tp-hero-2-funfact">
                                                            <h5>
                                                                <i
                                                                    className="purecounter"
                                                                    data-purecounter-duration={1}
                                                                    data-purecounter-end={40}
                                                                >
                                                                    0
                                                                </i>
                                                                k
                                                            </h5>
                                                            <span>Winning award</span>
                                                        </div>
                                                        <div className="tp-hero-2-funfact">
                                                            <h5>
                                                                <i
                                                                    className="purecounter"
                                                                    data-purecounter-duration={1}
                                                                    data-purecounter-end={100}
                                                                >
                                                                    0
                                                                </i>
                                                                k
                                                            </h5>
                                                            <span>Complete project</span>
                                                        </div>
                                                        <div className="tp-hero-2-funfact">
                                                            <h5>
                                                                <i
                                                                    className="purecounter"
                                                                    data-purecounter-duration={1}
                                                                    data-purecounter-end={800}
                                                                >
                                                                    0
                                                                </i>
                                                                k
                                                            </h5>
                                                            <span>Client reviewt</span>
                                                        </div>
                                                    </div>
                                                    <div className="container">
                                                        <div className="tp-slider-3-wrap p-relative">
                                                            <div className="row align-items-center">
                                                                <div className="col-xl-12">
                                                                    <div className="tp-slider-3-title-box">
                                                                        <h3 className="tp-slider-3-big-text">
                                                                            Thoughtful
                                                                        </h3>
                                                                        <h1 className="tp-slider-3-title mb-25">
                                                                            Interior Design
                                                                        </h1>
                                                                    </div>
                                                                    <div className="tp-slider-3-content">
                                                                        <p className="mb-40">
                                                                            loborti viverra laoreet matti ullamcorper
                                                                            posuere viverr des
                                                                            <br /> Aliquam eros justo posuere lobortis non,
                                                                            Aliquam eros justo, <br /> posuere loborti
                                                                            viverra laorematu our loborti viverra
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="tp-slider-3-height p-relative fix grey-bg">
                                                    <div
                                                        className="tp-slider-3-bg tp-slider-3-overlay"
                                                        data-background="assets/img/slider/slider-5-2.jpg"
                                                    />
                                                    <div className="tp-slider-3-social d-none d-xxl-block">
                                                        <a href="#">
                                                            <i className="fa-brands fa-facebook-f" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa-brands fa-twitter" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa-brands fa-instagram" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa-brands fa-linkedin" />
                                                        </a>
                                                    </div>
                                                    <div className="tp-hero-2-funfact-box d-none d-md-flex justify-content-between">
                                                        <div className="tp-hero-2-funfact">
                                                            <h5>
                                                                <i
                                                                    className="purecounter"
                                                                    data-purecounter-duration={1}
                                                                    data-purecounter-end={40}
                                                                >
                                                                    0
                                                                </i>
                                                                k
                                                            </h5>
                                                            <span>Winning award</span>
                                                        </div>
                                                        <div className="tp-hero-2-funfact">
                                                            <h5>
                                                                <i
                                                                    className="purecounter"
                                                                    data-purecounter-duration={1}
                                                                    data-purecounter-end={100}
                                                                >
                                                                    0
                                                                </i>
                                                                k
                                                            </h5>
                                                            <span>Complete project</span>
                                                        </div>
                                                        <div className="tp-hero-2-funfact">
                                                            <h5>
                                                                <i
                                                                    className="purecounter"
                                                                    data-purecounter-duration={1}
                                                                    data-purecounter-end={800}
                                                                >
                                                                    0
                                                                </i>
                                                                k
                                                            </h5>
                                                            <span>Client reviewt</span>
                                                        </div>
                                                    </div>
                                                    <div className="container">
                                                        <div className="tp-slider-3-wrap p-relative">
                                                            <div className="row align-items-center">
                                                                <div className="col-xl-12">
                                                                    <div className="tp-slider-3-title-box">
                                                                        <h3 className="tp-slider-3-big-text">
                                                                            Thoughtful
                                                                        </h3>
                                                                        <h1 className="tp-slider-3-title mb-25">
                                                                            Interior Design
                                                                        </h1>
                                                                    </div>
                                                                    <div className="tp-slider-3-content">
                                                                        <p className="mb-40">
                                                                            loborti viverra laoreet matti ullamcorper
                                                                            posuere viverr des
                                                                            <br /> Aliquam eros justo posuere lobortis non,
                                                                            Aliquam eros justo, <br /> posuere loborti
                                                                            viverra laorematu our loborti viverra
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="tp-slider-3-height p-relative fix grey-bg">
                                                    <div
                                                        className="tp-slider-3-bg tp-slider-3-overlay"
                                                        data-background="assets/img/slider/slider-5-3.jpg"
                                                    />
                                                    <div className="tp-slider-3-social d-none d-xxl-block">
                                                        <a href="#">
                                                            <i className="fa-brands fa-facebook-f" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa-brands fa-twitter" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa-brands fa-instagram" />
                                                        </a>
                                                        <a href="#">
                                                            <i className="fa-brands fa-linkedin" />
                                                        </a>
                                                    </div>
                                                    <div className="tp-hero-2-funfact-box d-none d-md-flex justify-content-between">
                                                        <div className="tp-hero-2-funfact">
                                                            <h5>
                                                                <i
                                                                    className="purecounter"
                                                                    data-purecounter-duration={1}
                                                                    data-purecounter-end={40}
                                                                >
                                                                    0
                                                                </i>
                                                                k
                                                            </h5>
                                                            <span>Winning award</span>
                                                        </div>
                                                        <div className="tp-hero-2-funfact">
                                                            <h5>
                                                                <i
                                                                    className="purecounter"
                                                                    data-purecounter-duration={1}
                                                                    data-purecounter-end={100}
                                                                >
                                                                    0
                                                                </i>
                                                                k
                                                            </h5>
                                                            <span>Complete project</span>
                                                        </div>
                                                        <div className="tp-hero-2-funfact">
                                                            <h5>
                                                                <i
                                                                    className="purecounter"
                                                                    data-purecounter-duration={1}
                                                                    data-purecounter-end={800}
                                                                >
                                                                    0
                                                                </i>
                                                                k
                                                            </h5>
                                                            <span>Client reviewt</span>
                                                        </div>
                                                    </div>
                                                    <div className="container">
                                                        <div className="tp-slider-3-wrap p-relative">
                                                            <div className="row align-items-center">
                                                                <div className="col-xl-12">
                                                                    <div className="tp-slider-3-title-box">
                                                                        <h3 className="tp-slider-3-big-text">
                                                                            Thoughtful
                                                                        </h3>
                                                                        <h1 className="tp-slider-3-title mb-25">
                                                                            Interior Design
                                                                        </h1>
                                                                    </div>
                                                                    <div className="tp-slider-3-content">
                                                                        <p className="mb-40">
                                                                            loborti viverra laoreet matti ullamcorper
                                                                            posuere viverr des
                                                                            <br /> Aliquam eros justo posuere lobortis non,
                                                                            Aliquam eros justo, <br /> posuere loborti
                                                                            viverra laorematu our loborti viverra
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
                                </div>
                            </div>
                            {/* slider area end */}
                            {/* service area start */}
                            <div className="tp-service-2-area tp-service-style-3 tp-service-style-5 p-relative pt-140 pb-120">
                                <div className="tp-service-2-big-text d-none d-xxl-block">
                                    <h6>Service</h6>
                                </div>
                                <div className="container">
                                    <div className="tp-service-2-title-wrap mb-60">
                                        <div className="row align-items-end">
                                            <div className="col-xl-6 col-lg-6 col-md-7">
                                                <div className="tp-service-2-title-box">
                                                    <span className="tp-section-subtitle tp-split-text tp-split-in-right">
                                                        Best Service
                                                    </span>
                                                    <h3 className="tp-section-title  tp-split-text tp-split-in-right">
                                                        Designing the Future One Room at a Time
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-5">
                                                <div className="tp-service-2-top-text">
                                                    <p>
                                                        loborti viverra laoreet matti ullamcorper posuere viverr
                                                        des Aliquam eros justo posuere lobortis non, Aliquam eros
                                                        justo, posuere loborti viverra laorematu our
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div
                                            className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
                                            data-wow-duration=".9s"
                                            data-wow-delay=".3s"
                                        >
                                            <div className="tp-service-2-item">
                                                <div className="tp-service-2-top-box mb-5 d-flex align-items-center">
                                                    <div className="tp-service-2-icon">
                                                        <span>
                                                            <svg
                                                                width={65}
                                                                height={63}
                                                                viewBox="0 0 65 63"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M63.9844 26.4375H56.5013L55.9682 21.0923C55.8361 20.0868 54.9698 19.3281 53.9542 19.3281H48.75V3.07812C48.75 0.427344 47.4774 0.03125 46.7188 0.03125H18.2812C17.161 0.03125 16.25 0.942393 16.25 2.0625V19.3281C16.25 20.4484 17.161 21.3594 18.2812 21.3594H35.4118L34.905 26.4375H32.5H28.2171C28.99 25.4899 29.4531 24.2823 29.4531 22.9671C29.4531 22.4065 28.9991 21.9515 28.4375 21.9515C27.8759 21.9515 27.4219 22.4065 27.4219 22.9671C27.4219 24.8805 25.8649 26.4375 23.9515 26.4375H22.3438H1.01562C0.453984 26.4375 0 26.8925 0 27.4531V31.5156V61.9844C0 62.545 0.453984 63 1.01562 63H5.07812C5.63977 63 6.09375 62.545 6.09375 61.9844V52.8438H27.4219C27.9835 52.8438 28.4375 52.3887 28.4375 51.8281V32.5312H34.2977L33.8315 37.2072C33.7157 38.0776 33.9798 38.9552 34.5587 39.6164C35.1376 40.2764 35.9724 40.6562 36.8509 40.6562H41.6406V41.6719H34.5312C33.9696 41.6719 33.5156 42.1269 33.5156 42.6875V45.7344C33.5156 46.2051 33.823 46.448 33.9229 46.5479L37.9854 49.5948C38.1611 49.7268 38.3744 49.7979 38.5948 49.7979H42.6573V52.8449H39.6104C39.3016 52.8449 39.0102 52.9851 38.8172 53.2258L35.0167 57.9758C33.5887 58.2286 32.5 59.4707 32.5 60.9688C32.5 61.5294 32.954 61.9844 33.5156 61.9844C33.8386 61.9844 34.1138 61.8239 34.2997 61.5894C34.7171 62.4222 35.5692 63 36.5625 63C37.5558 63 38.4079 62.4221 38.8253 61.5894C39.0112 61.824 39.2864 61.9844 39.6094 61.9844C40.171 61.9844 40.625 61.5294 40.625 60.9688C40.625 60.2356 40.3548 59.5723 39.9222 59.0453L41.0455 57.9219H43.4486L43.4973 58.1646C42.4074 58.6287 41.6406 59.7105 41.6406 60.9688C41.6406 61.5294 42.0946 61.9844 42.6562 61.9844C42.9792 61.9844 43.2545 61.8239 43.4403 61.5894C43.8577 62.4222 44.7098 63 45.7031 63C46.6964 63 47.5485 62.4221 47.9659 61.5894C48.1518 61.824 48.427 61.9844 48.75 61.9844C49.3116 61.9844 49.7656 61.5294 49.7656 60.9688C49.7656 59.7105 48.9988 58.6287 47.9091 58.1646L47.9578 57.9219H50.3609L51.4842 59.0453C51.0514 59.5723 50.7812 60.2355 50.7812 60.9688C50.7812 61.5294 51.2352 61.9844 51.7969 61.9844C52.1198 61.9844 52.3951 61.8239 52.5809 61.5894C52.9984 62.4222 53.8505 63 54.8438 63C55.837 63 56.6891 62.4221 57.1066 61.5894C57.2924 61.824 57.5677 61.9844 57.8906 61.9844C58.4523 61.9844 58.9062 61.5294 58.9062 60.9688C58.9062 59.4707 57.8175 58.2286 56.3905 57.9758L52.5901 53.2258C52.3971 52.9839 52.1056 52.8438 51.7969 52.8438H48.75V49.7969H52.8125C53.0329 49.7969 53.2462 49.7258 53.4219 49.5938L57.4844 46.5469C57.5581 46.473 57.8906 46.221 57.8906 45.7344V42.6875C57.8906 42.1269 57.4366 41.6719 56.875 41.6719H48.75V40.6562H54.5553C55.434 40.6562 56.2698 40.2764 56.8486 39.6164C57.4265 38.9552 57.6916 38.0777 57.5798 37.2408L57.1096 32.5312H58.9062V60.9688V61.9844C58.9062 62.545 59.3602 63 59.9219 63H63.9844C64.546 63 65 62.545 65 61.9844V31.5156V27.4531C65 26.8925 64.546 26.4375 63.9844 26.4375ZM18.2812 2.0625H46.5969C46.6446 2.18945 46.7188 2.4831 46.7188 3.07812V15.2656H21.3281C20.7665 15.2656 20.3125 15.7206 20.3125 16.2812C20.3125 16.8419 20.7665 17.2969 21.3281 17.2969H46.7188V19.3281H39.6094H37.4522H18.2812V2.0625ZM4.0625 60.9688H2.03125V32.5312H4.0625V51.8281V60.9688ZM6.09375 50.8125V42.6875H26.4062V50.8125H6.09375ZM26.4062 40.6562H6.09375V32.5312H26.4062V40.6562ZM27.4219 30.5H5.07812H2.03125V28.4688H22.3438H32.5H34.7029L34.5008 30.5H27.4219ZM45.5193 57.9219L44.9099 54.875H46.4953L45.8859 57.9219H45.5193ZM36.5625 60.9688C36.2832 60.9688 36.0547 60.7414 36.0547 60.4609C36.0547 60.1808 36.2832 59.9531 36.5625 59.9531C36.8418 59.9531 37.0703 60.1808 37.0703 60.4609C37.0703 60.7414 36.8418 60.9688 36.5625 60.9688ZM40.625 55.8906C40.3548 55.8906 40.0969 55.9974 39.907 56.1883L38.1733 57.9219H37.6604L40.0967 54.875H42.8391L43.0422 55.8906H40.625ZM45.7031 60.9688C45.4238 60.9688 45.1953 60.7414 45.1953 60.4609C45.1953 60.1808 45.4238 59.9531 45.7031 59.9531C45.9824 59.9531 46.2109 60.1808 46.2109 60.4609C46.2109 60.7414 45.9824 60.9688 45.7031 60.9688ZM54.8438 60.9688C54.5645 60.9688 54.3359 60.7414 54.3359 60.4609C54.3359 60.1808 54.5645 59.9531 54.8438 59.9531C55.123 59.9531 55.3516 60.1808 55.3516 60.4609C55.3516 60.7414 55.123 60.9688 54.8438 60.9688ZM53.7459 57.9219H53.233L51.4994 56.1883C51.3094 55.9974 51.0514 55.8906 50.7812 55.8906H48.3641L48.5672 54.875H51.3095L53.7459 57.9219ZM46.7188 52.8438H44.6875V49.7969H46.7188V52.8438ZM52.4743 47.7656H47.7344H43.6719H38.932L37.5781 46.75H53.8281L52.4743 47.7656ZM55.8594 44.7188H35.5469V43.7031H42.6562H47.7344H55.8594V44.7188ZM46.7188 41.6719H43.6719V40.6562H46.7188V41.6719ZM55.3201 38.2777C55.123 38.5021 54.8519 38.6249 54.5553 38.6249H47.7344H42.6562H36.8508C36.5542 38.6249 36.2822 38.502 36.0862 38.2777C35.8912 38.0541 35.8048 37.7698 35.8485 37.4418L37.4522 21.3594H39.6094C39.6175 21.3594 39.6236 21.3554 39.6317 21.3554L47.6319 21.3391C47.6673 21.3421 47.6979 21.3594 47.7345 21.3594C47.7721 21.3594 47.8036 21.3421 47.8401 21.338L53.9511 21.3259L55.5629 37.4753C55.6014 37.7698 55.5151 38.0542 55.3201 38.2777ZM56.7034 28.4688H62.9688V30.5H59.9219H56.9065L56.7034 28.4688ZM62.9688 60.9688H60.9375V32.5312H62.9688V60.9688Z"
                                                                    fill="currentcolor"
                                                                />
                                                                <path
                                                                    d="M15.5322 39.3434C15.7303 39.5414 15.9903 39.641 16.2503 39.641C16.5103 39.641 16.7703 39.5414 16.9683 39.3434L18.9996 37.3121C19.3967 36.915 19.3967 36.2732 18.9996 35.8761L16.9683 33.8448C16.5712 33.4476 15.9293 33.4476 15.5322 33.8448L13.501 35.8761C13.1038 36.2732 13.1038 36.915 13.501 37.3121L15.5322 39.3434ZM16.2503 35.9989L16.8454 36.5941L16.2503 37.1893L15.6551 36.5941L16.2503 35.9989Z"
                                                                    fill="currentcolor"
                                                                />
                                                                <path
                                                                    d="M16.9683 44.0011C16.5712 43.6038 15.9293 43.6038 15.5322 44.0011L13.501 46.0323C13.1038 46.4294 13.1038 47.0713 13.501 47.4684L15.5322 49.4996C15.7303 49.6977 15.9903 49.7972 16.2503 49.7972C16.5103 49.7972 16.7703 49.6977 16.9683 49.4996L18.9996 47.4684C19.3967 47.0713 19.3967 46.4294 18.9996 46.0323L16.9683 44.0011ZM16.2503 47.3455L15.6551 46.7503L16.2503 46.1552L16.8454 46.7503L16.2503 47.3455Z"
                                                                    fill="currentcolor"
                                                                />
                                                                <path
                                                                    d="M51.2859 23.3906H40.1203C39.5921 23.3906 39.1534 23.795 39.1086 24.3209L38.16 35.4928C38.1356 35.7762 38.2311 36.0565 38.4241 36.2657C38.616 36.4749 38.8872 36.5938 39.1716 36.5938H52.2335C52.5178 36.5938 52.7891 36.4749 52.981 36.2657C53.173 36.0556 53.2693 35.7763 53.2451 35.4928L52.2965 24.3209C52.2528 23.7948 51.8141 23.3906 51.2859 23.3906ZM40.2776 34.5625L41.0535 25.4219H50.3526L51.1285 34.5625H40.2776Z"
                                                                    fill="currentcolor"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <h4 className="tp-service-2-title">
                                                        <a>
                                                            Muse Interior Innovations
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div className="tp-service-2-content">
                                                    <div className="tp-service-2-text pb-40">
                                                        <p>
                                                            It is a long established fact that a reader will be
                                                            distracted by the design readable content of a page
                                                            layout long
                                                        </p>
                                                    </div>
                                                    <div className="tp-service-2-button">
                                                        <a
                                                            className="tp-btn-border-lg grey-border"
                                                            onClick={() => { navigate('/service'); reloadPage(); }}
                                                        >
                                                            <span>Read More</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
                                            data-wow-duration=".9s"
                                            data-wow-delay=".5s"
                                        >
                                            <div className="tp-service-2-item active">
                                                <div className="tp-service-2-top-box mb-5 d-flex align-items-center">
                                                    <div className="tp-service-2-icon">
                                                        <span>
                                                            <svg
                                                                width={65}
                                                                height={65}
                                                                viewBox="0 0 65 65"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M63.9844 0H1.01562C0.455 0 0 0.453984 0 1.01562V11.1719C0 11.7335 0.455 12.1875 1.01562 12.1875H2.03125V57.8906H1.01562C0.455 57.8906 0 58.3446 0 58.9062V63.9844C0 64.546 0.455 65 1.01562 65H63.9844C64.545 65 65 64.546 65 63.9844V58.9062C65 58.3446 64.545 57.8906 63.9844 57.8906H62.9688V12.1875H63.9844C64.545 12.1875 65 11.7335 65 11.1719V1.01562C65 0.453984 64.545 0 63.9844 0ZM4.0625 12.1875H7.10938V57.8906H4.0625V12.1875ZM55.8594 12.1875V14.2188H12.1875C11.6269 14.2188 11.1719 14.6727 11.1719 15.2344C11.1719 15.796 11.6269 16.25 12.1875 16.25H55.8594V18.2812H9.14062V12.1875H55.8594ZM49.7656 57.8906V54.8438C49.7656 54.794 49.7443 54.7503 49.7372 54.7016L50.6746 52.8176C50.7447 52.6784 50.7812 52.523 50.7812 52.3666V42.4582C50.7812 42.2581 50.7223 42.0621 50.6116 41.8966L49.0923 39.6094H51.7969C52.3575 39.6094 52.8125 39.1554 52.8125 38.5938V35.5469C52.8125 34.9852 52.3575 34.5312 51.7969 34.5312H48.4453C48.1477 34.5312 47.8644 34.6623 47.6714 34.8898L46.7259 36.0019L42.9813 29.5516C42.5791 28.8641 41.8346 28.4375 41.0404 28.4375H23.9596C23.1654 28.4375 22.4209 28.8641 22.0137 29.5567L18.2741 36.0029L17.3276 34.8898C17.1356 34.6623 16.8523 34.5312 16.5547 34.5312H13.2031C12.6425 34.5312 12.1875 34.9852 12.1875 35.5469V38.5938C12.1875 39.1554 12.6425 39.6094 13.2031 39.6094H15.9067L14.3884 41.8966C14.2777 42.0621 14.2188 42.2571 14.2188 42.4582V52.387C14.2188 52.5281 14.2482 52.6663 14.3041 52.7952L15.2344 54.9087V57.8906H9.14062V20.3125H55.8594V57.8906H49.7656ZM46.4516 39.3027C46.4527 39.3037 46.4527 39.3037 46.4516 39.3027L48.75 42.7639V52.127L47.904 53.8281H45.2674L42.8127 49.6681C42.2825 48.6149 41.2648 47.902 40.1009 47.7608C39.9557 47.7435 39.8206 47.7344 39.6774 47.7344H25.3226C24.0104 47.7344 22.7795 48.4941 22.2198 49.6102L19.7326 53.8281H16.9782L16.25 52.1737V42.7639L19.8128 37.3943L23.7687 30.5805C23.8093 30.5124 23.8845 30.4688 23.9606 30.4688H41.0404C41.1166 30.4688 41.1917 30.5124 41.2293 30.5754L45.2207 37.4481L46.4516 39.3027ZM40.3741 53.8281L39.4266 52.2823C39.2427 51.9807 38.9147 51.7969 38.5612 51.7969H26.4387C26.0853 51.7969 25.7573 51.9807 25.5724 52.2823L24.6259 53.8281H22.0898L24.0023 50.5832C24.2511 50.0855 24.7701 49.7656 25.3226 49.7656H39.6774C39.7333 49.7656 39.7841 49.7687 39.848 49.7778C40.3437 49.8377 40.7743 50.1384 41.0302 50.6421L42.9102 53.8281H40.3741ZM17.2656 55.8594H21.3281V57.8906H17.2656V55.8594ZM23.3594 55.8594H25.1946C25.548 55.8594 25.8761 55.6755 26.0609 55.3739L27.0075 53.8281H37.9915L38.9391 55.3739C39.1239 55.6755 39.452 55.8594 39.8054 55.8594H41.6406V57.8906H23.3594V55.8594ZM43.6719 55.8594H47.7344V57.8906H43.6719V55.8594ZM48.0523 37.5781L48.9155 36.5625H50.7812V37.5781H48.0523ZM16.9487 37.5781H14.2188V36.5625H16.0845L16.9487 37.5781ZM62.9688 62.9688H2.03125V59.9219H17.2656H21.3281H43.6719H47.7344H62.9688V62.9688ZM60.9375 57.8906H57.8906V12.1875H60.9375V57.8906ZM62.9688 10.1562H2.03125V2.03125H62.9688V10.1562Z"
                                                                    fill="currentcolor"
                                                                />
                                                                <path
                                                                    d="M23.3592 38.5938H41.6405C41.9929 38.5938 42.3189 38.4109 42.5048 38.1113C42.6906 37.8117 42.7069 37.438 42.5484 37.1231L40.2907 32.6117C39.9952 32.0135 39.4264 31.6032 38.7632 31.5077C38.6362 31.4844 38.5316 31.4844 38.4717 31.4844H26.5554C25.7642 31.4844 25.0533 31.9241 24.6998 32.631L22.4512 37.1241C22.2938 37.439 22.3101 37.8127 22.4949 38.1123C22.6798 38.412 23.0068 38.5938 23.3592 38.5938ZM26.5554 33.5156H38.4484L38.4727 33.5187L39.9962 36.5625H25.0116L26.5554 33.5156Z"
                                                                    fill="currentcolor"
                                                                />
                                                                <path
                                                                    d="M40.625 40.625C40.0644 40.625 39.6094 41.079 39.6094 41.6406V42.6562H25.3906V41.6406C25.3906 41.079 24.9356 40.625 24.375 40.625H20.3125C19.7519 40.625 19.2969 41.079 19.2969 41.6406V45.7031C19.2969 46.2648 19.7519 46.7188 20.3125 46.7188H24.375C24.9356 46.7188 25.3906 46.2648 25.3906 45.7031V44.6875H39.6094V45.7031C39.6094 46.2648 40.0644 46.7188 40.625 46.7188H44.6875C45.2481 46.7188 45.7031 46.2648 45.7031 45.7031V41.6406C45.7031 41.079 45.2481 40.625 44.6875 40.625H40.625ZM23.3594 44.6875H21.3281V42.6562H23.3594V44.6875ZM43.6719 44.6875H41.6406V42.6562H43.6719V44.6875Z"
                                                                    fill="currentcolor"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <h4 className="tp-service-2-title">
                                                        <a>
                                                            Luxe Living <br /> Designs
                                                        </a>{" "}
                                                    </h4>
                                                </div>
                                                <div className="tp-service-2-content">
                                                    <div className="tp-service-2-text pb-40">
                                                        <p>
                                                            It is a long established fact that a reader will be
                                                            distracted by the design readable content of a page
                                                            layout long
                                                        </p>
                                                    </div>
                                                    <div className="tp-service-2-button">
                                                        <a
                                                            className="tp-btn-border-lg grey-border"
                                                            onClick={() => { navigate('/service'); reloadPage(); }}
                                                        >
                                                            <span >Read More</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
                                            data-wow-duration=".9s"
                                            data-wow-delay=".7s"
                                        >
                                            <div className="tp-service-2-item">
                                                <div className="tp-service-2-top-box mb-5 d-flex align-items-center">
                                                    <div className="tp-service-2-icon">
                                                        <span>
                                                            <svg
                                                                width={65}
                                                                height={51}
                                                                viewBox="0 0 65 51"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M61.9531 17.375H59.9219V8.05969C59.9219 5.96648 59.0728 3.91797 57.593 2.4382C56.1133 0.958438 54.0638 0.109375 51.9716 0.109375H13.0284C10.9362 0.109375 8.88672 0.958438 7.40695 2.4382C5.92719 3.91797 5.07812 5.9675 5.07812 8.05969V17.375H3.04688C1.36703 17.375 0 18.742 0 20.4219V26.5156C0 27.0773 0.453984 27.5312 1.01562 27.5312H10.1562V37.6875C10.1562 39.3673 11.5233 40.7344 13.2031 40.7344H51.7969C53.4767 40.7344 54.8438 39.3673 54.8438 37.6875V27.5312H59.9219V43.7812C59.9219 44.3419 59.4669 44.7969 58.9062 44.7969H6.09375C5.53312 44.7969 5.07812 44.3419 5.07812 43.7812V30.5781C5.07812 30.0165 4.62414 29.5625 4.0625 29.5625C3.50086 29.5625 3.04688 30.0165 3.04688 30.5781V43.7812C3.04688 45.1036 3.89898 46.2208 5.07812 46.6413V49.875C5.07812 50.4366 5.53211 50.8906 6.09375 50.8906H9.14062C9.70227 50.8906 10.1562 50.4366 10.1562 49.875V46.8281H54.8438V49.875C54.8438 50.4366 55.2977 50.8906 55.8594 50.8906H58.9062C59.4679 50.8906 59.9219 50.4366 59.9219 49.875V46.6413C61.101 46.2208 61.9531 45.1036 61.9531 43.7812V27.5312H63.9844C64.546 27.5312 65 27.0773 65 26.5156V20.4219C65 18.742 63.633 17.375 61.9531 17.375ZM8.125 48.8594H7.10938V46.8281H8.125V48.8594ZM56.875 48.8594V46.8281H57.8906V48.8594H56.875ZM7.10938 8.05969C7.10938 6.50172 7.74109 4.97625 8.84305 3.8743C9.945 2.77234 11.4705 2.14062 13.0284 2.14062H51.9716C53.5295 2.14062 55.055 2.77234 56.157 3.8743C57.2589 4.97625 57.8906 6.50172 57.8906 8.05969V17.375H55.8594C54.1795 17.375 52.8125 18.742 52.8125 20.4219V26.0952L52.1412 25.4238C52.3047 25.3639 52.456 25.2766 52.5708 25.1405C52.7638 24.912 52.847 24.6113 52.7983 24.3168L51.4384 16.1573L52.7983 7.99773C52.844 7.72453 52.777 7.44523 52.6104 7.22383C52.4448 7.00141 52.197 6.85719 51.9218 6.82266C40.8342 5.43633 33.9412 6.09852 33.6548 6.12594C33.0962 6.1818 32.6899 6.67945 32.7448 7.23805L33.4313 14.0925L32.8067 23.4688H32.5H32.1933L31.5677 14.0945L32.2542 7.24008C32.3101 6.68148 31.9028 6.18383 31.3442 6.12797C31.0578 6.10055 24.1658 5.43938 13.0772 6.82469C12.802 6.8582 12.5541 7.00344 12.3886 7.22586C12.223 7.44727 12.156 7.72656 12.2007 7.99977L13.5606 16.1593L12.2007 24.3188C12.1509 24.6134 12.2342 24.914 12.4282 25.1425C12.543 25.2786 12.6943 25.3659 12.8578 25.4259L12.1875 26.0952V20.4219C12.1875 18.742 10.8205 17.375 9.14062 17.375H7.10938V8.05969ZM35.4616 13.9757L34.8715 8.07695C37.0673 7.95203 42.7101 7.79563 50.6208 8.71172L49.4081 15.9907C49.3888 16.1004 49.3888 16.2141 49.4081 16.3238L50.5974 23.4688H49.7656H34.843L35.4646 14.1443C35.4687 14.0884 35.4677 14.0326 35.4616 13.9757ZM14.4026 23.4688L15.5929 16.3248C15.6122 16.2152 15.6122 16.1014 15.5929 15.9917L14.3802 8.71375C22.2767 7.79664 27.9307 7.95609 30.1295 8.07797L29.5395 13.9767C29.5334 14.0336 29.5323 14.0884 29.5364 14.1453L30.157 23.4688H15.2344H14.4026ZM2.03125 20.4219C2.03125 19.8612 2.48625 19.4062 3.04688 19.4062H9.14062C9.70125 19.4062 10.1562 19.8612 10.1562 20.4219V25.5H2.03125V20.4219ZM51.7969 38.7031H13.2031C12.6425 38.7031 12.1875 38.2481 12.1875 37.6875V28.9673L15.6548 25.5H31.2437H32.5H33.7563H49.3452L52.8125 28.9673V32.6094H15.2344C14.6727 32.6094 14.2188 33.0634 14.2188 33.625C14.2188 34.1866 14.6727 34.6406 15.2344 34.6406H52.8125V37.6875C52.8125 38.2481 52.3575 38.7031 51.7969 38.7031ZM62.9688 25.5H54.8438V20.4219C54.8438 19.8612 55.2988 19.4062 55.8594 19.4062H61.9531C62.5137 19.4062 62.9688 19.8612 62.9688 20.4219V25.5Z"
                                                                    fill="currentcolor"
                                                                />
                                                                <path
                                                                    d="M16.25 29.5625H27.4219C27.9835 29.5625 28.4375 29.1085 28.4375 28.5469C28.4375 27.9852 27.9835 27.5312 27.4219 27.5312H16.25C15.6884 27.5312 15.2344 27.9852 15.2344 28.5469C15.2344 29.1085 15.6884 29.5625 16.25 29.5625Z"
                                                                    fill="currentcolor"
                                                                />
                                                                <path
                                                                    d="M35.5469 29.5625H40.625C41.1866 29.5625 41.6406 29.1085 41.6406 28.5469C41.6406 27.9852 41.1866 27.5312 40.625 27.5312H35.5469C34.9852 27.5312 34.5312 27.9852 34.5312 28.5469C34.5312 29.1085 34.9852 29.5625 35.5469 29.5625Z"
                                                                    fill="currentcolor"
                                                                />
                                                                <path
                                                                    d="M45.7031 29.5625H47.7344C48.296 29.5625 48.75 29.1085 48.75 28.5469C48.75 27.9852 48.296 27.5312 47.7344 27.5312H45.7031C45.1415 27.5312 44.6875 27.9852 44.6875 28.5469C44.6875 29.1085 45.1415 29.5625 45.7031 29.5625Z"
                                                                    fill="currentcolor"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <h4 className="tp-service-2-title">
                                                        <a>Dream Space Interiors</a>
                                                    </h4>
                                                </div>
                                                <div className="tp-service-2-content">
                                                    <div className="tp-service-2-text pb-40">
                                                        <p>
                                                            It is a long established fact that a reader will be
                                                            distracted by the design readable content of a page
                                                            layout long
                                                        </p>
                                                    </div>
                                                    <div className="tp-service-2-button">
                                                        <a
                                                            className="tp-btn-border-lg grey-border"
                                                            onClick={() => { navigate('/service'); reloadPage(); }}
                                                        >
                                                            <span>Read More</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* service area end */}
                            {/* about area start */}
                            <div className="tp-about-5-area tp-about-5-style p-relative pb-150">
                                <div className="tp-about-5-big-text d-none d-xl-block">
                                    <h6>About Us</h6>
                                </div>
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="tp-about-content">
                                                <div className="tp-about-title-box mb-20">
                                                    <span className="tp-section-subtitle tp-split-text tp-split-in-right">
                                                        About Us
                                                    </span>
                                                    <h3 className="tp-section-title tp-split-text tp-split-in-right">
                                                        Where Imagination Meets Interiors
                                                    </h3>
                                                </div>
                                                <div className="tp-about-text mb-25">
                                                    <p>
                                                        Welcome to SCY Ramp Architects and Interior Designers, founded by Shubham and Zeeshan.
                                                        Our journey began with a shared passion for innovative design and a vision to create spaces that inspire and enrich lives.
                                                        We believe in harmonizing form and function to craft experiences that resonate with the human spirit.
                                                        Collaboration is at the heart of everything we do, ensuring that each project exceeds expectations.
                                                        As we look ahead, we remain committed to innovation, integrity, and excellence, shaping the architectural landscape one project at a time.
                                                        Join us on this exciting journey of design innovation and transformation
                                                    </p>
                                                </div>
                                                <div className="tp-about-list-wrap mb-35">
                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="tp-about-list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="fa-sharp fa-solid fa-circle-check" />
                                                                        Urban Elegance Interiors
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa-sharp fa-solid fa-circle-check" />
                                                                        Home stead Harmony
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="tp-about-list">
                                                                <ul>
                                                                    <li>
                                                                        <i className="fa-sharp fa-solid fa-circle-check" />
                                                                        Serenity Space Design Co
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa-sharp fa-solid fa-circle-check" />
                                                                        Your Startup design
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a className="tp-btn-black" onClick={() => { navigate('/about'); reloadPage(); }} >
                                                    <span>Read More</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="tp-about-5-thumb-box p-relative">
                                                <div className="tp-about-5-thumb p-relative">
                                                    <div className="tp-hover-distort-wrapper">
                                                        <div className="canvas" />
                                                        <div
                                                            className="tp-hover-distort"
                                                            data-displacementimage="assets/img/webgl/10.jpg"
                                                        >
                                                            <img
                                                                className="tp-hover-distort-img front"
                                                                src="assets/img/about/thumb-5-1.jpg"
                                                                alt=""
                                                            />
                                                            <img
                                                                className="tp-hover-distort-img back"
                                                                src="assets/img/about/thumb-5-1.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="tp-about-5-shape-1">
                                                        <img src="assets/img/about/shape-5-1.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="tp-about-5-thumb-sm">
                                                    <div className="tp-hover-distort-wrapper">
                                                        <div className="canvas" />
                                                        <div
                                                            className="tp-hover-distort"
                                                            data-displacementimage="assets/img/webgl/10.jpg"
                                                        >
                                                            <img
                                                                className="tp-hover-distort-img front"
                                                                src="assets/img/about/thumb-5-2.jpg"
                                                                alt=""
                                                            />
                                                            <img
                                                                className="tp-hover-distort-img back"
                                                                src="assets/img/about/thumb-5-2.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* about area end */}
                            {/* progress area start */}
                            <div className="tp-progress-area black-bg pb-100 pt-140">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="tp-progress-title text-center mb-60">
                                                <span className="tp-section-subtitle tp-split-text tp-split-in-right">
                                                    Recent Projects
                                                </span>
                                                <h3 className="tp-section-title text-white tp-split-text tp-split-in-right">
                                                    Create a Serene Oasis in Your <br /> Living Space
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="tp-progress-bar-wrap">
                                                <div className="tp-progress-bar-item">
                                                    <label>kitchen</label>
                                                    <div className="tp-progress-bar">
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar wow slideInLeft"
                                                                data-wow-delay=".1s"
                                                                data-wow-duration="2s"
                                                                role="progressbar"
                                                                data-width="75%"
                                                                aria-valuenow={75}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                style={{
                                                                    width: "75%",
                                                                    visibility: "visible",
                                                                    animationDuration: "2s",
                                                                    animationDelay: "0.1s",
                                                                    animationName: "slideInLeft"
                                                                }}
                                                            >
                                                                <span>75%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tp-progress-bar-item">
                                                    <label>Room</label>
                                                    <div className="tp-progress-bar">
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar wow slideInLeft"
                                                                data-wow-delay=".1s"
                                                                data-wow-duration="2s"
                                                                role="progressbar"
                                                                data-width="80%"
                                                                aria-valuenow={100}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                style={{
                                                                    width: "80%",
                                                                    visibility: "visible",
                                                                    animationDuration: "2s",
                                                                    animationDelay: "0.1s",
                                                                    animationName: "slideInLeft"
                                                                }}
                                                            >
                                                                <span>80%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tp-progress-bar-item">
                                                    <label>Duplex House</label>
                                                    <div className="tp-progress-bar">
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar wow slideInLeft"
                                                                data-wow-delay=".1s"
                                                                data-wow-duration="2s"
                                                                role="progressbar"
                                                                data-width="40%"
                                                                aria-valuenow={100}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                style={{
                                                                    width: "40%",
                                                                    visibility: "visible",
                                                                    animationDuration: "2s",
                                                                    animationDelay: "0.1s",
                                                                    animationName: "slideInLeft"
                                                                }}
                                                            >
                                                                <span>40%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="tp-progress-bar-wrap">
                                                <div className="tp-progress-bar-item">
                                                    <label>Architecture</label>
                                                    <div className="tp-progress-bar">
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar wow slideInLeft"
                                                                data-wow-delay=".1s"
                                                                data-wow-duration="2s"
                                                                role="progressbar"
                                                                data-width="90%"
                                                                aria-valuenow={100}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                style={{
                                                                    width: "90%",
                                                                    visibility: "visible",
                                                                    animationDuration: "2s",
                                                                    animationDelay: "0.1s",
                                                                    animationName: "slideInLeft"
                                                                }}
                                                            >
                                                                <span>90%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tp-progress-bar-item">
                                                    <label>Drawing room</label>
                                                    <div className="tp-progress-bar">
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar wow slideInLeft"
                                                                data-wow-delay=".1s"
                                                                data-wow-duration="2s"
                                                                role="progressbar"
                                                                data-width="70%"
                                                                aria-valuenow={100}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                style={{
                                                                    width: "70%",
                                                                    visibility: "visible",
                                                                    animationDuration: "2s",
                                                                    animationDelay: "0.1s",
                                                                    animationName: "slideInLeft"
                                                                }}
                                                            >
                                                                <span>70%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tp-progress-bar-item">
                                                    <label>Bathroom</label>
                                                    <div className="tp-progress-bar">
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar wow slideInLeft"
                                                                data-wow-delay=".1s"
                                                                data-wow-duration="2s"
                                                                role="progressbar"
                                                                data-width="85%"
                                                                aria-valuenow={70}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                style={{
                                                                    width: "85%",
                                                                    visibility: "visible",
                                                                    animationDuration: "2s",
                                                                    animationDelay: "0.1s",
                                                                    animationName: "slideInLeft"
                                                                }}
                                                            >
                                                                <span>85%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* progress area end */}
                            {/* blog area start */}
                            <div className="tp-blog-area tp-blog-style-2 tp-blog-style-3 p-relative pb-150">
                                <div className="tp-blog-big-text-3 d-none d-xxl-block">
                                    <h6>Projects</h6>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="tp-blog-2-title-box text-center mb-60">
                                                <span className="tp-section-subtitle tp-split-text tp-split-in-right">
                                                    Recent Projects
                                                </span>
                                                <h3 className="tp-section-title tp-split-text tp-split-in-right">
                                                    {" "}
                                                    Elevate Your Home's Aesthetics <br /> with Interior Flair
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="tp-blog-wrapper">
                                                <div className="swiper-container tp-blog-3-ative">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="tp-blog-item d-flex align-items-center">
                                                                <div className="tp-blog-thumb">
                                                                    <a>
                                                                        <img src="assets/img/blog/blog4-1.jpg" alt="" />
                                                                    </a>
                                                                </div>
                                                                <div className="tp-blog-content">
                                                                    <div className="tp-blog-meta mb-10">
                                                                        <span>
                                                                            <svg
                                                                                width={11}
                                                                                height={13}
                                                                                viewBox="0 0 11 13"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z"
                                                                                    fill="currentcolor"
                                                                                />
                                                                            </svg>
                                                                            October 19, 2022
                                                                        </span>
                                                                        <span>
                                                                            <svg
                                                                                width={17}
                                                                                height={13}
                                                                                viewBox="0 0 17 13"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M5.875 0.5C8.54688 0.5 10.75 2.35156 10.75 4.625C10.75 6.92188 8.54688 8.75 5.875 8.75C5.42969 8.75 5.00781 8.70312 4.58594 8.60938C3.88281 9.05469 2.85156 9.5 1.5625 9.5C1.32812 9.5 1.11719 9.38281 1.04688 9.14844C0.953125 8.9375 0.976562 8.70312 1.14062 8.51562C1.16406 8.51562 1.67969 7.95312 2.05469 7.20312C1.39844 6.5 1 5.60938 1 4.625C1 2.35156 3.17969 0.5 5.875 0.5ZM4.84375 7.50781C5.19531 7.60156 5.52344 7.625 5.875 7.625C7.9375 7.625 9.625 6.28906 9.625 4.625C9.625 2.98438 7.9375 1.625 5.875 1.625C3.78906 1.625 2.125 2.98438 2.125 4.625C2.125 5.46875 2.52344 6.07812 2.875 6.42969L3.4375 7.01562L3.0625 7.74219C2.96875 7.88281 2.875 8.04688 2.78125 8.21094C3.20312 8.09375 3.60156 7.90625 4 7.64844L4.39844 7.41406L4.84375 7.50781ZM11.3359 3.52344C13.9375 3.61719 16 5.42188 16 7.625C16 8.60938 15.5781 9.5 14.9219 10.2031C15.2969 10.9531 15.8125 11.5156 15.8359 11.5156C16 11.7031 16.0234 11.9375 15.9297 12.1484C15.8594 12.3828 15.6484 12.5 15.4141 12.5C14.125 12.5 13.0938 12.0547 12.3906 11.6094C11.9688 11.7031 11.5469 11.75 11.125 11.75C9.20312 11.75 7.53906 10.8125 6.74219 9.45312C7.14062 9.40625 7.53906 9.3125 7.89062 9.17188C8.54688 10.0625 9.74219 10.625 11.125 10.625C11.4531 10.625 11.7812 10.6016 12.1328 10.5078L12.5781 10.4141L12.9766 10.6484C13.375 10.9062 13.7734 11.0938 14.1953 11.2109C14.1016 11.0469 14.0078 10.8828 13.9141 10.7422L13.5391 10.0156L14.1016 9.42969C14.4531 9.07812 14.875 8.46875 14.875 7.625C14.875 6.07812 13.375 4.8125 11.4766 4.64844L11.5 4.625C11.5 4.25 11.4297 3.875 11.3359 3.52344Z"
                                                                                    fill="currentcolor"
                                                                                />
                                                                            </svg>
                                                                            Comments (05)
                                                                        </span>
                                                                    </div>
                                                                    <h4 className="tp-blog-title mb-15">
                                                                        <a>
                                                                            Imagination with Stunning Interior Possibilities
                                                                        </a>
                                                                    </h4>
                                                                    <div className="tp-blog-link">
                                                                        <a className="tp-link" onClick={() => { navigate('/project'); reloadPage(); }}>
                                                                            Read More
                                                                            <span className="bottom-line" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="tp-blog-item d-flex align-items-center">
                                                                <div className="tp-blog-thumb">
                                                                    <a>
                                                                        <img src="assets/img/blog/blog5-2.jpg" alt="" />
                                                                    </a>
                                                                </div>
                                                                <div className="tp-blog-content">
                                                                    <div className="tp-blog-meta mb-10">
                                                                        <span>
                                                                            <svg
                                                                                width={11}
                                                                                height={13}
                                                                                viewBox="0 0 11 13"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z"
                                                                                    fill="currentcolor"
                                                                                />
                                                                            </svg>
                                                                            October 19, 2022
                                                                        </span>
                                                                        <span>
                                                                            <svg
                                                                                width={17}
                                                                                height={13}
                                                                                viewBox="0 0 17 13"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M5.875 0.5C8.54688 0.5 10.75 2.35156 10.75 4.625C10.75 6.92188 8.54688 8.75 5.875 8.75C5.42969 8.75 5.00781 8.70312 4.58594 8.60938C3.88281 9.05469 2.85156 9.5 1.5625 9.5C1.32812 9.5 1.11719 9.38281 1.04688 9.14844C0.953125 8.9375 0.976562 8.70312 1.14062 8.51562C1.16406 8.51562 1.67969 7.95312 2.05469 7.20312C1.39844 6.5 1 5.60938 1 4.625C1 2.35156 3.17969 0.5 5.875 0.5ZM4.84375 7.50781C5.19531 7.60156 5.52344 7.625 5.875 7.625C7.9375 7.625 9.625 6.28906 9.625 4.625C9.625 2.98438 7.9375 1.625 5.875 1.625C3.78906 1.625 2.125 2.98438 2.125 4.625C2.125 5.46875 2.52344 6.07812 2.875 6.42969L3.4375 7.01562L3.0625 7.74219C2.96875 7.88281 2.875 8.04688 2.78125 8.21094C3.20312 8.09375 3.60156 7.90625 4 7.64844L4.39844 7.41406L4.84375 7.50781ZM11.3359 3.52344C13.9375 3.61719 16 5.42188 16 7.625C16 8.60938 15.5781 9.5 14.9219 10.2031C15.2969 10.9531 15.8125 11.5156 15.8359 11.5156C16 11.7031 16.0234 11.9375 15.9297 12.1484C15.8594 12.3828 15.6484 12.5 15.4141 12.5C14.125 12.5 13.0938 12.0547 12.3906 11.6094C11.9688 11.7031 11.5469 11.75 11.125 11.75C9.20312 11.75 7.53906 10.8125 6.74219 9.45312C7.14062 9.40625 7.53906 9.3125 7.89062 9.17188C8.54688 10.0625 9.74219 10.625 11.125 10.625C11.4531 10.625 11.7812 10.6016 12.1328 10.5078L12.5781 10.4141L12.9766 10.6484C13.375 10.9062 13.7734 11.0938 14.1953 11.2109C14.1016 11.0469 14.0078 10.8828 13.9141 10.7422L13.5391 10.0156L14.1016 9.42969C14.4531 9.07812 14.875 8.46875 14.875 7.625C14.875 6.07812 13.375 4.8125 11.4766 4.64844L11.5 4.625C11.5 4.25 11.4297 3.875 11.3359 3.52344Z"
                                                                                    fill="currentcolor"
                                                                                />
                                                                            </svg>
                                                                            Comments (05)
                                                                        </span>
                                                                    </div>
                                                                    <h4 className="tp-blog-title mb-15">
                                                                        <a>
                                                                            Living Space with Modern Interior Concepts
                                                                        </a>
                                                                    </h4>
                                                                    <div className="tp-blog-link">
                                                                        <a className="tp-link" onClick={() => { navigate('/project'); reloadPage(); }}>
                                                                            Read More
                                                                            <span className="bottom-line" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="tp-blog-item d-flex align-items-center">
                                                                <div className="tp-blog-thumb">
                                                                    <a>
                                                                        <img src="assets/img/blog/blog5-3.jpg" alt="" />
                                                                    </a>
                                                                </div>
                                                                <div className="tp-blog-content">
                                                                    <div className="tp-blog-meta mb-10">
                                                                        <span>
                                                                            <svg
                                                                                width={11}
                                                                                height={13}
                                                                                viewBox="0 0 11 13"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M3.5625 2H6.9375V1.0625C6.9375 0.757812 7.17188 0.5 7.5 0.5C7.80469 0.5 8.0625 0.757812 8.0625 1.0625V2H9C9.82031 2 10.5 2.67969 10.5 3.5V11C10.5 11.8438 9.82031 12.5 9 12.5H1.5C0.65625 12.5 0 11.8438 0 11V3.5C0 2.67969 0.65625 2 1.5 2H2.4375V1.0625C2.4375 0.757812 2.67188 0.5 3 0.5C3.30469 0.5 3.5625 0.757812 3.5625 1.0625V2ZM1.125 6.3125H3V5H1.125V6.3125ZM1.125 7.4375V8.9375H3V7.4375H1.125ZM4.125 7.4375V8.9375H6.375V7.4375H4.125ZM7.5 7.4375V8.9375H9.375V7.4375H7.5ZM9.375 5H7.5V6.3125H9.375V5ZM9.375 10.0625H7.5V11.375H9C9.1875 11.375 9.375 11.2109 9.375 11V10.0625ZM6.375 10.0625H4.125V11.375H6.375V10.0625ZM3 10.0625H1.125V11C1.125 11.2109 1.28906 11.375 1.5 11.375H3V10.0625ZM6.375 5H4.125V6.3125H6.375V5Z"
                                                                                    fill="currentcolor"
                                                                                />
                                                                            </svg>
                                                                            October 19, 2022
                                                                        </span>
                                                                        <span>
                                                                            <svg
                                                                                width={17}
                                                                                height={13}
                                                                                viewBox="0 0 17 13"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M5.875 0.5C8.54688 0.5 10.75 2.35156 10.75 4.625C10.75 6.92188 8.54688 8.75 5.875 8.75C5.42969 8.75 5.00781 8.70312 4.58594 8.60938C3.88281 9.05469 2.85156 9.5 1.5625 9.5C1.32812 9.5 1.11719 9.38281 1.04688 9.14844C0.953125 8.9375 0.976562 8.70312 1.14062 8.51562C1.16406 8.51562 1.67969 7.95312 2.05469 7.20312C1.39844 6.5 1 5.60938 1 4.625C1 2.35156 3.17969 0.5 5.875 0.5ZM4.84375 7.50781C5.19531 7.60156 5.52344 7.625 5.875 7.625C7.9375 7.625 9.625 6.28906 9.625 4.625C9.625 2.98438 7.9375 1.625 5.875 1.625C3.78906 1.625 2.125 2.98438 2.125 4.625C2.125 5.46875 2.52344 6.07812 2.875 6.42969L3.4375 7.01562L3.0625 7.74219C2.96875 7.88281 2.875 8.04688 2.78125 8.21094C3.20312 8.09375 3.60156 7.90625 4 7.64844L4.39844 7.41406L4.84375 7.50781ZM11.3359 3.52344C13.9375 3.61719 16 5.42188 16 7.625C16 8.60938 15.5781 9.5 14.9219 10.2031C15.2969 10.9531 15.8125 11.5156 15.8359 11.5156C16 11.7031 16.0234 11.9375 15.9297 12.1484C15.8594 12.3828 15.6484 12.5 15.4141 12.5C14.125 12.5 13.0938 12.0547 12.3906 11.6094C11.9688 11.7031 11.5469 11.75 11.125 11.75C9.20312 11.75 7.53906 10.8125 6.74219 9.45312C7.14062 9.40625 7.53906 9.3125 7.89062 9.17188C8.54688 10.0625 9.74219 10.625 11.125 10.625C11.4531 10.625 11.7812 10.6016 12.1328 10.5078L12.5781 10.4141L12.9766 10.6484C13.375 10.9062 13.7734 11.0938 14.1953 11.2109C14.1016 11.0469 14.0078 10.8828 13.9141 10.7422L13.5391 10.0156L14.1016 9.42969C14.4531 9.07812 14.875 8.46875 14.875 7.625C14.875 6.07812 13.375 4.8125 11.4766 4.64844L11.5 4.625C11.5 4.25 11.4297 3.875 11.3359 3.52344Z"
                                                                                    fill="currentcolor"
                                                                                />
                                                                            </svg>
                                                                            Comments (05)
                                                                        </span>
                                                                    </div>
                                                                    <h4 className="tp-blog-title mb-15">
                                                                        <a>
                                                                            Dream Space with Skilled Interior Experts
                                                                        </a>
                                                                    </h4>
                                                                    <div className="tp-blog-link">
                                                                        <a className="tp-link" onClick={() => { navigate('/project'); reloadPage(); }}>
                                                                            Read More
                                                                            <span className="bottom-line" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        {/* blog area end */}
                        <Footer />
                    </div>
                </div>
            </>

        </div>
    )
}

export default Home
