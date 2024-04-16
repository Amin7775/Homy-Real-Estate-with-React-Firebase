import { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { RxDividerHorizontal } from "react-icons/rx";
import { getEstateData, setEstatesData } from "../../../../utilities/localStorage";
import { toast } from "react-toastify";

const ViewDetailsFeature = ({ estate }) => {
  const [showAll, setShowAll] = useState(false);
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

  const handleAddToFavorites = () =>{
    const getData = getEstateData()
    console.log("Clicked ")
    const checkEstateExists = getData?.find(singleEstate => singleEstate.id == id)

    if(checkEstateExists){
      toast("This estate already exists in favorites");
         
    }else{
      toast("Successfully added this estate in favorites");
      setEstatesData(estate)
    }
  }

  return (
    <div className="max-w-[90%] mx-auto px-2 grid grid-cols-1 lg:grid-cols-3 gap-10 pt-5 ">
      {/* left */}
      <div className="lg:col-span-2 flex flex-col gap-14 mt-5 lg:mt-0">
        {/* overview */}
        <div className="bg-white rounded-3xl p-10 drop-shadow-md">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Overview</h1>
          <p className="text-xl lg:text-2xl opacity-80 leading-8 font-light">
            {description}
          </p>
        </div>
        {/* Facilities */}
        <div className="bg-white rounded-3xl p-10 drop-shadow-md">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-5">Facilities</h1>
          <div className="grid gap-5">
            {showAll
              ? facilities?.map((list, index) => (
                  <div key={index} className=" flex items-center gap-2">
                    <RxDividerHorizontal></RxDividerHorizontal>
                    <p className="text-xl lg:text-2xl opacity-80 leading-8 font-light inline">
                      {list}
                    </p>
                  </div>
                ))
              : facilities?.slice(0,6).map((list, index) => (
                  <div key={index} className=" flex  items-center gap-2">
                    <RxDividerHorizontal className="hidden md:block"></RxDividerHorizontal>
                    <p className="text-xl lg:text-2xl opacity-80 leading-8 font-light inline">
                      {list}
                    </p>
                  </div>
                ))}
            {/* btn */}
            <div className="flex justify-center mt-5">
              {showAll ? (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="btn bg-custom-text-1 hover:bg-custom-text-2 text-white px-8 h-full py-1 text-lg"
                >
                  View Less
                </button>
              ) : (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="btn bg-custom-text-1 hover:bg-custom-text-2 text-white px-8 h-full py-1 text-lg"
                >
                  View More
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-3xl p-10 drop-shadow-md">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-5">Amenities</h1>

          <div className="flex flex-wrap gap-y-5">
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center text-2xl opacity-80 gap-1">
              <MdOutlineDone className="text-xl font-extralight" />
              <p className="text-xl font-light">Garages</p>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center text-2xl opacity-80 gap-1">
              <MdOutlineDone className="text-xl font-extralight" />
              <p className="text-xl font-light">Garden</p>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center text-2xl opacity-80 gap-1">
              <MdOutlineDone className="text-xl font-extralight" />
              <p className="text-xl font-light">Disabled Access</p>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center text-2xl opacity-80 gap-1">
              <MdOutlineDone className="text-xl font-extralight" />
              <p className="text-xl font-light">Swimming Pool</p>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center text-2xl opacity-80 gap-1">
              <MdOutlineDone className="text-xl font-extralight" />
              <p className="text-xl font-light">Parking</p>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center text-2xl opacity-80 gap-1">
              <MdOutlineDone className="text-xl font-extralight" />
              <p className="text-xl font-light">Wifi</p>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center text-2xl opacity-80 gap-1">
              <MdOutlineDone className="text-xl font-extralight" />
              <p className="text-xl font-light">Pet Friendly</p>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center text-2xl opacity-80 gap-1">
              <MdOutlineDone className="text-xl font-extralight" />
              <p className="text-xl font-light">Ceiling Height</p>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center text-2xl opacity-80 gap-1">
              <MdOutlineDone className="text-xl font-extralight" />
              <p className="text-xl font-light">Fireplace</p>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center text-2xl opacity-80 gap-1">
              <MdOutlineDone className="text-xl font-extralight" />
              <p className="text-xl font-light">Play Ground</p>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center text-2xl opacity-80 gap-1">
              <MdOutlineDone className="text-xl font-extralight" />
              <p className="text-xl font-light">Elevator</p>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col w-full gap-6">
        {/* image section */}
        <div className="bg-white p-7 rounded-3xl drop-shadow-md w-full">
          <h1 className="text-2xl font-semibold text-center mb-5">Images</h1>
          <div className="flex flex-col gap-6">
            <img
              className="w-full rounded-3xl drop-shadow-sm"
              src={Card_image}
              alt=""
            />
            <img
              className="w-full rounded-3xl drop-shadow-sm"
              src={Cover_image}
              alt=""
            />
          </div>
        </div>
        {/* add to favorites */}
        <div className="">
              <button onClick={handleAddToFavorites} className="btn bg-custom-text-1 text-xl text-white w-full h-full py-3 rounded-xl hover:bg-custom-text-2">Add To Favorites</button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsFeature;

