import { Link } from "react-router-dom";
import { IStation } from "../types/interface";

type JourneyTableProps = {
  stationsData: IStation[];
};

const StationsTable = ({ stationsData }: JourneyTableProps) => {
  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500 text-blue-900">
                <tr>
                  <th scope="col" className="px-6 py-4 text-center">
                    Station Id
                  </th>
                  <th scope="col" className="px-6 py-4 text-center">
                    Station Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {stationsData.length > 0 ? (
                  stationsData?.map((station) => (
                    <tr
                      key={station.station_id}
                      className="w-90 border-b dark:border-neutral-500 hover:bg-gray-100"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                        {station.station_id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                        {station.station_name}
                      </td>

                      <td className="text-blue-500 cursor-pointer font-medium">
                        <Link to={`/stations/${station.station_id}`}>
                          key info
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className=" w-screen text-center  text-red-500 py-10">Found none to display!</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationsTable;
