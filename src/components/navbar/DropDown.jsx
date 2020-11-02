import React from "react";
import "./dropDown.scss";
import { Link, NavLink } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

const DropDown = ({ menuItem, listIndex }) => {
  const setRefresher = useStoreActions((action) => action.setRefresher);

  const refresh = (pg) => {
    window.location.href = `${pg}`;
  };

  const refresh2 = () => {
    window.location.reload();
  };

  return (
    <div className="list-group dropdownMenu">
      {/* {console.log(menuItem)}
         {menuItem[listIndex].map((e,i)=>{
           console.log(e.title)
         })} */}

      <span></span>
      {menuItem[listIndex].map((e, i) => (
        <NavLink
          className="list-group-item"
          key={i}
          to={
            e.params === "siaran_langsung"
              ? "/multimedia/siaran_langsung"
              : e.params === "dokumentasi"
              ? "/multimedia/dokumentasi"
              : e.params === "teaser"
              ? "/multimedia/teaser"
              : e.params === "wawancara"
              ? "/multimedia/wawancara"
              : e.title === "Lagu Perjuangan"
              ? `/article/250/${e.title.replace(/\s/g, "-").toLowerCase()}`
              : e.title === "Lahirnya Pancasila 1 Juni 1945"
              ? "/detail-article/109/Lahirnya-Pancasila-1-Juni-1945"
              : e.title === "Foto/Gallery"
              ? "/gallery"
              : e.params === "222"
              ? `/detail-article/656/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "220"
              ? `/detail-article/624/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "216"
              ? `/detail-article/623/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "224"
              ? `/detail-article/630/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "230"
              ? `/detail-article/658/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "234"
              ? `/detail-article/841/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "27"
              ? `/detail-article/107/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "242"
              ? `/detail-article/871/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "243"
              ? `/detail-article/865/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
              : e.params === "237"
              ? `/quotes/3/${e.title.replace(/\s/g, "-").toLowerCase()}`
              : e.params === "all"
              ? `/${e.title.replace(/\s/g, "-").toLowerCase()}`
              : `/article/${e.params}/${e.title
                  .replace(/\s/g, "-")
                  .toLowerCase()}`
          }
          onClick={() => {
            setRefresher();
          }}
        >
          {e.title}
        </NavLink>
      ))}

      <div className="arrow"></div>
    </div>
  );
};

export default DropDown;
