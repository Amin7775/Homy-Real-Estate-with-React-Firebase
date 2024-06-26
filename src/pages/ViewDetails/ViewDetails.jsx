import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BannerViewDetails from "./ViewDetailsComponents/BannerViewDetails/BannerViewDetails";
import ViewDetailsFeature from "./ViewDetailsComponents/ViewDetailsFeatures/ViewDetailsFeature";
import { Helmet } from "react-helmet-async";

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
    <div className="min-h-screen border-b-2 " data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="500">
      <Helmet>
        <title>Homy - {`${estate_title}`} Details</title>
      </Helmet>
      {/* Banner */}
      <div className="">
        <BannerViewDetails estate={estate}></BannerViewDetails>
      </div>
      <div className="pt-32 pb-10 bg-[#FEF8F4]">
        <ViewDetailsFeature estate={estate}></ViewDetailsFeature>
      </div>
    </div>
  );
};

export default ViewDetails;
