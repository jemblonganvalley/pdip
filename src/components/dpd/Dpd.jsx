import React, { useEffect, useState } from "react";
import "./Dpd.scss";
import image from "../../img/bali.png";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import MainDivider from "../divider/MainDivider";
import CardHeader from "../cardheader/CardHeader";
import kampanye from "../../img/kampanye.jpg";
import { useParams } from "react-router-dom";
import Wait from "../wait/Wait";
import parse from "html-react-parser";

const Dpd = () => {
  const { id, nameProv } = useParams();
  const [configHome, setConfigHome] = useState();

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
      "https://atur.biar.pw/api/partai/dpd/find",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );

    const dataConfigHome = await resConfigHome.json();
    setConfigHome(dataConfigHome.query);
    console.log(configHome);
  };

  useEffect(() => {
    getConfigHome();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {configHome ? (
        <div className="dpdWrapper">
          {/* HEADERS */}
          {/* <div className="dpdHead">
                <div className="backDpd">
                    <div className="textDpdHead">
                        <h2>Solid Bergerak Untuk<br/>Indonesia Raya </h2>
                    </div>
                </div>
            </div> */}
          {/* END */}

          {/* Card Header */}
          {/* <CardHeader /> */}
          {/* END Card Header */}

          {/* LINK PARTAI */}
          <div className="linkedDetail">
            <BreadCrumbs
              to1="/"
              link1="Home"
              to2="/partai"
              link2="Partai"
              page3="Dewan Pimpinan"
            />
          </div>
          {/* END */}

          <div className="pengurus">
            {/* Divider */}
            <div className="divider-dewan-pimpinan">
              <MainDivider text="Dewan Pimpinan Daerah" />
            </div>
            {/* END Divider */}

            <div className="dpdTextHead">
              <h1>{configHome.name}</h1>
            </div>
            <div className="profilDpd">
              <div className="kolum1">
                <img
                  src={`https://atur.biar.pw/public/${configHome.photo_one}`}
                  alt=""
                  width="250"
                  style={{
                    height: "37vh",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "10px",
                  }}
                />
                <div className="textDpd">
                  <div className="alamat dpdText">
                    <small className="alamatText text-danger">Alamat </small>
                    <p className="namaProfil">{configHome.address}</p>
                  </div>
                  <div className="telpon dpdText">
                    <small className="smallTanggal text-danger">Telepon</small>
                    <p className="tanggal">{configHome.phone}</p>
                  </div>
                  <div className="ketua dpdText">
                    <small className="agamaHead text-danger">Ketua</small>
                    <p className="text">{configHome.ketua}</p>
                  </div>
                  <div className="sekretaris dpdText">
                    <small className="emailHead text-danger">Sekretaris</small>
                    <p className="emailText">{configHome.sekretaris}</p>
                  </div>
                  <div className="bendahara dpdText">
                    <small className="emailHead text-danger">Bendahara</small>
                    <p className="emailText">{configHome.bendahara}</p>
                  </div>
                </div>
              </div>

              <div className="kolum2">
                <div
                  className="peta"
                  style={{
                    backgroundImage: `url(https://atur.biar.pw/public/${configHome.photo_two})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="descPeta">
                  <h5 className="dpc">{`DPC PDI Perjuangan ` + nameProv}</h5>
                  {parse(configHome.description)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default Dpd;
