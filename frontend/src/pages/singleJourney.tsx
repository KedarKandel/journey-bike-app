import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ISingleJourney } from "../types/interface";

type Props = {};

const SingleJourney = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const [journey, setJourney] = useState<ISingleJourney>({ departure_station_name: '', return_station_name: '', distance_km: 0, duration_minutes: 0 });

  const getJourney = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/journeys/${id}`
      );
      console.log(response.data);
      setJourney(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJourney();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
    <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Key info on this Journey</h1>
      <div className="mb-4">
        <span className="font-bold mr-2">Departure Station:</span>
        <span className="font-semibold">{journey.departure_station_name}</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold mr-2">Return Station:</span>
        <span className="font-semibold">{journey.return_station_name}</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold mr-2">Distance (km):</span>
        <span className="font-semibold">{journey.distance_km}</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold mr-2">Duration (minutes):</span>
        <span className="font-semibold">{journey.duration_minutes}</span>
      </div>
    </div>
  </div>
  
  );
};

export default SingleJourney;
