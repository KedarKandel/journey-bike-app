
// Libraries and hooks
import { Routes, Route } from "react-router-dom";


// pages 
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar";
import StationsPage from "./pages/StationsPage";
import SingleStationPage from "./pages/SingleStationPage";
import SingleJourneyPage from "./pages/singleJourneyPage";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Homepage />} />
        <Route  path="/journeys/:id" element={<SingleJourneyPage />} />
        <Route  path="/stations" element={<StationsPage />} />
        <Route  path="/stations/:id" element={<SingleStationPage />} />
      </Routes>
    </>
  );
}

export default App;
