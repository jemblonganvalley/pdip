import React from 'react'
import './CardMaps.scss'
import MainButton from '../buttons/MainButton'

const CardMaps = ()=> {
    return (
        <div className="cardMap">
            <div className="pageBerita">
                <div className="mapsBerita">
                    <div className="col-lg-8 berita carousels">
                        <div className="backImage"></div>
                    </div>
                    <div className="col-lg-4 berita ikutiMaps">
                        <div className="wrapper">
                            <h5>Ikuti Berita Terbaru</h5>
                            <small>Get in touch with fresh news from our company and share it</small>
                            <form className="form-control" >
                                <i className="fa fa-envelope-o"></i>
                                <input type="email" placeholder="masukan email anda disini" />
                            </form>
                            <MainButton name="Subscribe"
                                borderButton="1px solid #2d3436"
                                margin="1rem 0"
                                btnIcons="fa fa-check"
                                mr=".5rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMaps