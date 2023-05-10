/** Departure,Return,Departure station id,Departure station name,Return station id,Return station name,Covered distance (m),Duration (sec.)**/

CREATE TABLE journeys (
  id SERIAL PRIMARY KEY,
  departure TIMESTAMP,
  return_info TIMESTAMP,
  departure_station_id INT,
  departure_station_name VARCHAR(255),
  return_station_id INT,
  return_station_name VARCHAR(255),
  covered_distance_m INT ,
  duration_s INT 
);



