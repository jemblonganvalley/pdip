import React from "react";
import Lottie from "react-lottie";
import under from "../../../img/under.json";

const Maintenance = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: under,
  };
  return (
    <div
      style={{
        width: "100vw !important",
        height: "100vh !important",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(162,0,0)",
        position: "fixed",
        overflowY: "hidden",
        top: 0,
      }}
    >
      <Lottie
        options={defaultOptions}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      />
    </div>
  );
};

export default Maintenance;
