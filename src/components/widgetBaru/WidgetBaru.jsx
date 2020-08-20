import React, { useState } from 'react'
import megawati1 from '../../img/megawati1.jpg'
import megawati2 from '../../img/megawati2.jpg'
import megawati3 from '../../img/megawati3.jpg'
import './WidgetBaru.scss'

const WidgetBaru = ({carouselName, width})=> {

    let [widget, setWidget] = useState([
        {
            id : 1,
            headline : "lorem ipsum dolor sit amet",
            image : megawati1
        },
        {
            id : 2,
            headline : "lorem ipsum dolor sit amet",
            image : megawati2
        },
        {
            id : 3,
            headline : "lorem ipsum dolor sit amet",
            image : megawati3
        }
    ])

    return (
        <div className="wrapperBaru" style={{
            width : width
        }}>
            <div id={carouselName} className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {widget.map((e)=> {
                        return (
                            <div className={e.id == 1 ? "carousel-item active" : "carousel-item"}>

                                <div className="imageWidget" style={{
                                    backgroundImage : `url(${e.image})`,
                                    backgroundSize : 'cover',
                                    height : '50vh',
                                    width : '100%',
                                    backgroundPosition : 'center',
                                    display : 'flex',
                                    alignItems : 'center',
                                    position : 'relative',
                                    justifyContent : 'center'
                                }}>
                                    <h2 style={{
                                        position : 'absolute',
                                        bottom : '0',

                                    }}>halo</h2>

                                </div>
                            </div>
                        )
                    })}
                </div>
                <a className="carousel-control-prev" href={`#${carouselName}`} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={`#${carouselName}`} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
                </div>

        </div>
    )
}
export default WidgetBaru