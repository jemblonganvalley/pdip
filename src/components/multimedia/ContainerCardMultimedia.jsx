import React, { useEffect, useState } from "react";

import "./containerCard.scss";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import MainDivider from "../divider/MainDivider";
import { useParams } from "react-router-dom";
import Cards from "../cards/MainCards";
import Wait from "../wait/Wait";

const ContainerCardMultimedia = () => {
  const { category } = useParams();
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
      "https://atur.biar.pw/api/multimedia/youtube-data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          order: { key: "id", value: "desc" },
          limit: 9,
          where: { key: "category", value: `${category}` },
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
  }, [category]);

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
            <MainDivider text={category} />
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
                        category={e.category}
                        imageCard={e.path}
                        title={e.title}
                        slug={e.title}
                        textSmall={e.description}
                        // dateTime={e.created_at}
                        page={`/detail-multimedia`}
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

export default ContainerCardMultimedia;
