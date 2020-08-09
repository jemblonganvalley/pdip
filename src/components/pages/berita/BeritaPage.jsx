// Import to React
import React, {useEffect} from 'react'
// END Import to React

import './BeritaPage.scss'
import { Link } from 'react-router-dom'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import CarouselBerita from '../../carouselBerita/CarouselBerita'

// Create Component
const BeritaPage = () => {



    return (
        <>
            <div className="wrapperBerita">
                <div className="headers">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">

                        </div>
                    </div>
                </div>
                <div className="linkedBerita">
                    <BreadCrumbs link1="Home"
                        to1="/"
                        page2="Berita" />
                </div>

                {/* Container1 */}
                <div className="container-1">
                    {/* Column1 */}
                    <CarouselBerita />
                    {/* END Column1 */}

                    {/* Column2 */}
                    <div className="col2-container-1">
                        {/* Row1 */}
                        <div className="row1-col2">
                            <div className="box-img">

                            </div>
                            <div className="txt-img1">
                                <p className="txt-1">
                                    BERITA NASIONAL
                                </p>
                            </div>
                        </div>
                        {/* END Row1 */}
                        {/* Row2 */}
                        <div className="row2-col2">
                            <div className="box-img">

                            </div>
                            <div className="txt-img2">
                                <p className="txt-2">
                                    BERITA DAERAH
                                </p>
                            </div>
                        </div>
                        {/* END Row2 */}
                        {/* Row3 */}
                        <div className="row3-col2">
                            <div className="box-img">

                            </div>
                            <div className="txt-img3">
                                <p className="txt-3">
                                    BERITA FOTO
                                </p>
                            </div>
                        </div>
                        {/* END Row3 */}
                        {/* Row4 */}
                        <div className="row4-col2">
                            <div className="box-img">

                            </div>
                            <div className="txt-img4">
                                <p className="txt-4">
                                    KEGIATAN PARTAI
                                </p>
                            </div>
                        </div>
                        {/* END Row4 */}

                    </div>
                    {/* END Column2 */}

                    {/* Column3 */}
                    <div className="col3-cardContent-container-1">
                        <Link to='/page1' className="col-cardContent card1">
                            <div className="imageContent imageOne"></div>
                            <div className="textCard">
                                <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                            </div>
                        </Link>

                        <Link to='/page2' className="col-cardContent">
                            <div className="imageContent imageTwo"></div>
                            <div className="textCard">
                                <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                            </div>
                        </Link>
                        <div className="col-cardContent">
                            <div className="imageContent imageThree"></div>
                            <div className="textCard">
                                <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                            </div>
                        </div>
                    </div>
                    {/* END Column3 */}

                    {/* Column4 */}
                    <div className="col4-container-1">
                        <div className="col-title-berita-foto">
                            <p className="txt-berita-foto">
                                BERITA FOTO
                            </p>
                        </div>
                        <div className="col-garis-lurus">
                            <div className="garis-merah">

                            </div>
                        </div>
                    </div>
                    {/* END Column4 */}

                    {/* Column5 */}
                    <div className="col5-container-1">
                        {/* Row1 */}
                        <div className="row1-col5">
                            <div className="box-img">

                            </div>
                            <div className="box-jdl-row1">
                                <h1>KONGRES Ke- 5 PDI Perjuangan "Solid Bergerak Untuk Indonesia Raya" Bali</h1>
                            </div>
                        </div>
                        {/* END Row1 */}
                        {/* Row2 */}
                        <div className="row2-col5">
                            {/* Column1 */}
                            <div className="col1-row2">

                            </div>
                            {/* END Column1 */}
                            {/* Column2 */}
                            <div className="col2-row2">
                                <p className="txt-jdl-col2">
                                    Sekolah Sekretaris DPD & DPC PDI Perjuangan se Indonesia
                                </p>
                                <p className="txt-desk-col2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo ipsum modi provident ut molestiae iure, reiciendis dicta dolores, omnis sit. Praesentium quasi, numquam sint pariatur illo quaerat velit dolor!quasi, numquam sint pariatur illo quaerat velit dolor! sint pariatur illo quaerat velit dolor!
                                </p>
                            </div>
                            {/* END Column2 */}
                        </div>
                        {/* END Row2 */}
                    </div>
                    {/* END Column5 */}
                </div>
                {/* END Container1 */}

                {/* Container2 */}
                <div className="container-2">
                    {/* Column1 */}
                    <div className="col1-container-2 banner-berita">
                        <p className="txt-title-col1">
                            Ut enim ad minim veniam, quis nostrud
                            <br /> exercitation ullamco laboris
                        </p>
                    </div>
                    {/* END Column1 */}
                    {/* Column2 */}
                    <div className="col2-container-2">
                        <button className="btn-lihat-col2">
                            LIHAT
                        </button>
                    </div>
                    {/* END Column2 */}
                </div>
                {/* END Container2 */}

                {/* Container3 */}
                <div className="container-3">
                    {/* Column1 */}
                    <div className="col1-container-3">
                        <div className="box-jdl-col1">
                            <p className="txt-jdl-col1">
                                BERITA DAERAH
                            </p>
                        </div>
                        <div className="box-garis-lurus-col1">
                            <div className="garis-merah">

                            </div>
                        </div>
                    </div>
                    {/* END Column1 */}

                    {/* Column2 */}
                    <div className="col2-cardContent-container-3">
                        <div className="col-cardContent">
                            <div className="imageContent imageOne"></div>
                            <div className="textCard">
                                <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                            </div>

                        </div>
                        <div className="col-cardContent">
                            <div className="imageContent imageTwo"></div>
                            <div className="textCard">
                                <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                            </div>

                        </div>
                        <div className="col-cardContent">
                            <div className="imageContent imageThree"></div>
                            <div className="textCard">
                                <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                            </div>
                        </div>
                    </div>
                    {/* END Column2 */}

                    {/* Column3 */}
                    <div className="col3-container-3">
                        <div className="box-jdl-col3">
                            <p className="txt-jdl-col3">
                                KEGIATAN PARTAI
                            </p>
                        </div>
                        <div className="box-garis-lurus-col3">
                            <div className="garis-merah">

                            </div>
                        </div>
                    </div>
                    {/* END Column3 */}

                    {/* Column4 */}
                    <div className="col4-cardContent-container-3">
                        <div className="col-cardContent">
                            <div className="imageContent imageOne"></div>
                            <div className="textCard">
                                <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                            </div>

                        </div>
                        <div className="col-cardContent">
                            <div className="imageContent imageTwo"></div>
                            <div className="textCard">
                                <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                            </div>

                        </div>
                        <div className="col-cardContent">
                            <div className="imageContent imageThree"></div>
                            <div className="textCard">
                                <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio odit voluptatem harum quam earum ut molestias.</p>
                            </div>
                        </div>
                    </div>
                    {/* END Column4 */}
                </div>
                {/* END Container3 */}
            </div>
        </>
    )
}
// END Create Component

export default BeritaPage