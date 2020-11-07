import React, { Fragment, useEffect, useState } from "react";

import "./WejanganBungKarno.scss";
import CardWejangan from "../../../cardwejangan/CardWejangan";
import BreadCrumbs from "../../../breadcrumbs/BreadCrumbs";
import MainDivider from "../../../divider/MainDivider";
import AngkaPaginationEvent from "../../../paginationevent/AngkaPaginationEvent";
import Wait from "../../../wait/Wait";
import { useParams } from "react-router-dom";
import VMedia from "../../../VMedia/VMedia";
import CardQuotes from "../../../cardquotes/CardQuotes";
import { useStoreState } from "easy-peasy";

const WejanganBungKarno = () => {
  // Create Database Card Item
  const id = useParams("id");

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
  const [configHome, setConfigHome] = useState([]);
  const paginate = (pageNumber) => setCurrentPage2(pageNumber);

  const refresher = useStoreState((state) => state.refresher);
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

    // FETCH FIND CARD QUOTES
    const resVcard = await fetch("https://atur.biar.pw/api/quotes/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    });

    const dataVcard = await resVcard.json();
    setConfigHome(dataVcard.query);
  };

  useEffect(() => {
    getConfigHome();
    window.scrollTo(0, 0);
  }, [refresher]);

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
                to2="/bung-karno-bapak-bangsa"
                page3="Wejangan Bung Karno"
              />
            </div>
          </div>

          <div
            className="col1-container-1-bkbbWejangan"
            style={{
              width: "100%",
              padding: "0 20%",
              margin: "40px 0",
            }}
          >
            {configHome && (
              <VMedia
                displayIframe={"none"}
                displayImage={"flex"}
                backgroundImage={`https://atur.biar.pw/public${configHome.path}`}
                headline2={`${configHome.created_at}`}
                desc={`${configHome.title}`}
                customBackgroundColor={"transparent"}
                descColor={"#000"}
                customWidth="70%"
                kolumWidth="30%"
              />
            )}
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
            {/* <CardWejangan cardWejanganBkItem={cardWejanganBkItem} /> */}
            {cardWejanganBkItem.map((e, i) => (
              <CardQuotes
                page={`/bung-karno-bapak-bangsa/quotes/${e.id}`}
                img={`https://atur.biar.pw/public/${e.path}`}
                icon1="fas fa-quote-right"
                txt1={e.title}
                icon2="fas fa-quote-right"
                txt2={`Soekarno, ${e.quotes_date}`}
              ></CardQuotes>
            ))}
            {/* END Column Card Wejangan Bungkarno */}
          </div>

          {/* Column Pagination */}
          <div className="col-pagination-wejanganThumbnail">
            <AngkaPaginationEvent
              itemEventPerPage={itemEventPerPage}
              totalPosts={cardWejanganBkItem.length}
              paginate={paginate}
            />
          </div>
          {/* END Column Pagination */}
        </>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default WejanganBungKarno;
