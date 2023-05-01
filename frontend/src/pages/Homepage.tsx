import axios from "axios";
import { useEffect, useState } from "react";
import { Ijourney } from "../types/interface";

type Props = {};

const Homepage = (props: Props) => {
  const [journeysData, setJourneysData] = useState<Ijourney[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(50);

  const getJourneys = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/journeys/getAll?page=${currentPage}&&limit=${limit}`
      );
      console.log(response.data);
      setJourneysData(response.data.journeys);
      setTotalPages(response.data.totalPages);
      setTotalCount(response.data.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJourneys();
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex bg-slate-600">
      <table className="w-90 h-90">
        <thead>
          <tr>
            <th className="px-4 py-2">Departure</th>
            <th className="px-4 py-2">Departure Station</th>
            <th className="px-4 py-2">Departure Station ID</th>
            <th className="px-4 py-2">Return</th>
            <th className="px-4 py-2">Return Station</th>
            <th className="px-4 py-2">Return Station ID</th>
            <th className="px-4 py-2">Covered Distance (m)</th>
            <th className="px-4 py-2">Duration (sec)</th>
          </tr>
        </thead>
        <tbody>
          {journeysData.map((journey) => (
            <tr key={journey.id}>
              <td className="border px-4 py-2">
                {new Date(journey.departure).toLocaleString()}
              </td>
              <td className="border px-4 py-2">
                {journey.departure_station_name}
              </td>
              <td className="border px-4 py-2">
                {journey.departure_station_id}
              </td>
              <td className="border px-4 py-2">
                {new Date(journey.return_info).toLocaleString()}
              </td>
              <td className="border px-4 py-2">
                {journey.return_station_name}
              </td>
              <td className="border px-4 py-2">
                {journey.return_station_id}
              </td>
              <td className="border px-4 py-2">{journey.covered_distance_m}</td>
              <td className="border px-4 py-2">{journey.duration_s}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-center">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Homepage;
