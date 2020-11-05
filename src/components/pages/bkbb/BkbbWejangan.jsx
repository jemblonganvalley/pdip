import React, { useEffect, useState } from 'react'

import bkbb2 from '../../../img/bkbb2.jpg'
import bkbb3 from '../../../img/bkbb3.jpg'
import bkbb4 from '../../../img/bkbb4.jpg'

import './BkbbWejangan.scss'
import CardQuotes from '../../cardquotes/CardQuotes'
import BreadCrumbs from '../../breadcrumbs/BreadCrumbs'
import MainButton from '../../buttons/MainButton'
import CardSocialMedia from '../../cardsocialmedia/CardSocialMedia'
import CardHeader from '../../cardheader/CardHeader'
import bkbbH from '../../../img/BKBB.jpg'
import bkbb1 from '../../../img/bkbb1.jpg'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useParams } from 'react-router-dom'
import Wait from '../../wait/Wait'

const BkbbWejangan = () => {
  const setRefresher = useStoreActions((action) => action.setRefresher);
  const refresher = useStoreState((state) => state.refresher);

  const id = useParams("id");
  const [configHome, setConfigHome] = useState();
  const [manyCard, setManycard] = useState([]);
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

    // FETCH FIND CARD QUOTES
    const resConfigHome = await fetch("https://atur.biar.pw/api/quotes/find", {
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
    const resManycard = await fetch("https://atur.biar.pw/api/quotes/data", {
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
          <div className="linkedBkbbWejangan">
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
              {/* Row1 */}
              <div
                className="row1-bkbbWejangan"
                style={{
                  backgroundImage: `url(https://atur.biar.pw/public/${configHome.path})`,
                }}
              >
                <div className="box-quotes-bkbbWejangan">
                  {/* <i className="fas fa-quote-right"></i> */}

                  {/* <h5 className="txt1">{configHome.title}</h5> */}

                  {/* <br /> */}

                  {/* <p className="txt2">
                    JANGANLAH LEMBEK, MOHON PADA TUHAN SUPAYA BANGSA INDONESIA
                    MENJADI SATU BANGSA YANG JAYA DI DUNIA, MENJADI BANGSA. KUAT
                    DAN TABAH
                  </p> */}

                  {/* <i className="fas fa-quote-right"></i> */}

                  {/* <small className="txt3">
                    Bung Karno, {configHome.quotes_date}
                  </small> */}
                </div>
              </div>
              {/* END Row1 */}

              {/* Row2 */}
              <div className="row2-bkbbWejangan">
                <small className="txt1">
                  PDI Perjuangan | {configHome.created_at}
                </small>

                <h5 className="txt2">{configHome.title}</h5>

                {/* DESCRIPTION RIGHT */}
                {/* {parser(configHome.description)} */}

                <div className="box-medsos-bkbbWejangan">
                  {/* Card Social Media */}
                  <CardSocialMedia />
                  {/* END Card Social Media */}

                  {/* <div className="socialMedia">
                                    <small>SHARE : </small>  
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-instagram"></i>
                                    <i className="fa fa-whatsapp" ></i>
                                </div> */}
                </div>
              </div>
              {/* END Row2 */}
            </div>
            {/* END Column1 */}
          </div>
          {/* END Container1 */}

          {/* Container2 */}
          <div className="container-2-bkbbWejangan">
            {/* Column1 */}
            <div
              className="col1-container-2-bkbbWejangan"
              onClick={() => {
                setRefresher();
              }}
            >
              {/* CardQuotes */}

              {manyCard.map((e, i) => (
                <CardQuotes
                  page={`/quotes/${e.id}`}
                  img={`https://atur.biar.pw/public/${e.path}`}
                  icon1="fas fa-quote-right"
                  txt1={e.title}
                  icon2="fas fa-quote-right"
                  txt2={`Soekarno, ${e.quotes_date}`}
                />
              ))}
              {/* END CardQuotes */}
            </div>
            {/* END Column1 */}

            {/* Column2 */}
            {/* <div className="col2-container-2">
              <MainButton
                pages="/wejanganbungkarno"
                name="LIHAT SEMUA"
                margin="1rem 0"
              />
            </div> */}
            {/* END Column2 */}
          </div>
          {/* END Container2 */}
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default BkbbWejangan;
