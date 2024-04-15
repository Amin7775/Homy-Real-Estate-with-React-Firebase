import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BannerViewDetails from "./ViewDetailsComponents/BannerViewDetails/BannerViewDetails";

const ViewDetails = () => {
  const paramsData = useParams();
  const loaderData = useLoaderData();
  const [estate, setEstate] = useState({});

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
      <div className="">
      <BannerViewDetails estate={estate}></BannerViewDetails>

      </div>
      <div className="pt-40 pb-10 bg-[#FEF8F4]">dsfjds</div>
    </div>
  );
};

export default ViewDetails;
