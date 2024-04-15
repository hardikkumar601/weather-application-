import React from "react";

const Navbar = ({ filteritem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            // it is for menuapi so that we can add any thing in future in menuapi easily
            return (
              <button
                className="btn-group__item"
                onClick={() => filteritem(curElem)}
              >
                {curElem}{" "}
              </button>
            );
          })}
          {/* 
          <button className="btn-group__item" onClick={() => filteritem("breakfast")}> breakfast    </button>
          <button className="btn-group__item" onClick={() => filteritem("Lunch")}>lunch</button>
          <button className="btn-group__item" onClick={() => filteritem("Dinner")}>Dinner</button>
          <button className="btn-group__item" onClick={() => filteritem("Nasta")}>Nasta</button> */}
          {/* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All items </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
