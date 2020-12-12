import React, { useEffect, useState } from "react";

import "./DpdDpc.scss";
import BreadCrumbs from "../../breadcrumbs/BreadCrumbs";
import { useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import loadable from "@loadable/component";
import { Suspense } from "react";

const Wait = loadable(() => import("../../wait/Wait"));
const Maps = loadable(() => import("../../maps/Maps"));

const DpdDpc = () => {
  const refresher = useStoreState((state) => state.refresher);

  let { id } = useParams();
  const [detailPage, setDetailPage] = useState();
  const [missing, setMissing] = useState(false);

  const getDetailPage = async () => {
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
      `https://data.pdiperjuangan.id/api/blog/find/?id=${id}`,
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
    <Suspense
      fallback={
        <div>
          <Wait />
        </div>
      }
    >
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
    </Suspense>
  );
};

export default DpdDpc;
