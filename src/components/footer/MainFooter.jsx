import React from 'react'
import Logo from '../../img/logo_footer.png'
import './MainFooter.scss'
import Subscribe from '../subscribe/Subscribe'

const MainFooter = ()=> {
    return (
        <div className="wrapperFooter">
            <div className="wrapperContent">
                <img src={Logo} alt="" width="180" height="180" />

                <div className="textFooter">
                    <span className="heads">situation room pdi perjuangan</span>
                    <span className="body">Situs pdiperjuangan.id adalah situs resmi PDI Perjuangan. Situs ini<br/>dikelola oleh Pusat Analisa dan Pengendali Situasi (Situation Room)<br/>yang dikepalai oleh Prananda Prabowo.</span>
                    <span className="foot">Untuk dukungan dan partisipasi, kirimkan naskah atau artikel beserta<br/>foto kegiatan anda ke email : redaksi@pdiperjuangan.id</span>
                </div>

                  <address className="contact col ">

                        <a className="emailFooter row"
                            href="mailto:redaksi@pdiperjuangan.id"
                            target="_blank"
                        >
                            <div className="col">
                                <i class="fa fa-envelope-o"></i> 
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
                                <i class="fa fa-phone"></i> 
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
                                <i class="fa fa-map-marker"></i> 
                                <small className='ml-2'>
                                    <b>
                                        Jl. Diponegoro No. 58 Menteng Jakarta Pusat 10310
                                    </b>
                                </small>
                            </div>
                        </a>

                        
                </address>

              

                <span className="subscribe" style={{
                    marginLeft : 'auto'
                }}>

                    <Subscribe />
                </span>
            </div>
        </div>
    )
}

export default MainFooter