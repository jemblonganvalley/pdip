import React, { useEffect, useState } from "react";

import bkbb2 from "../../../img/bkbb2.jpg";
import bkbb3 from "../../../img/bkbb3.jpg";
import bkbb4 from "../../../img/bkbb4.jpg";

import "./BkbbWejangan.scss";
import CardQuotes from "../../cardquotes/CardQuotes";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import MainButton from "../../buttons/MainButton";
import CardSocialMedia from "../../cardsocialmedia/CardSocialMedia";
import CardHeader from "../../cardheader/CardHeader";
import bkbbH from "../../../img/BKBB.jpg";
import bkbb1 from "../../../img/bkbb1.jpg";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import Wait from "../../wait/Wait";
import VMedia from "../../VMedia/VMedia";

const BkbbWejangan = () => {
  const setRefresher = useStoreActions((action) => action.setRefresher);
  const refresher = useStoreState((state) => state.refresher);

  const id = useParams("id");
  const [configHome, setConfigHome] = useState();
  const [manyCard, setManycard] = useState([]);
  const getConfigHome = async () => {
    const res = await fetch("http://192.168.8.18/api/auth/app", {
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

    // FETCH FIND CARD QUOTES
    const resConfigHome = await fetch("http://192.168.8.18/api/quotes/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    });

    const dataConfigHome = await resConfigHome.json();
    setConfigHome(dataConfigHome.query);

    // FETCH MANY CARD
    const resManycard = await fetch("http://192.168.8.18/api/quotes/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    });

    const dataManycard = await resManycard.json();
    console.log(dataManycard.query.data);
    setManycard(dataManycard.query.data);
  };

  useEffect(() => {
    getConfigHome();
    window.scrollTo(0, 0);
  }, [refresher]);
  return (
    <>
      {configHome ? (
        <div className="wrapperBkbbWejangan">
          {/* <div className="headersBkbbWejangan">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">

                        </div>
                    </div>
                </div> */}

          {/* Card Header */}
          {/* <CardHeader
          backgroundHeader={bkbbH}
          // titleHeader={configHome[1].value[0].title}
        /> */}
          {/* END Card Header */}
          <div
            className="linkedBkbbWejangan"
            style={{
              padding: "0 20%",
            }}
          >
            <BreadCrumbs
              link1="home"
              to1="/"
              link2="Bungkarno Bapak Bangsa"
              to2="/bungkarno-bapak-bangsa"
              page3="Quotes"
            />
          </div>

          {/* Container1 */}
          <div className="container-1-bkbbWejangan">
            {/* Column1 */}
            <div className="col1-container-1-bkbbWejangan">
              <VMedia
                displayIframe={"none"}
                displayImage={"flex"}
                backgroundImage={`http://192.168.8.18/public${configHome.path}`}
                headline2={`${configHome.created_at}`}
                desc={`${configHome.title}`}
                customBackgroundColor={"transparent"}
                descColor={"#000"}
                customWidth="70%"
                kolumWidth="30%"
              />
            </div>
            {/* END Column1 */}
          </div>
          {/* END Container1 */}

          {/* Container2 */}
          {/* <div className="container-2-bkbbWejangan">
            <div
              className="CardBkbbWejangan"
              onClick={() => {
                setRefresher();
              }}
              style={{
                display : 'flex',
                justifyContent : 'space-between',
                padding : '0 20% 0 20%'
              }}
            >
              {manyCard.map((e, i) => (
                <CardQuotes
                  page={`/quotes/${e.id}`}
                  img={`http://192.168.8.18/public/${e.path}`}
                  icon1="fas fa-quote-right"
                  txt1={e.title}
                  icon2="fas fa-quote-right"
                  txt2={`Soekarno, ${e.quotes_date}`}
                />
              ))}
            </div>
          </div> */}
          {/* END Container2 */}
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default BkbbWejangan;
