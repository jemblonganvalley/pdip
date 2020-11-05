import React, { useEffect, useState } from "react";

import "./WejanganBungKarno.scss";
import CardWejangan from "../../../cardwejangan/CardWejangan";
import BreadCrumbs from "../../../breadcrumbs/BreadCrumbs";
import MainDivider from "../../../divider/MainDivider";
import AngkaPaginationEvent from "../../../paginationevent/AngkaPaginationEvent";
import Wait from "../../../wait/Wait";

const WejanganBungKarno = () => {
  // Create Database Card Item
  let [cardWejanganBkItem, setCardWejanganBk] = useState([]);
  // END Create Databasae Card Item

  let [currentPage2, setCurrentPage2] = useState(1);
  let [itemEventPerPage] = useState(9);

  const indexOfLastPost = currentPage2 * itemEventPerPage;
  const indexOfFirstPost = indexOfLastPost - itemEventPerPage;
  const currentPosts = cardWejanganBkItem.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage2(pageNumber);
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

    const resConfigHome = await fetch("https://atur.biar.pw/api/quotes/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    });

    const dataConfigHome = await resConfigHome.json();
    setCardWejanganBk(dataConfigHome.query.data);
    console.log(dataConfigHome.query.data);
  };

  useEffect(() => {
    getConfigHome();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {cardWejanganBkItem.length > 0 ? (
        <>
          <div className="wrapperWejanganThumbnail">
            <div className="linkedBkbbWBK">
              <BreadCrumbs
                link1="Home"
                to1="/"
                link2="Bungkarno Bapak Bangsa"
                to2="/bungkarno"
                page3="Wejangan Bung Karno"
              />
            </div>
          </div>
          {/* END Thumbnail Wejangan Bungkarno */}

          {/* Container1 */}
          <div className="container1-wejanganThumbnail">
            <MainDivider text="WEJANGAN BUNG KARNO" margin="0 0 0px 0" />
          </div>
          {/* END Container1 */}

          {/* Container2 */}
          <div className="container2-wejanganThumbnail">
            {/* Column Card Wejangan Bungkarno */}
            <div
              className="col-card-wejanganThumbnail"
              style={{
                display: "flex",
              }}
            >
              <CardWejangan cardWejanganBkItem={cardWejanganBkItem} />
            </div>
            {/* END Column Card Wejangan Bungkarno */}

            {/* Column Pagination */}
            <div className="col-pagination-wejanganThumbnail">
              <AngkaPaginationEvent
                itemEventPerPage={itemEventPerPage}
                totalPosts={cardWejanganBkItem.length}
                paginate={paginate}
              />
            </div>
            {/* END Column Pagination */}
          </div>
        </>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default WejanganBungKarno;
