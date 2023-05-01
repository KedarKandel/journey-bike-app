export interface Ijourney {
    id: number;
    departure: Date;
    return_info: Date;
    departure_station_id: number;
    departure_station_name: string;
    return_station_id: number;
    return_station_name: string;
    covered_distance_m: number;
    duration_s: number;
  }

  export interface  ISingleJourney {
    departure_station_name: string;
    return_station_name: string;
    distance_km: number;
    duration_minutes: number;
  }
  