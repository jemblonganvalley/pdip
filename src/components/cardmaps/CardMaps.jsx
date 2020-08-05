import React from 'react'
import './CardMaps.scss'

const CardMaps = ()=> {
    return (
        <div className="cardMap">
            <div className="pageBerita">
                <div className="wrapperBerita">
                    <div className="col-lg-8 berita carousels">
                    </div>
                    <div className="col-lg-4 berita ikutiBerita">
                        <div className="wrapper">
                            <h5>Ikuti Berita Terbaru</h5>
                            <small>Get in touch with fresh news from our company and share it</small>
                            <form className="form-control" >
                                <i class="fa fa-envelope-o"></i>
                                <input type="email" placeholder="masukan email anda disini" />
                            </form>
                            <button>
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Subscribe</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMaps