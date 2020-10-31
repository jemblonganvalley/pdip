import React, { useEffect, useState } from "react";
import "./StrukturPage.scss";
import StrukturPaginate from "../../pagination/StrukturPaginate";
import MainDivider from "../../divider/MainDivider";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import Wait from "../../wait/Wait";

const StrukturPage = ({ slug }) => {
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

    const resConfigHome = await fetch("https://atur.biar.pw/api/partai/pengurus/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify({
        order: { key: "id", value: "desc" },
        limit: 100,
      })
    });

    const dataConfigHome = await resConfigHome.json();
    // console.log(dataConfigHome.query);
    setConfigHome(dataConfigHome.data);
  };

  useEffect(() => {
    getConfigHome()
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

    {configHome.length > 0 ? (
         <div className="pageStruktur">
      {/* HEADERS */}
      <div className="headers">
        <div className="backgrounds">
          <div className="textBackgroundStruktur">
            <h2>
              Solid Bergerak Untuk
              <br />
              Indonesia Raya{" "}
            </h2>
          </div>
        </div>
      </div>
      {/* END */}

      {/* LINK PARTAI */}
      <div className="linkedStruktur">
        <BreadCrumbs
          link1="home"
          to1="/"
          link2="Partai"
          to2="/partai"
          page3="Struktur Pengurus"
        />
      </div>
      {/* END */}

      <div className="pengurusPage">
        <MainDivider text="Pengurus DPP PDI PERJUANGAN" garisMerah="3rem" />
        {/* <div className="strukturTextHead">
          <h2>
            Struktur Pengurus Dewan Pimpinan Pusat
            <br />
            PDI Perjuangan
          </h2>
        </div> */}

        <div className="pengurusList">
          <div className="listPengurus">
            <StrukturPaginate data={configHome}/>
          </div>
        </div>
      </div>
      {/* END */}
    </div>
    ) : (
        <Wait />
    )}
   
    </>
  );
};

export default StrukturPage;
