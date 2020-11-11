import React, { useState, useEffect } from "react";
import "./MainSliderTablet.scss";

import playstore from "../../../img/playstore.svg";
import appstore from "../../../img/appstore.svg";
import { Link } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import parse from "html-react-parser";
import { Markup } from "interweave";

const MainSliderTablet = ({ value, cls }) => {
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
                className="carousel slide carousel-fade carousel-mainSlider-tablet"
                data-ride="carousel"
                style={{
                    overflow: "hidden",
                }}
            >
                <div className="carousel-indicators">
                    {slider.map((e, i) => (
                        <>
                            <div
                                data-target="#carouselExampleIndicators"
                                data-slide-to={i}
                                className={i === 1 ? "active indikator" : "indikator"}
                            >
                                <small className="indicatorText">{i + 1}</small>
                            </div>
                        </>
                    ))}
                </div>

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
                                    <div className="box-paragrap-tablet-mainSlider">
                                        {/* Title For Mobile */}
                                        <div className="box-red-tablet-mainSlider">
                                            <strong>{e.title}</strong>
                                            <p style={{
                                                color : '#fff'
                                            }}>{parse(`${e.paragraph}`)}</p>
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

                <div className="tabletStore">
                    <p className="txt-info-iklan-tablet" style={{
                        textAlign: 'center'
                    }}>
                        Segera hadir aplikasi MEDIA PINTAR PERJUANGAN untuk
                        mendapatkan pengalaman dan informasi program serta kerja
                        nyata Partai PDI Perjuangan.
                      </p>
                    <div className="storeTablet">
                        <Link href="">
                            <img
                                src={playstore}
                                alt=""
                                className="logoStoreTablet logoStoreTablet1"
                            />
                        </Link>

                        <Link href="">
                            <img
                                src={appstore}
                                alt=""
                                className="logoStoreTablet logoStoreTablet2"
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

export default MainSliderTablet
