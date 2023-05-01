import { Link } from "react-router-dom";
import { Ijourney } from "../types/interface";

type JourneyTableProps = {
  journeysData: Ijourney[];
};

const journeysTable = ({ journeysData }: JourneyTableProps) => {

  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500 text-blue-900">
                <tr>
                  <th scope="col" className="px-6 py-4 text-center">
                    Departure
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Departure Station
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Departure Station ID
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Return
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Return Station
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Return Station ID
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Covered Distance (m)
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Duration (sec)
                  </th>
                </tr>
              </thead>
              <tbody>
                {journeysData.map((journey) => (
                  
                  <tr key={journey.id} className="w-90 border-b dark:border-neutral-500 hover:bg-gray-100">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                    {new Date(journey.departure).toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                      {journey.departure_station_name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                      {journey.departure_station_id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                      {new Date(journey.return_info).toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                      {journey.return_station_name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                      {journey.return_station_id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                      {journey.covered_distance_m}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                      {journey.duration_s}
                    </td>
                    <td  className="text-blue-500 cursor-pointer font-medium">
                    <Link to={`/journeys/${journey.id}`}>
                      key info
                      </Link>
                    </td>
                  </tr>
                
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default journeysTable;
