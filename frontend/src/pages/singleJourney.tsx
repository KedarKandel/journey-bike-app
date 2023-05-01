import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ISingleJourney } from "../types/interface";
import JourneyItem from "../components/JourneyItem";

const SingleJourney = () => {
  const { id } = useParams<{ id: string }>();
  const [journey, setJourney] = useState<ISingleJourney>({
    departure_station_name: "",
    return_station_name: "",
    distance_km: 0,
    duration_minutes: 0,
  });

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
      <JourneyItem journey = {journey}/>
    </div>
  );
};

export default SingleJourney;
