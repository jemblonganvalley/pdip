import { useStoreState } from "easy-peasy";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DropDown from "../navbar/DropDown";

export const SideMenu = () => {
  const token = useStoreState((state) => state.token);
  const [menu, setMenu] = useState();
  useEffect(() => {
    fetch("http://192.168.8.18/api/web/config/ketua-umum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hdHVyLmJpYXIucHdcL2FwaVwvYXV0aFwvYXBwIiwiaWF0IjoxNjA0NzkzNzc5LCJleHAiOjE2MDQ4ODAxNzksIm5iZiI6MTYwNDc5Mzc3OSwianRpIjoiOUNqaFQzQ00xRWdVYUZRUSIsInN1YiI6MTQsInBydiI6IjhmZjYzMGEwMGNhNGEzZWFmNmYyNTRmNWFiZTVhYjFiZWVkMjcyNDkifQ.BOJ9Uq2nDi6YaesU8Q9KYXwZHhqS5ghuGZNOq203_Bw`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.query.nav);
        console.log(menu);
      });
  }, [token]);
  return (
    <>
      {menu && (
        <aside
          className="sideMenu"
          style={{
            width: "200px",
            height: "auto",
            backgroundColor: "#c60605",
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            right: "0",
            top: "25%",
            color: "#fff",
          }}
        >
          <DropDown menuItem={Object.values(menu)} listIndex={1} />
        </aside>
      )}
    </>
  );
};
