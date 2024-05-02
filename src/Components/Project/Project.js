import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { useNavigate } from 'react-router-dom';
import Topbutton from '../Topbutton/Topbutton';


function Project() {

    const navigate = useNavigate();

    const reloadPage = () => {
        window.location.reload(0,0);
    };

    return (
        <div>
            <>
                {/* back to top start */}
                <Topbutton/>
                {/* back to top end */}
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
                                                            <a onClick={() => { navigate('/projectdetails'); reloadPage(); }}>Home</a>
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
                                    </div>
                                    <div className="row grid gx-35">
                                        <div className="col-lg-4 col-md-6 grid-item cat5 cat3 cat2">
                                            <div className="tp-project-4-item p-relative">
                                                <div className="tp-project-4-thumb">
                                                    <img src="assets/img/project/project-4-1.jpg" alt="" />
                                                </div>
                                                <div className="tp-project-4-content">
                                                    <h6 className="tp-project-4-title">
                                                        <a onClick={() => { navigate('/projectdetails'); reloadPage(); }}>New York Gallery</a>
                                                    </h6>
                                                    <p>orem npsum dolor sit conse cteturs adipiscing elit</p>
                                                    <a
                                                        className="tp-btn-border-lg white-border"
                                                        onClick={() => { navigate('/projectdetails'); reloadPage(); }}
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
                                                        <a onClick={() => { navigate('/projectdetails'); reloadPage(); }}>Las vegas Gallery</a>
                                                    </h6>
                                                    <p>orem npsum dolor sit conse cteturs adipiscing elit</p>
                                                    <a
                                                        className="tp-btn-border-lg white-border"
                                                        onClick={() => { navigate('/projectdetails'); reloadPage(); }}
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
                                                        <a onClick={() => { navigate('/projectdetails'); reloadPage(); }}>St jones Gallery</a>
                                                    </h6>
                                                    <p>orem npsum dolor sit conse cteturs adipiscing elit</p>
                                                    <a
                                                        className="tp-btn-border-lg white-border"
                                                        onClick={() => { navigate('/projectdetails'); reloadPage(); }}
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
                                                        <a onClick={() => { navigate('/projectdetails'); reloadPage(); }}>California Gallery</a>
                                                    </h6>
                                                    <p>orem npsum dolor sit conse cteturs adipiscing elit</p>
                                                    <a
                                                        className="tp-btn-border-lg white-border"
                                                        onClick={() => { navigate('/projectdetails'); reloadPage(); }}
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
                                                        <a onClick={() => { navigate('/projectdetails'); reloadPage(); }}>Newyork golf club house</a>
                                                    </h6>
                                                    <p>orem npsum dolor sit conse cteturs adipiscing elit</p>
                                                    <a
                                                        className="tp-btn-border-lg white-border"
                                                        onClick={() => { navigate('/projectdetails'); reloadPage(); }}
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
                                                        <a onClick={() => { navigate('/projectdetails'); reloadPage(); }}>Newyork golf club house</a>
                                                    </h6>
                                                    <p>orem npsum dolor sit conse cteturs adipiscing elit</p>
                                                    <a
                                                        className="tp-btn-border-lg white-border"
                                                        onClick={() => { navigate('/projectdetails'); reloadPage(); }}
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
                        </main>
                       <Footer/>
                    </div>
                </div>
            </>

        </div>
    )
}

export default Project
