import React from "react";
import { Link } from "react-router-dom";

const Open = () => {
  return (
    <>
      <div class="icon-bar">
        <a class="active" href="#">
          <i class="fa fa-home"></i>
        </a>
        <a href="#">
          <i class="fa fa-search"></i>
        </a>
        <a href="#">
          <i class="fa fa-envelope"></i>
        </a>
        <a href="#">
          <i class="fa fa-globe"></i>
        </a>
        <a href="#">
          <i class="fa fa-trash"></i>
        </a>
      </div>
      <div className="ram">
        <p>Welcome to Hardik Resturant</p>
        {/* {/* <div className='sita'>} */}
        <Link to="/home">
          <button className="sita ">Click Me </button>
        </Link>
      </div>
    </>
  );
};

export default Open;
