import { ISingleStation } from "../types/interface";

type JourneyItemProps = {
  station: ISingleStation;
};

const StationItem = ({ station }: JourneyItemProps) => {
  return (
    <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 underline text-blue-900">
        About this Station
      </h1>
      <div className="mb-4">
        <span className="font-bold mr-2 "> Station id:</span>
        <span className="font-semibold text-blue-900">{station.id}</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold mr-2">Station Name:</span>
        <span className="font-semibold text-blue-900">{station.name}</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold mr-2">Total Departures:</span>
        <span className="font-semibold text-blue-900">
          {station.totalDepartures}
        </span>
      </div>
      <div className="mb-4">
        <span className="font-semibold mr-2">Total Returns:</span>
        <span className="font-semibold text-blue-900">
          {station.totalReturns}
        </span>
      </div>
      <div className="mb-4">
        <span className="font-semibold mr-2">Average Departure Distance(km):</span>
        <span className="font-semibold text-blue-900">
          {station.avgDepartureDistance}
        </span>
      </div>
      <div className="mb-4">
        <span className="font-semibold mr-2">Average Return Distance(km):</span>
        <span className="font-semibold text-blue-900">
          {station.avgDepartureDistance}
        </span>
      </div>
      <div className="mb-4">
        <span className="font-semibold mr-2">Popular Return Stations:</span>
        <span className="font-semibold text-blue-900">
          <ul className="list-disc ml-5">
            {station.popularDepartureStations.map((s) => {
              return (
                <li key={s.name}>
                  <span className="font-bold">{s.count}</span> {s.name}
                </li>
              );
            })}
          </ul>
        </span>
      </div>
      <div className="mb-4">
        <span className="font-semibold mr-2">Popular Departure Stations:</span>
        <span className="font-semibold text-blue-900">
          <ul className="list-disc ml-5">
            {station.popularReturnStations.map((s) => {
              return (
                <li key={s.name}>
                  <span className="font-bold">{s.count}</span> {s.name}
                </li>
              );
            })}
          </ul>
        </span>
      </div>
    </div>
  );
};

export default StationItem;
