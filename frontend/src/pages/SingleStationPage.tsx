import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  ISingleStation } from "../types/interface";
import StationItem from "../components/StationItem";


const SingleStationPage = () => {
  const { id } = useParams<{ id: string }>();
  const [station, setStation] = useState<ISingleStation>({
    id: null,
    name: "",
    totalDepartures: 0,
    totalReturns: 0,
    avgDepartureDistance: 0,
    avgReturnDistance: 0,
    popularReturnStations: [],
    popularDepartureStations: []
  });
  

  const getStation = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/stations/${id}`
      );
      console.log(response.data);
      setStation(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStation();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
     {station &&  <StationItem station = {station}/>}
    </div>
  );
};

export default SingleStationPage;
