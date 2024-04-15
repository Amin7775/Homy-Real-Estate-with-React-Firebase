import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import EstatesCard from "../../components/EstatesCard/EstatesCard";
import EstatesSearch from "./EstatesComponents/EstatesSearch";

const Estates = () => {
  const [allEstates, setAllEstates] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/estate.json")
      .then((res) => res.json())
      .then((data) => setAllEstates(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#F4EDE8]">
      <Navbar transparent={false}></Navbar>
      {/* main */}
      <div className="max-w-[90%] mx-auto mt-6 lg:mt-24 pb-16  flex flex-col-reverse lg:flex-row  gap-12 flex-wrap">
        {/* form */}
        <EstatesSearch></EstatesSearch>
        {/* cards container*/}
        <div className="lg:flex-1 md:w-full">
          {/* text */}
          <div className="flex items-center justify-between pt-3 pb-6 px-2">
            {showAll ? (
              <p className="text-xl font-light">
                Showing{" "}
                <span className="font-medium">1-{allEstates.length}</span> of{" "}
                <span className="font-medium">{allEstates.length}</span> results
              </p>
            ) : (
              <p className="text-xl font-light">
                Showing <span className="font-medium">1-6</span> of{" "}
                <span className="font-medium">{allEstates.length}</span> results
              </p>
            )}
            <div className="flex items-center gap-2">
              <p className="text-xl font-light">Sort </p>
              <select className="select w-full mt-1 lg:mt-3 text-base font-light  rounded-3xl mb-2 bg-transparent border border-black/[.5] ">
                <option selected>Newest</option>
                <option>Best Seller</option>
                <option>Best Match</option>
                <option>Low Price</option>
                <option>High Price</option>
              </select>
            </div>
          </div>
          {/* cards */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 ">
            {showAll
              ? allEstates?.map((estate) => (
                  <EstatesCard key={estate.id} estate={estate}></EstatesCard>
                ))
              : allEstates
                  ?.slice(0, 6)
                  .map((estate) => (
                    <EstatesCard key={estate.id} estate={estate}></EstatesCard>
                  ))}
          </div>
          {/* btn */}
          <div className="flex justify-center mt-10">
            {showAll ? (
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn bg-custom-text-1 hover:bg-black text-white px-8 h-full py-1 text-lg"
              >
                View Less
              </button>
            ) : (
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn bg-custom-text-1 hover:bg-black text-white px-8 h-full py-1 text-lg"
              >
                View More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estates;
