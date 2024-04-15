import React, { useState } from "react";
import "../style.css";
import Menu from "./menuapi.js";
import Menucarrd from "./Menucarrd.js";
import Navbar from "./navbar.js";

const uniqueList = [
  ...new Set(
    Menu.map((CurElem) => {
      //new set se unique data hi milega  and ... ye spread opertaor ha jo only array ke form me deta ha
      return CurElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Restuarnt = () => {
  const [MenuData, setMenuData] = useState(Menu); // usestate is used to manage the data and we are using hook {// console.log(MenuData);}
  const [menuList] = useState(uniqueList);

  const filteritem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((CurElem) => {
      return CurElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filteritem={filteritem} menuList={menuList} />
      <Menucarrd MenuData={MenuData} />
    </>
  ); // we are using props above for the repeattaion
};

export default Restuarnt;
