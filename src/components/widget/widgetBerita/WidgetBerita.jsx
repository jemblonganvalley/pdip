import React, { useState } from 'react'
import './widgetBerita.scss'

const WidgetBerita = ({name, col}) => {

    let [berita, setBerita] = useState([
        {
            id : 1,
            judul : "Lorem ipsum dolor sit amet",
            image : 'megawati1.jpg'
        },
        {
            id : 2,
            judul : "Lorem ipsum dolor sit amet",
            image : 'megawati2.jpg'
        },
        {
            id : 3,
            judul : "Lorem ipsum dolor sit amet",
            image : 'megawati3.jpg'
        }
    ])

  return (
        <div className={`col col-lg-${col}`}>
        <div id={name} className="carousel slide" data-ride="carousel" >
        <div className="carousel-inner">

           {berita.map((e)=>{
               return(
                    <div className={e.id == 1 ? "carousel-item wbCarousel active" : "carousel-item wbCarousel"}>
                        <div className="d-block w-100" alt="..." style={{
                            height : '50vh',
                            backgroundImage : `url(https://picsum.photos/seed/${e.id}/600)`,
                            backgroundSize : 'cover',
                            backgroundPosition : 'center',
                            padding : '20px',
                            position : 'relative'
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
