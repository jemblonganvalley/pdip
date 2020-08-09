import React from 'react'
import './Subscribe.scss'
import MainButton from '../buttons/MainButton'

const Subscribe =()=> {
    return (
        <div className="wrapperSubscribe">
            <div className="col-lg-4 berita ikutiBerita">
                <div className="wrapper">
                    <h5>Ikuti Berita Terbaru</h5>
                    <small>Get in touch with fresh news from our company and share it</small>
                    <form className="form-control" >
                        <i class="fa fa-envelope-o"></i>
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
    )
}

export default Subscribe