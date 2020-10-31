import React, { useEffect, useState } from 'react'
import './SiaranPagination.scss'
import Cards from '../../../cards/MainCards'
import megawati12 from '../../../../img/megawati12.png'
import CardMultimedia from '../../../cardmultimedia/CardMultimedia'
import AngkaPaginationEvent from '../../../paginationevent/AngkaPaginationEvent'
import CardMateriPokok from '../../../cardmateripokok/CardMateriPokok'

const SiaranPagination = ()=> {

    let [siaran , setSiaran] = useState([
        {
            pageMateriPk : 1, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 2, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 3, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 4, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 5, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 6, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 7, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 8, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 9, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 10, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 11, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 12, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
        {
            pageMateriPk : 13, 
            imgMateriPk : megawati12,
            txtAuthor: 'Berita |',
            txtHeadline : 'Admin PDI Perjuangan | 1 Januari 2019',
            txtParagrapMateriPk : 'lorem ipsum dolor sit amet.'
        },
    ])

    // let [currentPage, setCurrentPage] = useState(1)
    // let [itemSiaran] = useState(12)
    // const indexOfLastPost = currentPage * itemSiaran
    // const indexOfFirstPost = indexOfLastPost - itemSiaran
    // const currentPosts = siaran.slice(indexOfFirstPost, indexOfLastPost)

    // const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const [configHome, setConfigHome] = useState([]);

    const getConfigHome = async () => {
        const res = await fetch("https://atur.biar.pw/api/auth/app", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            app_id: "1555309664580",
            api_secret: "4d672ce3-e422-4d8a-86ff-fabb1808a689",
          }),
        });
        const data = await res.json();
    
        const resConfigHome = await fetch(
          "https://atur.biar.pw/api/web/pages/home",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data.token}`,
            },
          }
        );
    
        const dataConfigHome = await resConfigHome.json();
        console.log(dataConfigHome.query);
        setConfigHome(dataConfigHome.query);
      };

      useEffect(()=>{
          getConfigHome();
          window.scrollTo(0,0);
      }, [])

    return (
        <>
        <div className="wrapperSiaran">
             {/* <CardMultimedia siaran={currentPosts} /> */}

             {/* <CardMateriPokok cardMateriPokokItem={currentPosts}/> */}
             {configHome.length > 0 &&
                configHome[4].value.map((e, i)=>{
                    return(
                        <Cards
                            type={e.type}
                            imageCard={e.path}
                            title={e.title}
                            slug={e.title}
                            borderRadius="10px"
                            key={i}
                        />
                    );
                })}
        </div>

        <nav aria-label="Page navigation example" style={{
            marginTop: '0px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>

            {/* <AngkaPaginationEvent itemEventPerPage={itemSiaran} totalPosts={siaran.length} paginate={paginate} /> */}
        </nav>

        </>
    )
}

export default SiaranPagination