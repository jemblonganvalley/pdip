import React from 'react'
import './MainSlider.scss'
import arrowKanan from '../../img/arrowkanan.png'
import arrowKiri from '../../img/arrowkiri.png'
import arrowButton from '../../img/form.png'
import arrowsLeft from '../../img/arrowsLeft.png'
import arrows from '../../img/arrows.png'


const MainSlider = ({headline, headline2})=> {

    let sliders = [
        {
            id : 1,
            headline : "Solid bergerak untuk Indonesia raya",
            desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime soluta aut nobis tempore earum velit, fugit nostrum ratione modi praesentium. Praesentium tempora a dicta fugiat numquam quidem consequuntur ad sint."
        },
        {
            id : 2,
            headline : "Solid bergerak untuk Indonesia raya",
            desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime soluta aut nobis tempore earum velit, fugit nostrum ratione modi praesentium. Praesentium tempora a dicta fugiat numquam quidem consequuntur ad sint."
        }
    ]
    

    return (
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel" data-interval="0">

                
                <div className="carousel-indicators">
                        <div data-target="#carouselExampleIndicators" data-slide-to={0} className="active indikator" ><small className="indicatorText">
                        01</small></div>
                        <div data-target="#carouselExampleIndicators" data-slide-to={1} className="indikator"><small className="indicatorText">
                        02</small></div>
                </div>
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row image1 images">
                            <div className="col col-lg-6 mr-auto text1">
                                    <h1>{headline}</h1>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime soluta aut nobis tempore earum velit, fugit nostrum ratione modi praesentium. Praesentium tempora a dicta fugiat numquam quidem consequuntur ad sint.</p>
                                    
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row image2 images">
                            <div className="col col-lg-6 mr-auto text1">
                                <h1>{headline2}</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non suscipit exercitationem enim nesciunt, esse, hic accusantium in blanditiis repellat at aperiam magni ab? Ullam sequi possimus mollitia, maiores assumenda facilis!</p>
                            </div>
                        </div>
                    </div>
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