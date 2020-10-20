import React from 'react'
import './CarouselTataCara.scss'
import ilustrator from '../../img/illustrator2.png'

const CarouselTataCara = ()=>{
    return(
        <>
        {/* SLIDER TATA CARA */}
        <div className="sliderTataCara">
        <div id="carouselTataCara" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active" style={{
                backgroundImage: 'none'
            }}>
                <img src={ilustrator} className="imageTC"/>
                <p className="pCarousel">Pemohon informasi publik mengisi formulir permohonan informasi dengan menyertakan
                    identitas yang masih berlaku (KTP, SIM, Paspor). Bagi lembaga publik pemohon informasi menyertakan Akta
                    Notaris/SK Pembentukan.</p>
            </div>
            <div className="carousel-item" style={{
                backgroundImage: `none`
            }}>
                <img src={ilustrator} className="imageTC"/>
                <p className="pCarousel">Pemohon informasi publik mengisi formulir permohonan informasi dengan menyertakan</p>
            </div>
            <div className="carousel-item" style={{
                backgroundImage: `none`
            }}>
                <img src={ilustrator} className="imageTC"/>
                <p className="pCarousel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, aut officia laudantium quaerat pariatur eius maiores maxime nam nobis placeat.</p>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselTataCara" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselTataCara" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
            </a>
        </div>
        </div>
        {/* END SLIDER TATA CARA */}

        </>
    )
}

export default CarouselTataCara