import React, { useEffect, useState } from "react";

import "./DpdDpc.scss";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import { useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";

import Wait from "../../wait/Wait";
import Maps from "../../maps/Maps";

const DpdDpc = () => {
  const refresher = useStoreState((state) => state.refresher);

  let { id } = useParams();
  const [detailPage, setDetailPage] = useState();
  const [missing, setMissing] = useState(false);

  const getDetailPage = async () => {
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

    const resConfigHome = await fetch(
      `http://192.168.8.18/api/blog/find/?id=${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

    const dataConfigHome = await resConfigHome.json();
    setDetailPage(dataConfigHome.query);
  };

  useEffect(() => {
    getDetailPage();
    window.scrollTo(0, 0);
  }, [refresher]);

  return (
    <div className="wrapperBeritaPage1">
      <div className="linkedBeritaPage1">
        <BreadCrumbs
          link1="Home"
          to1="/"
          link2="Partai"
          to2="/partai"
          link3="dpd-dpc"
        />
      </div>
      <div className="maps">
        <Maps />
      </div>
    </div>
  );
};

export default DpdDpc;
