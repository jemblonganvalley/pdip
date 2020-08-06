import React from 'react'
import './VideoMedia.scss'
import Cards from '../../cards/MainCards'
import megawati from '../../../img/megawati1.jpg'

const VideoMedia = ()=> {
    return (
        <div className="wrapperVideo">
            <div className="linkedVideo">
                <i class="fa fa-home"><span>Home /Multimedia/Video</span></i>
            </div>
            <div className="wrapperPlayVid">
                <div className="kolumVideo">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/V4pM1xY9ntY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="descVideo">
                    <div className="textTop">
                        <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                        <div className="countLove">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <small>0</small>
                        </div>
                    </div>
                    <h5 className="headline">Ketua Umum PDI Perjuangan, Hj. Megawati Soekarnoputri Meresmikan 20 Kantor Partai</h5>
                    <p className="descline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati, optio hic sequi similique tenetur ratione cumque molestias quaerat porro deleniti minus, laudantium deserunt, velit quia aliquid eveniet alias doloribus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati, optio hic sequi similique tenetur ratione cumque molestias quaerat porro deleniti minus, laudantium deserunt, velit quia aliquid eveniet alias doloribus!</p>
                    <div className="share">
                        <small className="marginShare">SHARE : </small>
                        <i class="fa fa-facebook marginShare" aria-hidden="true"></i>
                        <i class="fa fa-twitter marginShare" aria-hidden="true"></i>
                        <i class="fa fa-instagram marginShare" aria-hidden="true"></i>
                        <i class="fa fa-whatsapp marginShare" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="dividerVideo">
                <div className="borderVideo"></div>
            </div>
            <div className="wrapperCard" style={{
                display : 'flex',
                flexDirection : 'row',
                marginTop : '1rem'
            }}>
                <Cards imageCard={megawati}
                        TextH5="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolor, tempora optio at nam eaque!"
                        h5Font="10pt"
                        h5Weight="bold"
                        borderRadius="10px" />
                <Cards imageCard={megawati}
                        TextH5="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolor, tempora optio at nam eaque!"
                        h5Font="10pt"
                        h5Weight="bold"
                        borderRadius="10px" />
                <Cards imageCard={megawati}
                        TextH5="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolor, tempora optio at nam eaque!"
                        h5Font="10pt"
                        h5Weight="bold"
                        borderRadius="10px" />
                <Cards imageCard={megawati}
                        TextH5="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dolor, tempora optio at nam eaque!"
                        h5Font="10pt"
                        h5Weight="bold"
                        borderRadius="10px" />
            </div>
        </div>
    )
}

export default VideoMedia