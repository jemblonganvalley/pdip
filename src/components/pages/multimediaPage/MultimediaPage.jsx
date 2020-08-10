import React from 'react'
import './MultimediaPage.scss'
import SL from '../../../img/newspaper.png'
import VD from '../../../img/fake-news.png'
import VI from '../../../img/camera.png'
import SP from '../../../img/notebook.png'

import multimediaSatu from '../../../img/multimedia1.png'
import multimediaDua from '../../../img/multimedia2.png'
import multimediaTiga from '../../../img/multimedia3.png'
import multimediaEmpat from '../../../img/multimedia4.png'

import Cards from '../../cards/MainCards'
import megawati1 from '../../../img/megawati1.jpg'
import megawati2 from '../../../img/megawati2.jpg'
import megawati3 from '../../../img/megawati3.jpg'
import perempuan from '../../../img/ig-perempuan.png'
import megawati12 from '../../../img/megawati12.png'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainButton from '../../buttons/MainButton'
import MainDivider from '../../divider/MainDivider'
import CardInformasi from '../../cardInformasi/CardInformasi'

const MultimediaPage = ()=> {
    return (
        <div className="wrapperMultimedia">
            <div className="headerMedia">
                <div className="textBannerMedia">
                    <h2>Lorem ipsum dolor<br/>sit amet consectetur<br/>adipisicing elit.</h2>
                </div>
            </div>
            <div className="linkedMedia">
                <BreadCrumbs link1="Home"
                                to1="/"
                                page2="Multimedia" />
            </div>
            <div className="pidatoKU">
                <div className="col-lg-9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4Y9vU1dCk78" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-lg-3">
                    <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                    <span>Megawati Soekarnoputri,<br/>Ketua Umum PDI Perjuangan</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ullam dicta architecto hic expedita, harum tempore quae sunt obcaecati aperiam placeat praesentium rem voluptatibus quibusdam qui nesciunt non illo! Magni.</p>
                    <div className="socialMedia">
                        <small>SHARE : </small>
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-whatsapp" ></i>
                    </div>
                </div>
            </div>
            
            <CardInformasi image={multimediaSatu}
                            image2={multimediaDua}
                            image3={multimediaTiga}
                            image4={multimediaEmpat}
                            text="siaran langsung"
                            text2="video dokumentasi"
                            text3="video teaser"
                            text4="wawancara" />

            <div className="panggung">
                <div className="textPanggung">
                    <h1 className="panggungH1">Siaran Langsung Pembukaan Rakernas I<br/>PDI Perjuangan</h1>
                    <MainButton name="kunjungi" />
                </div>
            </div>

            <div className="cardMediaDua">
            <Cards imageCard={perempuan}
                    textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                    TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                    borderRadius="10px"  />
            <Cards imageCard={megawati12}
                    textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                    TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                    borderRadius="10px"
                    icons="fa fa-play"
                    classIcon="VBMusic"  />
            <Cards imageCard={perempuan}
                    textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                    TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                    borderRadius="10px"  />
            </div>

            

            <div className="videoBaruPage">
                    <MainDivider text="Video Terbaru" />
                <div className="cardVideoBaru">
                <Cards imageCard={megawati1}
                                textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                                TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                                borderRadius="10px"
                                icons="fa fa-play"
                                classIcon="VBMusic"
                                href="/videomedia"  />
                <Cards imageCard={megawati2}
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                        TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                        borderRadius="10px"
                        icons="fa fa-play"
                        classIcon="VBMusic"
                        href="/videomedia"  />
                <Cards imageCard={megawati3}
                        textSmall="Admin PDI Perjuangan | 1 Januari 2019"
                        TextH5="Lorem ipsum dolor, sit amet consectetur adipisicing."
                        borderRadius="10px"
                        icons="fa fa-play"
                        classIcon="VBMusic"
                        href="/videomedia" />
                </div>
            </div>
        </div>
    )
}

export default MultimediaPage