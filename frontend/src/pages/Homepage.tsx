import axios from "axios";

import { useEffect, useState } from "react";
import { Ijourney } from "../types/interface";
import JourneysTable from "../components/JourneysTable";

type Props = {};

const Homepage = (props: Props) => {
  const [journeysData, setJourneysData] = useState<Ijourney[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  const getJourneys = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/journeys/getAll?page=${currentPage}&&limit=${limit}`
      );
      console.log(response.data);
      setJourneysData(response.data.journeys);
      setTotalPages(response.data.totalPages);
      setTotalCount(response.data.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJourneys();
  }, [currentPage]);

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
    <div className="w-screen flex flex-col px-6">
      <h1 className="text-center text-blue-900 md:text-3xl underline">
        Journey information
      </h1>
      <div className="">
        <JourneysTable journeysData={journeysData} />
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
