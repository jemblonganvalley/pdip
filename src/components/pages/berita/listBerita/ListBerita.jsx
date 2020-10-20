import React, { useEffect, useState } from 'react'

import './listBerita.scss'
import BreadCrumbs from '../../../breadcrumbs/BreadCrumbs'
import MainDivider from '../../../divider/MainDivider'
import CardMateriPokok from '../../../cardmateripokok/CardMateriPokok'
import AngkaPaginationEvent from '../../../paginationevent/AngkaPaginationEvent'
import pemilu13 from '../../../../img/pemilu13.jpg'
import pemilu14 from '../../../../img/pemilu14.jpg'
import pemilu15 from '../../../../img/pemilu15.jpg'
import Cards from '../../../cards/MainCards'

const ListBerita = () => {

    let [berita, setBerita] = useState([])

     const getDataBerita = async ()=>{
         const res = await fetch('https://atur.biar.pw/api/auth/app', {
            method :'POST',
            headers : {
                "Content-Type" : "application/json"
        },
        body : JSON.stringify({
                    app_id : "1555309664580",
                    api_secret : "4d672ce3-e422-4d8a-86ff-fabb1808a689"
                })
        })
        const data = await res.json()

        const resBerita = await fetch('https://atur.biar.pw/api/blog/data/?page=1',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${data.token}`
            },
            body : JSON.stringify({
                order :{"key":"id","value":"desc"} ,
	            limit : 10
            })
        })
        const dataBerita = await resBerita.json()
        setBerita(dataBerita.query.data)
    }

    // Create Database Card Item
    let [cardBeritaDaerah, setCardBeritaDaerah] = useState([
        {
            pageMateriPk: '',
            imgMateriPk: pemilu13,
            txtJdlMateriPk: 'berita daerah',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu14,
            txtJdlMateriPk: 'berita daerah',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu15,
            txtJdlMateriPk: 'berita daerah',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu13,
            txtJdlMateriPk: 'berita daerah',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu14,
            txtJdlMateriPk: 'berita daerah',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu15,
            txtJdlMateriPk: 'berita daerah',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu13,
            txtJdlMateriPk: 'berita daerah',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu14,
            txtJdlMateriPk: 'berita daerah',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu15,
            txtJdlMateriPk: 'berita daerah',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu13,
            txtJdlMateriPk: 'berita daerah',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu14,
            txtJdlMateriPk: 'berita daerah',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
        {
            pageMateriPk: '',
            imgMateriPk: pemilu15,
            txtJdlMateriPk: 'berita daerah',
            txtParagrapMateriPk: '',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        },
    ])
    // END Create Database Card Item

    let [currentPage2, setCurrentPage2] = useState(1)
    let [itemEventPerPage] = useState(9)

    const indexOfLastPost = currentPage2 * itemEventPerPage
    const indexOfFirstPost = indexOfLastPost - itemEventPerPage
    const currentPosts = cardBeritaDaerah.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage2(pageNumber)

    useEffect(()=>{
        getDataBerita()
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className="wrapper-berita-daerah">
                <div className="linked-berita-daerah">
                    <BreadCrumbs link1="Home"
                        to1="/"
                        link2="Berita" to2="/berita" page3="List Berita"
                    />
                </div>

                {/* Container1 */}
                <div className="container1-berita-daerah">
                    <MainDivider text="Berita Daerah" />
                </div>
                {/* END Container1 */}

                {/* Container2 */}
                <div className="container2-berita-daerah">
                    {/* Column Card */}
                    <div className="column-card-berita-daerah">
                        
                            
                    {berita.map((e , i)=>{
                        return (
                            <Cards 
                            id={e.id}
                            imageCard={e.path} 
                            textSmall={e.author}
                            title={e.title}
                            dateTime={e.created_at}
                            // paragrap={e.description}
                            borderRadius="10px" 
                            style={{
                                width : '150px !important'
                            }}/>

                        )
                    })}


                    </div>
                    {/* END Column Card */}

                    {/* Column Pagination */}
                    <div className="column-pagination-berita-daerah">
                        <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={cardBeritaDaerah.length} paginate={paginate} />
                    </div>
                    {/* END Column Pagination */}
                </div>
                {/* END Container2 */}
            </div>
        </>
    )
}

export default ListBerita