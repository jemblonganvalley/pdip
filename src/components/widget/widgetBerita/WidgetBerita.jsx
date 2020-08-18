import React, { useState } from 'react'
import './widgetBerita.scss'
import megawati1 from '../../../img/megawati1.jpg'
import megawati2 from '../../../img/megawati2.jpg'
import megawati3 from '../../../img/megawati3.jpg'

const WidgetBerita = ({name, col, width, margin}) => {

    let [berita, setBerita] = useState([
        {
            id : 1,
            judul : "Lorem ipsum dolor sit amet",
            image : megawati1
        },
        {
            id : 2,
            judul : "Lorem ipsum dolor sit amet",
            image : megawati2
        },
        {
            id : 3,
            judul : "Lorem ipsum dolor sit amet",
            image : megawati3
        }
    ])

  return (
        <div className={`col col-lg-${col}`} style={{
            width : width,
            margin : margin
        }}>
        <div id={name} className="carousel slide" data-ride="carousel" >
        <div className="carousel-inner">

           {berita.map((e)=>{
               return(
                    <div className={e.id == 1 ? "carousel-item wbCarousel active" : "carousel-item wbCarousel"}>
                        <div className="d-block w-100 imageWidget" alt="..." style={{
                            backgroundSize : 'cover',
                            height : '40vh',
                            backgroundPosition : 'center',
                            background : `url(${e.image})`,
                            padding : '20px',
                            position : 'relative',
                            backgroundRepeat : 'no-repeat',
                            width : '100%'
                        }}>
                            <h3 style={{
                                position : 'absolute',
                                bottom : '0',
                                color : '#ffff'
                            }}>
                            
                            {e.judul}
                            </h3>
                        </div>
                    </div>
               )
           })}

         

         

        </div>
        <a className="carousel-control-prev" href={`#${name}`} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#${name}`} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
        </a>
        </div>
    </div>
  )
}

export default WidgetBerita
