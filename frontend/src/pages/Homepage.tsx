import axios from "axios";

import { useEffect, useState } from "react";
import { Ijourney } from "../types/interface";
import JourneysTable from "../components/JourneysTable";

type Props = {};

const Homepage = (props: Props) => {
  const [journeysData, setJourneysData] = useState<Ijourney[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  // const [totalCount, setTotalCount] = useState<number>();
  const [limit, setLimit] = useState<number>();

  const getJourneys = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/journeys/getAll?page=${currentPage}&&limit=${limit}`
      );
      //console.log(response.data);
      setJourneysData(response.data.journeys);
      setTotalPages(response.data.totalPages);
      // setTotalCount(response.data.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJourneys();
  }, [currentPage, limit]);

 

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
      <form  className="flex  gap-5 self-center m-5">
        <input onChange={(e)=>setLimit(parseInt(e.target.value))} type="number" min={5} placeholder="set limit per page" className="border border-r-gray-950 px-4" />
        
      </form>
      <div className="">
       {journeysData.length>0 ? <JourneysTable journeysData={journeysData} /> :<div className=" w-screen text-center text-blue-950  py-10">No journeys to display</div>}
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
