import React, { useState, useEffect } from "react";
import "./MainSliderMobile.scss";

import playstore from "../../../img/playstore.svg";
import appstore from "../../../img/appstore.svg";
import { Link } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import parse from "html-react-parser";
import { Markup } from "interweave";

const MainSliderMobile = ({ value, cls }) => {
    let slider = value;

    const [direct, setDirect] = useState(false);

    const redir = (args) => {
        return (window.location.href = `${args}`);
    };

    useEffect(() => { }, [direct]);

    return (
        <>
            <div
                id="carouselExampleIndicators"
                className="carousel slide carousel-fade carousel-mainSlider-mobile"
                data-ride="carousel"
                style={{
                    overflow: "hidden",
                }}
            >

                <div className="carousel-inner">
                    {slider.map((e, i) => (
                        <div
                            className={
                                i === 1
                                    ? `carousel-item ${cls} active`
                                    : `carousel-item ${e.class}`
                            }
                            onClick={() => {
                                redir(`${e.link}`);
                            }}
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            <div className="rowMainSlider image1 images">

                                <div className="col wrapperBoxTablet">
                                    {/* Box Paragrap */}
                                    {/* <div className="box-paragrap-mainSlider">
                    <h3>{e.title}</h3>
                    <h5 className="title-maxWidth750">{e.title}</h5>
                    <p>{parse(`${e.paragraph}`)}</p>
                  </div> */}
                                    {/* END Box Paragrap */}

                                    {/* Box Image */}
                                    <div className="box-img-mainSlider-tablet">
                                        <img
                                            src={`http://atur.biar.pw/public${e.image}`}
                                            alt={e.title}
                                            className="img-home-mainSlider"
                                        />
                                        {/* END Box Image */}
                                    </div>

                                    {/* For Responsive Mobile */}
                                    <div className="box-paragrap-mobile-mainSlider">
                                        {/* Title For Mobile */}
                                        <div className="box-red-mobile-mainSlider">
                                            <strong style={{
                                                textTransform : 'uppercase'
                                            }}>{e.title}</strong>
                                            <small style={{
                                                color : '#fff',
                                                overflow : 'scroll'
                                            }}>{parse(`${e.paragraph}`)}</small>
                                            {/* Box Iklan For Mobile */}



                                        </div>
                                    </div>
                                    {/* END For Responsive Mobile */}
                                </div>
                            </div>

                        </div>
                    ))}

                    {/* For Desktop */}
                    {/* Info Iklan */}

                </div>

                <div className="mobileStore">
                    <p className="txt-info-iklan-mobile" style={{
                        textAlign: 'center'
                    }}>
                        Segera hadir aplikasi MEDIA PINTAR PERJUANGAN untuk mendapatkan pengetahuan, pengalaman dan informasi program serta kerja nyata PDI Perjuangan.
                      </p>
                    <div className="storeMobile">
                        <Link href="">
                            <img
                                src={playstore}
                                alt=""
                                className="logoStoreMobile logoStoreTablet1"
                            />
                        </Link>

                        <Link href="">
                            <img
                                src={appstore}
                                alt=""
                                className="logoStoreMobile logoStoreTablet2"
                            />
                        </Link>
                    </div>
                </div>

                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <div className="arrowsLeft">
                        {/* <img src={arrowsLeft} alt="" /> */}
                        <i className="fas fa-angle-left"></i>
                    </div>
                </a>

                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <div className="arrowsRight">
                        {/* <img src={arrows} alt="" /> */}
                        <i className="fas fa-angle-right"></i>
                    </div>
                </a>
            </div>
            {/* END Wrapper Carousel */}
        </>
    );
};

export default MainSliderMobile
