// https://api.openweathermap.org/data/2.5/weather?q=dhanbad&appid=fc645014f5bb234a79f4f31899ab21ff
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={f2b04149da243ff7a5d18e43e19e1e1e}
import React, { useEffect, useState } from "react";
import "./style.css";
import Weathercard from "./Weathercard";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("jamshedpur");
  const [tempInfo, setTempinfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=16b8a182ec14be1b57bb9f47c1abd474`;

      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      // fetch(url)
      // .then(response => {
      //   return response.json();
      // })
      setTempinfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  });

  return (
    <>
      {/* <div className="site"><p>welcome to hardik weather site</p> </div> */}
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search...."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            search
          </button>
        </div>
      </div>
      <Weathercard tempInfo={tempInfo} />
    </>
  );
};

export default Temp;
