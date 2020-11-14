import React from 'react'
import Logo from '../../img/pdiperjuangan02.svg'
import './MainFooter.scss'
import Subscribe from '../subscribe/Subscribe'

const MainFooter = ()=> {
    return (
        <div className="wrapperFooter">
            <div className="wrapperContent">
                <span  className='wrapperSituation'>
                <img src={Logo} alt="" width="100" height="100" className="logo-mainFooter"
                    style={{
                        objectFit: 'fill'
                    }}
                />

                <div className="textFooter">
                    <small className="heads">situation room pdi perjuangan</small>
                    <small className="body">Situs pdiperjuangan.id adalah situs resmi PDI Perjuangan. Situs ini dikelola oleh Pusat Analisa dan Pengendali Situasi (Situation Room) yang dikepalai oleh Prananda Prabowo.</small>
                    <small className="foot">Untuk dukungan dan partisipasi, kirimkan naskah atau artikel beserta foto kegiatan anda ke email : redaksi@pdiperjuangan.id</small>
                </div>
                </span>
                  <address className="contact " >

                        <a className="emailFooter row"
                            href="mailto:redaksi@pdiperjuangan.id"
                            target="_blank"
                        >
                            <div className="col">
                                <i className="fa fa-envelope-o"></i> 
                                <small className='ml-2'>
                                    <b>
                                        redaksi@pdiperjuangan.id
                                    </b>
                                </small>
                            </div>
                        </a>

                         <a className="emailFooter row"
                            href="tel:0213909925"
                            target="_blank"
                         >
                            <div className="col">
                                <i className="fa fa-phone"></i> 
                                <small className='ml-2'>
                                    <b>
                                        021-3909925
                                    </b>
                                </small>
                            </div>
                        </a>

                        <a className="emailFooter row" 
                            href="https://goo.gl/maps/2dD2qXuAUH4aS4hY7"
                            target="_blank"
                        >
                            <div className="col">
                                <i className="fa fa-map-marker"></i> 
                                <small className='ml-2'>
                                    <b>
                                        Jl. Diponegoro No. 58 Menteng Jakarta Pusat 10310
                                    </b>
                                </small>
                            </div>
                        </a>

                        
                </address>
                <span style={{flex : '1',}}></span>
                    <Subscribe />
            </div>
        </div>
    )
}

export default MainFooter