import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderBrand.scss'
import Bspn from '../../img/bspn.png'
import BMI from '../../img/BMI.png'
import Baguna from '../../img/baguna.png'
import BKN from '../../img/bkn.png'
import Bamusi from '../../img/bamusi.png'
import repdem from '../../img/repdem.png'
import TMP from '../../img/TMP.png'
const SliderBrand = () => {

    let settings = {
        autoplay : true,
        infinite : true,
        slidesToShow : 3,
        slidesToScroll : 1,
        arrows : false,
        centerMode : true,
        responsive : [
            {
                breakpoint : 1024,
                settings : {
                    slidesToShow : 3,
                    slidesToScroll : 3,
                    infinite : true
                }
            },
            {
                breakpoint : 600,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll : 1,
                    initialSlide : 1
                }
            },
            {
                breakpoint : 500,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 2
                }
            },
            {
                breakpoint : 480,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 2
                }
            },
            {
                breakpoint : 300,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 2
                }
            },
            
        ]
    }

    return (
        <div className="container">
            <Slider {...settings}>

                <div className='containerImg' ><img src={Bspn} alt="" className='hover customSize' /></div>
                <div className='containerImg' ><img src={BMI} alt="" className='hover customSize' /></div>
                <div className='containerImg' ><img src={Baguna} alt="" className='hover customSize' /></div>
                <div className='containerImg' ><img src={BKN} alt="" className='hover customSize' /></div>
                <div className='containerImg' ><img src={Bamusi} alt="" className='hover customSize' /></div>
                <div className='containerImg' ><img src={repdem} alt="" className='hover customSize' /></div>
                <div className='containerImg' ><img src={TMP} alt="" className='hover customSize' /></div>
            </Slider>
        </div>
    )
}

export default SliderBrand