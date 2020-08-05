import React from 'react'
import './MainSlider.scss'

const MainSlider = ()=> {
    return (
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel" data-interval="0">
                    
                <div className="carousel-indicators">
                    
                    <small data-target="#carouselExampleIndicators" data-slide-to={0} className="active indikator" >01</small>
                    <small data-target="#carouselExampleIndicators" data-slide-to={1} className="indikator">02</small>
                </div>
                    <button data-target="#carouselExampleIndicators" data-slide="next" >
                            <i className="fa fa-arrow-right"></i>
                    </button>
                <div className="carousel-inner">
                
                    <div className="carousel-item active">
                        <div className="row image1">
                            <div className="col col-lg-6 mr-auto text1">
                                    <h1>Lorem ipsum dolor sit amet consectetur</h1>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime soluta aut nobis tempore earum velit, fugit nostrum ratione modi praesentium. Praesentium tempora a dicta fugiat numquam quidem consequuntur ad sint.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row image2">
                            <div className="col col-lg-6 mr-auto text2">
                                <h1>Lorem ipsum dolor sit amet consectetur</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non suscipit exercitationem enim nesciunt, esse, hic accusantium in blanditiis repellat at aperiam magni ab? Ullam sequi possimus mollitia, maiores assumenda facilis!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <div className="prev-text">
                        <span>PREV</span>
                        <i className="fa fa-long-arrow-left"></i>
                    </div>
                    
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <div className="prev-text">
                            <span>NEXT</span>
                        <i className="fa fa-long-arrow-right"></i>
                        </div>
                    
                </a>
            </div>
    )
}

export default MainSlider