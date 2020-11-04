import React, { useEffect, useState } from "react";

import "./containerCard.scss";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import MainDivider from "../divider/MainDivider";
import { useParams } from "react-router-dom";
import Cards from "../cards/MainCards";
import Wait from "../wait/Wait";

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

    const resConfigHome = await fetch(
      "https://atur.biar.pw/api/gallery/album",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          order: { key: "id", value: "desc" },
          where: { key: "type", value: "image" },
          limit: null,
        }),
      }
    );

    const dataConfigHome = await resConfigHome.json();
    // console.log(dataConfigHome.query);
    setConfigHome(dataConfigHome.query.data);
  };

  useEffect(() => {
    getConfigHome();
    window.scrollTo(0, 0);
  }, [category_id]);

  return (
    <>
      {configHome.length > 0 ? (
        <div className="wrapper-berita-nasional">
          <div className="linked-berita-nasional">
            <BreadCrumbs
              link1="Home"
              to1="/"
              link2={`/berita`}
              to2={`/berita`}
              page3={"gallery"}
            />
          </div>

          {/* Container1 */}
          <span className="divider-page-berita-nasional">
            <MainDivider text={`Gallery`} />
          </span>
          {/* END Container1 */}
          {/* Container2 */}
          <div className="container2-berita-nasional">
            {/* Column Card */}
            <div className="column-card-berita-nasional">
              <div className="containerCard-berita-nasional">
                {configHome.length > 0 && (
                  <>
                    {configHome.map((e, i) => (
                      <Cards
                        category={e.type}
                        imageCard={e.cover}
                        title={e.album_name}
                        slug={e.album_name}
                        textSmall={e.album_description}
                        // dateTime={e.created_at}
                        page={`/gallery/detail-gallery`}
                        id={e.id_album}
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
