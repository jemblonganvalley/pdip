import React, { useState, useEffect } from "react";
import "./Timeline.scss";
import parse from 'html-react-parser'

const Timeline = ({ timeline }) => {
  let [hover, setHover] = useState();
  const [dataAgenda, setDataAgenda] = useState([])
  const [dataTimeline, setDataTimeline] = useState([])

  async function getApiData() {

    const res = await fetch('https://data.pdiperjuangan.id/api/auth/app', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            app_id: "1555309664580",
            api_secret: "4d672ce3-e422-4d8a-86ff-fabb1808a689",
        })
    })
    const data = await res.json()

    const resConfigAgenda = await fetch('https://data.pdiperjuangan.id/api/event/data', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const dataAgenda = await resConfigAgenda.json()
    setDataAgenda(dataAgenda.data)

    const resConfigEvent = await fetch('https://data.pdiperjuangan.id/api/event/find', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.token}`
        },
        body: JSON.stringify({
            "id": 13
        })
    })
    const dataConfigTimeline = await resConfigEvent.json()
    setDataTimeline(dataConfigTimeline.query)
}

useEffect(() => {
    getApiData()
}, [])

  return (
    <section className="wrapperTimeline">
      <ul className="pembungkusLine">
        {timeline.map((e, i) => {
          return (
            <li
              className="timeline-item"
              key={i}
              onClick={() => {
                setHover(i);
              }}
            >
              <div
                className="kosong"
                style={{
                  background: hover === i ? "#960001" : "#fff",
                  color: hover === i ? "#fff" : "#000",
                }}
              >
                <h6
                  className="titleline"
                  style={{
                    color: hover === i ? "#fff" : "#960001",
                  }}
                >
                  {e.author_name} | {e.created_at.split(" ")[0]}
                </h6>
                <div className="timelineContent">
                  <div
                    className="imgContent"
                    style={{
                      background: `url(https://data.pdiperjuangan.id/public/${e.path})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  ></div>
                  <div className="isiTimeline">
                    <span
                      className="headIsi"
                      style={{
                        color: hover === i ? "#fff" : "#c60605",
                      }}
                    >
                      {e.headIsi}
                    </span>
                    <h6 className="judulTimeline">{e.title}</h6>
                    <p className="paragrapTimeline">{parse(e.description)}</p>
                  </div>
                </div>
                <div className="timelineInfo">
                  <div className="tanggal">
                    <i className="fa fa-calendar-check-o"></i>
                    <span className="bulan">{e.date}</span>
                    <span className="waktu">{e.time}</span>
                  </div>

                  <div className="telphone">
                    <i className="fa fa-phone"></i>
                    <span className="nomor">081 289 376 201</span>
                  </div>

                  <div className="lokasi">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span className="kota">{e.location}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Timeline;
