import axios from "axios";
import { useEffect, useState } from "react";
import { IStation } from "../types/interface";
import StationsTable from "../components/StationsTable";

type Props = {};

const StationsPage = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [stationsData, setStationsData] = useState<IStation[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>();
  const [limit, setLimit] = useState<number>(10);
  const [userInput, setUserInput] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const getStations = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3001/api/v1/stations/getAll?page=${currentPage}&limit=${limit}&search=${search}`
      );
      console.log(response.data);
      setStationsData(response.data.stations);
      setTotalPages(response.data.totalPages);
      setTotalCount(response.data.totalCount);
      setLoading(false);
      setLimit(10)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getStations();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, search, limit]);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(userInput);
  };

  return (
    <div className="w-screen flex flex-col px-6 py-5">
      <h1 className="text-center text-blue-900 md:text-3xl">
        List of stations
      </h1>
      <form onSubmit={handleSubmit} className="flex  gap-5 self-center m-5">
        <input
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          type="text"
          placeholder="search by station name"
          className="border border-r-gray-950 px-4"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          search
        </button>
      </form>
      <div>
        <p className=" w-screen text-center  text-blue-900 py-1">
          Total stations: {totalCount}
        </p>
        <p className=" w-screen text-center  text-blue-900 py-1 underline">
          Page: {currentPage} of {totalPages}
        </p>
      </div>

      <div className="">
        {loading && (
          <div className=" w-screen text-center  py-10">Loading...</div>
        )}
        {stationsData?.length > 0 && (
          <StationsTable stationsData={stationsData} />
        )}
      </div>

      <div className="flex  gap-5 mr-10 justify-end">
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

export default StationsPage;
