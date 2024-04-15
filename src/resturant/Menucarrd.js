import React from "react";

const Menucarrd = ({ MenuData }) => {
  // console.log(MenuData);
  return (
    <>
      <section className="main-card--cointainer">
        {MenuData.map((curElem) => {
          //here curelem is unique id that passses by key then it become active

          // const {id,name,category,image,description}= curElem; then remove curElem from each function. from this {curElem.id} to this {id}

          return (
            <div className="card-container" key={curElem.id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle= subtle">
                    {curElem.id}
                  </span>
                  <span className="card-author subtle">{curElem.category}</span>
                  <h2 className="card-title">{curElem.name}</h2>
                  <span className="card-description subtle">
                    {curElem.description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src={curElem.image} alt="images" className="card-media" />
                <span className="card-tag subtle">order now</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Menucarrd;
