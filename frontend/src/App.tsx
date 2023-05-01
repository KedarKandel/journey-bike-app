import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar";
import SingleJourney from "./pages/singleJourney";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/journeys/:id" element={<SingleJourney />} />
      </Routes>
    </>
  );
}

export default App;
