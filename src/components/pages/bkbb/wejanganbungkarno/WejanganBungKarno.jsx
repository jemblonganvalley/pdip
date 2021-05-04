import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./WejanganBungKarno.scss";
import { useParams, Redirect } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import BreadCrumbs from "../../../breadcrumbs/BreadCrumbs";
import MainDivider from "../../../divider/MainDivider";
import AngkaPaginationEvent from "../../../paginationevent/AngkaPaginationEvent";
import Wait from "../../../wait/Wait";
import CardQuotes from "../../../cardquotes/CardQuotes";
import QuotesBkbb from "../../../quotesbkbb/QuotesBkbb";

const WejanganBungKarno = () => {
  // Create Database Card Item
  const id = useParams("id");
  const [firstTime, setFirstTIme] = useState(true);
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
    const res = await fetch("https://data.pdiperjuangan.id/api/auth/app", {
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
      "https://data.pdiperjuangan.id/api/quotes/data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          order: {
            key: "id",
            value: "desc",
          },
        }),
      }
    );

    const dataConfigHome = await resConfigHome.json();
    setCardWejanganBk(dataConfigHome.query.data);

    // FETCH FIND CARD QUOTES
    const resVcard = await fetch(
      "https://data.pdiperjuangan.id/api/quotes/find",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          id: firstTime ? dataConfigHome.query.data[0].id : id,
        }),
      }
    );

    const dataVcard = await resVcard.json();
    setConfigHome(dataVcard.query);
    console.log(dataVcard.query);
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

          <div className="col1-container-1-bkbbWejangan">
            {typeof configHome != undefined ? (
              <>
                <QuotesBkbb
                  id={configHome.id}
                  displayIframe={"none"}
                  displayImage={"flex"}
                  backgroundImage={`https://data.pdiperjuangan.id/public/${configHome.path}`}
                  headline={configHome.title}
                  desc={configHome.description}
                  customBackgroundColor={"transparent"}
                  descColor={"#000"}
                  customWidth="70%"
                  kolumWidth="30%"
                  date={configHome.created_at}
                  widthCustom={"50%"}
                  widthCustomDesc={"50%"}
                  quotesDate={configHome.quotes_date}
                  wait
                />
              </>
            ) : (
              <QuotesBkbb
                id={3}
                displayIframe={"none"}
                displayImage={"flex"}
                backgroundImage={`https://data.pdiperjuangan.id/public/uploads/blog/040520210419594Q1.jpeg`}
                headline={`......`}
                desc={`....`}
                customBackgroundColor={"transparent"}
                descColor={"#000"}
                customWidth="70%"
                kolumWidth="30%"
                date={`....`}
                widthCustom={"50%"}
                widthCustomDesc={"50%"}
                quotesDate={"....."}
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
          <div
            className="container2-wejanganThumbnail"
            onClick={() => {
              setFirstTIme(false);
            }}
          >
            {/* Column Card Wejangan Bungkarno */}
            {/* <CardWejangan cardWejanganBkItem={cardWejanganBkItem} /> */}
            {cardWejanganBkItem.map((e, i) => (
              <CardQuotes
                page={`/bung-karno-bapak-bangsa/quotes/${e.id}`}
                img={`https://data.pdiperjuangan.id/public/${e.path}`}
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
