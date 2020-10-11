import React, { useEffect, useState } from "react";

import "./containerCard.scss";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import MainDivider from "../../components/divider/MainDivider";
import { useParams } from "react-router-dom";
import Cards from "../cards/MainCards";
import Wait from '../wait/Wait'


const ContainerCard = () => {
  const { category_id } = useParams();
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

    const resConfigHome = await fetch("https://atur.biar.pw/api/blog/data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify({
        order: { key: "id", value: "desc" },
        limit: 9,
        where: { key: "blog.id_category", value: category_id },
      }),
    });

    const dataConfigHome = await resConfigHome.json();
    // console.log(dataConfigHome.query);
    setConfigHome(dataConfigHome.query.data);
  };

  useEffect(() => {
    getConfigHome();
  }, []);

  return (
    <>
    {configHome.length > 0 ? (
          <div className="wrapper-berita-nasional">
        <div className="linked-berita-nasional">
          <BreadCrumbs
            link1="Home"
            to1="/"
            link2="Berita"
            to2="/berita"
            page3="Berita Nasional"
          />
        </div>

        {/* Container1 */}
        <div className="container1-berita-nasional">
          <MainDivider text="Berita Nasional" />
        </div>
        {/* END Container1 */}

        {/* Container2 */}
        <div className="container2-berita-nasional">
          {/* Column Card */}
          <div className="column-card-berita-nasional">
            <div className="containerCard" style={{
                width : '100w',
                height : 'auto',
                minHeight : '100vh',
                display : 'flex',
                flexWrap : 'wrap',
                gap : '20px',
                // padding : '40px 0',
            }}>
              {configHome.length > 0 && (
                <>
                  {configHome.map((e, i) => (
                    <Cards
                      imageCard={e.path}
                      TextH5={e.title}
                      textSmall={e.author}
                      dateTime={e.created_at}
                      page={'/page'}
                      id={e.id}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
          {/* END Column Card */}

          {/* Column Pagination */}
          {/* <div className="column-pagination-berita-nasional">
                        <AngkaPaginationEvent itemEventPerPage={itemEventPerPage} totalPosts={cardBeritaNasional.length} paginate={paginate} />
                    </div> */}
          {/* END Column Pagination */}
        </div>
        {/* END Container2 */}
      </div>
    ) : (
        <Wait />
    )}
    
    </>
  );
};

export default ContainerCard;
