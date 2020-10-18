import React from 'react'
import { Link } from 'react-router-dom'
import '../search/Search.scss'
import img from '../../../img/profil.png'
import img5 from '../../../img/img5.jpg'
import kampanye from '../../../img/kampanye.jpg'

const Search = ()=>{
    return(
        <>
        {/* Modal Display Search */}
        <div className="modal-display-search">
                  {/* Bg Black Search */}
                  <form action="" className="background-black-search">
                      <h6 className="txt-kata-yang-diCari" id="txtGroup">
                        Kata yang dicari :
                      </h6>

                      <div className="kolom-search-modal">
                        <input type="text" className="input-search" id="txtGroup" autoFocus/>
                        <button className="btn-icon-pageSearch">
                          <span class="material-icons" id="txtGroup">
                          search
                          </span>
                        </button>
                      </div>
                  </form>
                  {/* END Bg Black Search */}

                  {/* Container Hasil Pencarian */}
                  <div className="container-hasil-pencarian">
                    {/* Column1 */}
                    <div className="column1-hasil-pencarian">
                      <h6 className="txt-hasil-pencarian">
                        Hasil Pencarian
                      </h6>

                      <div className="garis-abu-abu">

                      </div>
                    </div>
                    {/* END Column1 */}

                    {/* Column2 */}
                    <div className="column2-hasil-pencarian">
                      <div className="column-info-kiri">
                          <Link className="card-hasil-pencarian">
                            <img src={img5} alt="" className="img-card"/>

                            <div className="column-content-card">
                              <div className="column-title-card">
                                  <small className="title1-card">
                                    Berita |
                                  </small>

                                  <small className="title2-card">
                                    Nasional
                                  </small>
                              </div>

                              <h6 className="txt-paragrap-card">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, minima!
                              </h6>
                            </div>
                          </Link>

                          <Link className="card-hasil-pencarian">
                            <img src={img} alt="" className="img-card"/>

                            <div className="column-content-card">
                              <div className="column-title-card">
                                  <small className="title1-card">
                                    Berita |
                                  </small>

                                  <small className="title2-card">
                                    Nasional
                                  </small>
                              </div>

                              <h6 className="txt-paragrap-card">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, minima!
                              </h6>
                            </div>
                          </Link>

                          <Link className="card-hasil-pencarian">
                            <img src={kampanye} alt="" className="img-card"/>

                            <div className="column-content-card">
                              <div className="column-title-card">
                                  <small className="title1-card">
                                    Berita |
                                  </small>

                                  <small className="title2-card">
                                    Nasional
                                  </small>
                              </div>

                              <h6 className="txt-paragrap-card">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, minima!
                              </h6>
                            </div>
                          </Link>

                          <Link className="card-hasil-pencarian">
                            <img src="" alt="" className="img-card"/>

                            <div className="column-content-card">
                              <div className="column-title-card">
                                  <small className="title1-card">
                                    Berita |
                                  </small>

                                  <small className="title2-card">
                                    Nasional
                                  </small>
                              </div>

                              <h6 className="txt-paragrap-card">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, minima!
                              </h6>
                            </div>
                          </Link>

                          <Link className="card-hasil-pencarian">
                            <img src="" alt="" className="img-card"/>

                            <div className="column-content-card">
                              <div className="column-title-card">
                                  <small className="title1-card">
                                    Berita |
                                  </small>

                                  <small className="title2-card">
                                    Nasional
                                  </small>
                              </div>

                              <h6 className="txt-paragrap-card">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, minima!
                              </h6>
                            </div>
                          </Link>

                          <Link className="card-hasil-pencarian">
                            <img src="" alt="" className="img-card"/>

                            <div className="column-content-card">
                              <div className="column-title-card">
                                  <small className="title1-card">
                                    Berita |
                                  </small>

                                  <small className="title2-card">
                                    Nasional
                                  </small>
                              </div>

                              <h6 className="txt-paragrap-card">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, minima!
                              </h6>
                            </div>
                          </Link>

                          <Link className="card-hasil-pencarian">
                            <img src="" alt="" className="img-card"/>

                            <div className="column-content-card">
                              <div className="column-title-card">
                                  <small className="title1-card">
                                    Berita |
                                  </small>

                                  <small className="title2-card">
                                    Nasional
                                  </small>
                              </div>

                              <h6 className="txt-paragrap-card">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, minima!
                              </h6>
                            </div>
                          </Link>
                      </div>

                      <div className="column-info-kanan">
                        <Link className="btn-info-kanan">
                          <i class="fas fa-plus" id="fontGroup-info"></i>

                          <p className="title-info" id="fontGroup-info">
                            partai
                          </p>
                        </Link>

                        <Link className="btn-info-kanan">
                          <i class="fas fa-plus" id="fontGroup-info"></i>

                          <p className="title-info" id="fontGroup-info">
                            bungkarno bapak bangsa
                          </p>
                        </Link>
                      </div>
                    </div>
                    {/* END Column2 */}
                  </div>
                  {/* END Container Hasil Pencarian */}
              </div>
              {/* END Modal Display Search */}

        </>
    )
}

export default Search
