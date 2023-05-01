import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
