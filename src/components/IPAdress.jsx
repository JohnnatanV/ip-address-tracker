import { useEffect, useState } from "react";
import { SearchBar, Stats } from "./index";

const IPAdress = () => {
  const [ipAdress, setIPAdress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState();
  const [coordinates, setCoordinates] = useState({});

  const fetchIP = (ipAdress = "") => {
    const API_KEY = "13707b36da8f425aa91c98b73a851abd";
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ipAdress}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIPAdress(`${data.ip}`);
        setLocation(`${data.city}, ${data.country_name}, ${data.zipcode}`);
        setTimezone(`UTC ${data.time_zone.offset}:00`);
        setIsp(`${data.isp}`);
        setCoordinates({ lat: data.latitude, lng: data.longitude });
      })
      .catch((err) => console.error(`Error, ${err}`));
  };

  //useEffect(() => {
    fetchIP();
    [];
  });

  return (
    <div className="flex flex-col h-screen relative">
      <SearchBar />
      <Stats
        ipAdress={ipAdress}
        location={location}
        timezone={timezone}
        isp={isp}
      />
    </div>
  );
};

export default IPAdress;
