// Libraries and hooks
import axios from "axios";
import { useEffect, useState } from "react";

// Components
import JourneysTable from "../components/JourneysTable";
//Interfaces
import { Ijourney } from "../types/interface";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const Homepage = () => {
  const [journeysData, setJourneysData] = useState<Ijourney[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(8);

 

  const getJourneys = async () => {
    try {
   

      // const response = await axios.get(`${API_BASE_URL}/api/v1/journeys/all?page=${currentPage}&&limit=${limit}`)
      //console.log(response.data);
      const response = await axios.get('/api/v1/journeys/all', {
        params: {
          page: currentPage,
          limit: limit
        }
      });
      setJourneysData(response.data.journeys);
      setTotalPages(response.data.totalPages);
      setTotalCount(response.data.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJourneys();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, limit]);

// Limit not more than 1000.
  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = parseInt(e.target.value);
    if (newLimit > 1000) {
      setLimit(1000);
    } else {
      setLimit(newLimit);
    }
  }

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
    <div className="w-screen flex flex-col px-6 py-5">
      
      <h1 className="text-center text-blue-900 md:text-3xl underline">
        Journey information
      </h1>
      <h3 className="text-center text-blue-900 md:text-md mt-2">
        Total Journeys: {totalCount.toLocaleString()}
      </h3>
      <form className="flex  gap-5 m-5 self-end">
        <input
          onChange={handleLimitChange}
          type="number"
          min={1}
          placeholder="set limit per page"
          className="border border-r-gray-950 px-4"
        />
      </form>
      <div className="">
        {journeysData.length > 0 ? (
          <JourneysTable journeysData={journeysData} />
        ) : (
          <div className=" w-screen text-center text-blue-950  py-10">
            No journeys to display
          </div>
        )}
      </div>

      <div className="flex  gap-5 self-center">
        <button
          onClick={prevPage}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Prev
        </button>

        <button
          onClick={nextPage}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
     
    </div>
  );
};

export default Homepage;
