import React, { useState } from 'react'
import './MainSlider.scss'
import arrowKanan from '../../img/arrowkanan.png'
import arrowKiri from '../../img/arrowkiri.png'
import arrowButton from '../../img/form.png'
import arrowsLeft from '../../img/arrowsLeft.png'
import arrows from '../../img/arrows.png'
import sliders from '../../img/slider.jpg'
import slider2 from '../../img/slider2.jpg'


const MainSlider = ()=> {

    let [slider, setSlider] = useState([
        {
            id : 1,
            headline : "Solid bergerak untuk Indonesia raya",
            paragrap : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime soluta aut nobis tempore earum velit, fugit nostrum ratione modi praesentium.",
            images : sliders
        },
        {
            id : 2,
            headline : "Solid bergerak untuk Indonesia raya",
            paragrap : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime soluta aut nobis tempore earum velit, fugit nostrum ratione modi praesentium.",
            images : slider2
        },
    ])
    

    return (
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel" data-interval="0">

                
                <div className="carousel-indicators">
                        <div data-target="#carouselExampleIndicators" data-slide-to={0} className="active indikator" ><small className="indicatorText">
                        01</small></div>
                        <div data-target="#carouselExampleIndicators" data-slide-to={1} className="indikator"><small className="indicatorText">
                        02</small></div>
                </div>
                
                <div className="carousel-inner">

                    {slider.map((e)=> {
                        return (
                            <div className={e.id == 1 ? "carousel-item active" : "carousel-item"}>
                                <div className="row image1 images" style={{
                                    background : `url(${e.images})`,
                                    backgroundSize : 'cover'
                                }}>
                                    <div className="col col-lg-6 mr-auto text1">
                                            <h1>{e.headline}</h1>
                                            <p>{e.paragrap}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>

                
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    
                    <div className="arrowsLeft">
                        <img src={arrowsLeft} alt=""/>
                    </div>
                </a>
                
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        
                        <div className="arrowsRight">
                            <img src={arrows} alt=""/>
                        </div>
                    
                </a>
            </div>
    )
}

export default MainSlider