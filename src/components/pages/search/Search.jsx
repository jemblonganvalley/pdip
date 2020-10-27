import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../search/Search.scss'
import img from '../../../img/profil.png'
import img5 from '../../../img/img5.jpg'
import kampanye from '../../../img/kampanye.jpg'
import AngkaPaginationEvent from '../../paginationevent/AngkaPaginationEvent'
import CardSearch from '../../cardsearch/CardSearch'
import { useStoreActions } from 'easy-peasy'

const Search = ()=>{

    let [cardSearch, setCardSearch] = useState([
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
      {
        page : '/',
        img : img5,
        title1 : 'Berita |',
        title2 : 'Nasional',
        paragrap : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolorem!'
      },
    ])

    let [currentPage2, setCurrentPage2] = useState(1)
    let [itemEventPerPage] = useState(9)

    const indexOfLastPost = currentPage2 * itemEventPerPage
    const indexOfFirstPost = indexOfLastPost - itemEventPerPage
    const currentPosts = cardSearch.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage2(pageNumber)

    // Onchange text from input search
    const todos = useStoreActions((state)=> state.todos);

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
                          {/* Card Search */}
                          <CardSearch cardSearchItem={currentPosts}/>
                          {/* END Card Search */}
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

                    {/* Column3 Paginate */}
                    <div className="column3-pagination-pencarian">
                      <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={cardSearch.length} paginate={paginate} />
                    </div>
                    {/* END Column3 Paginate */}
                    {/* END Container Hasil Pencarian */}
                  </div>
                  {/* END Container Hasil Pencarian */}
              </div>
              {/* END Modal Display Search */}

        </>
    )
}

export default Search
