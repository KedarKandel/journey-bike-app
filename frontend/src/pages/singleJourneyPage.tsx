
// Libraries and hooks
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components
import JourneyItem from "../components/JourneyItem";

//interface
import { ISingleJourney } from "../types/interface";


const SingleJourneyPage = () => {
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
        `http://localhost:5000/api/v1/journeys/${id}`
      );
      console.log(response.data);
      setJourney(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJourney();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      {journey && <JourneyItem journey = {journey}/>}
    </div>
  );
};

export default SingleJourneyPage;
