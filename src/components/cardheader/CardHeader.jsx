import React, { useEffect, useState } from 'react'
import './CardHeader.scss'

const CardHeader = ()=>{

    const [config, setConfig] = useState([]);
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
      "https://atur.biar.pw/api/web/pages/partai",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

    const dataConfigHome = await resConfigHome.json();
    // console.log(dataConfigHome.query);
    setConfig(dataConfigHome.query);
  };

  useEffect(() => {
    getConfigHome();
    window.scrollTo(0, 0);
  }, []);

    return(
        <>
        {config.length > 0 ? (
            <>
            {/* HEADERS */}
              <div
                className={`headers ${config[0].value.class}`}
                style={{
                  backgroundImage: `url(https://atur.biar.pw/public/${config[0].value.image})`,
                }}
              >
                <div className="backgrounds">
                  <div className="textBackgroundPartai">
                    <h2>{config[0].value.title}</h2>
                  </div>
                </div>
              </div>
              {/* END Headers */}
              </>
              ) : (
                <>

                </>
              )}
        </>
    )
}

export default CardHeader