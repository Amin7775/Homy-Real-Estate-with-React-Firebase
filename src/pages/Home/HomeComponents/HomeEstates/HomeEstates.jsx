import { useEffect, useState } from "react";
import EstatesCard from "../../../../components/EstatesCard/EstatesCard";
import { Link } from "react-router-dom";

const HomeEstates = () => {

    const [estates, setEstates] = useState([])

    useEffect(()=>{
        fetch('/estate.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])
  return (
    <div className="bg-[#F4EDE8] pt-32 pb-28 mt-32">
      {/* container */}
      <div className="w-[95%] mx-auto">
        {/* text content */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">New Listings</h1>
        <p className="mt-y md:mt-2 lg:mt-4 text-xl md:text-2xl   text-slate-500">
          Explore new & featured properties for sale
        </p>
        {/* cards */}
        <div className="grid grid-cols-4 gap-14 mt-20">
            {
                estates?.slice(0,8).map(estate => <EstatesCard key={estate.id} estate={estate}></EstatesCard>)
            }
        </div>
        {/* view all btn */}
        <div className="flex justify-center mt-14">
            <Link to={'/estates'}>
            <button className="bg-custom-text-1 text-white hover:bg-black tra px-8 py-3 h-full rounded-xl text-xl ease-linear duration-200">
                View All
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeEstates;
