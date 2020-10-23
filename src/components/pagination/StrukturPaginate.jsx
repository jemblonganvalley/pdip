import React, { useState, useEffect } from 'react'
import CardCircle from '../cardcircle/CardCircle'


import megawati from '../../img/megawati.png'
import hasto from '../../img/hasto.png'
import utut from '../../img/utut.png'
import komarudin from '../../img/komarudin.png'
import olly from '../../img/olly.png'
import rudi from '../../img/rudi.png'
import peter from '../../img/peter.png'
import watubun from '../../img/komar.png'
import prananda from '../../img/prananda.png'
import yasonna from '../../img/yasonna.png'
import said from '../../img/said.png'
import eriko from '../../img/eriko.png'

import './StrukturPaginate.scss'
import AngkaPaginationEvent from '../paginationevent/AngkaPaginationEvent'

const StrukturPaginate = ({data}) => {

    let [struktur, setStruktur] = useState(data)



    let [currentPage2, setCurrentPage2] = useState(1)
    let [itemEventPerPage] = useState(100)

    const indexOfLastPost = currentPage2 * itemEventPerPage
    const indexOfFirstPost = indexOfLastPost - itemEventPerPage
    const currentPosts = struktur.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage2(pageNumber)

    return (
        <div className="wrapperPaginate">
            <div className="card-strukturPaginate">
            <CardCircle strukturCard={data} />
            </div>
            

            <nav aria-label="Page navigation example" style={{
                marginTop: '10px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>

                <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={struktur.length} paginate={paginate} />
            </nav>

        </div>
    )
}

export default StrukturPaginate