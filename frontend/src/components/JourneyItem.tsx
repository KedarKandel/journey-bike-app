import { ISingleJourney } from "../types/interface"


type JourneyItemProps = {
    journey: ISingleJourney
}

const JourneyItem = ({journey}: JourneyItemProps) => {
  return (
    <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold mb-4 underline text-blue-900">
      Key info on this Journey
    </h1>
    <div className="mb-4">
      <span className="font-bold mr-2 ">Departure Station:</span>
      <span className="font-semibold text-blue-900">
        {journey.departure_station_name}
      </span>
    </div>
    <div className="mb-4">
      <span className="font-semibold mr-2">Return Station:</span>
      <span className="font-semibold text-blue-900">
        {journey.return_station_name}
      </span>
    </div>
    <div className="mb-4">
      <span className="font-semibold mr-2">Distance (km):</span>
      <span className="font-semibold text-blue-900">
        {journey.distance_km}
      </span>
    </div>
    <div className="mb-4">
      <span className="font-semibold mr-2">Duration (min):</span>
      <span className="font-semibold text-blue-900">
        {journey.duration_minutes}
      </span>
    </div>
  </div>
  )
}

export default JourneyItem