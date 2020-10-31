import React, { useEffect, useState } from "react";

import "./containerCard.scss";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import MainDivider from "../../components/divider/MainDivider";
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

    const resConfigHome = await fetch("https://atur.biar.pw/api/blog/data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify({
        order: { key: "id", value: "desc" },
        limit: 9,
        where: { key: "blog.id_category_child", value: category_id },
      }),
    });

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
    {console.log(configHome)}
      {configHome.length > 0 ? (
        <div className="wrapper-berita-nasional">
          <div className="linked-berita-nasional">
            <BreadCrumbs
              link1="Home"
              to1="/"
              link2={`${configHome[0].category_name}`}
              to2={`/${configHome[0].category_name.replace(/\s/g, '-').toLowerCase()}`}
              page3={configHome[0].category_child_name}
            />
          </div>

          {/* Container1 */}
          <span className="divider-page-berita-nasional">
          <MainDivider text={configHome[0].category_child_name}/>
          </span>
          {/* END Container1 */}
          {/* Container2 */}
          <div className="container2-berita-nasional">
            {/* Column Card */}
            <div className="column-card-berita-nasional">
              <div
                className="containerCard-berita-nasional"
              >
                {configHome.length > 0 && (
                  <>
                    {configHome.map((e, i) => (
                      <Cards
                        category={e.category_name}
                        imageCard={e.path}
                        title={e.title}
                        slug={e.title}
                        textSmall={e.author}
                        dateTime={e.created_at}
                        page={"/detail-article"}
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
