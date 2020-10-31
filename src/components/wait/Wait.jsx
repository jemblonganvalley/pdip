import React from "react";

export const Wait = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top : '0',
        left : '0',
      }}
    >
      <div class="spinner-border text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Wait;
