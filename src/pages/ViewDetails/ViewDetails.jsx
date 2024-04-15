import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const ViewDetails = () => {
  const paramsData = useParams();
  const loaderData = useLoaderData();
  const [estate, setEstate] = useState({});
  //   const [data , setData] = useState({})
  //   useEffect(() => {
  //     fetch("/estate.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setEstate(data);
  //       });
  //   }, []);
  console.log(loaderData);
  useEffect(() => {
    const findEstate = loaderData?.find(
      (singleEstate) => singleEstate.id == paramsData.id
    );
    setEstate(findEstate);
  }, [loaderData]);

  const {
    estate_title,
    id,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    Cover_image,
    Card_image,
    estateLocation,
    bed,
    bath,
  } = estate;

  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      {/* Banner */}
      <div className=" h-[90vh] relative">
        {/* Img */}
        <img className="h-full w-full object-cover" src={Cover_image} alt="" />
        {/* dark effect */}
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        {/* text content */}
        <div className="absolute inset-0 h-full w-[90%] mx-auto flex flex-col justify-center items-center z-20">
          <h1 className="drop-shadow-2xl text-white text-base md:text-xl lg:text-2xl mb-3 lg:mb-4 text-wrap text-center">
            {estateLocation?.toUpperCase()}
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl drop-shadow-2xl text-white font-medium text-wrap text-center">
            - {estate_title?.toUpperCase()} -
          </h1>
        </div>
        {/* Banner Details Box */}
        <div className="absolute w-full  z-30 -bottom-28 lg:-bottom-20">
            <div className="w-[95%] lg:w-[70%] bg-[#212121] px-7 py-10 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-white font-sans gap-y-5 lg:gap-1">
                <div className="flex flex-col font-medium justify-center items-center gap-2">
                    <p className="text-lg">Name </p>
                    <p className=" text-[#FFFFFFB0]">{estate_title}</p>
                </div>
                <div className="flex flex-col font-medium justify-center items-center gap-2">
                    <p className="text-lg">Type </p>
                    <p className=" text-[#FFFFFFB0]">{segment_name}</p>
                </div>
                <div className="flex flex-col font-medium justify-center items-center gap-2">
                    <p className="text-lg">Location </p>
                    <p className=" text-[#FFFFFFB0] text-center">{location}</p>
                </div>
                <div className="flex flex-col font-medium justify-center items-center gap-2">
                    <p className="text-lg">Area </p>
                    <p className=" text-[#FFFFFFB0]">{area}</p>
                </div>
                <div className="flex flex-col font-medium justify-center items-center gap-2">
                    <p className="text-lg">Status</p>
                    <p className=" text-[#FFFFFFB0]">For {status}</p>
                </div>
                <div className="flex flex-col font-medium justify-center items-center gap-2">
                    <p className="text-lg">Price </p>
                    <p className=" text-[#FFFFFFB0]">{price}</p>
                </div>
               
            </div>
        </div>
      </div>
      <div className="my-14">dsfjds</div>
    </div>
  );
};

export default ViewDetails;
