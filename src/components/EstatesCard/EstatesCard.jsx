// import { CiSquareAlert } from "react-icons/ci";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { LuBed } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";




const EstatesCard = ({ estate }) => {
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
    <div className="bg-white p-5 rounded-3xl flex flex-col flex-grow">
      <div className="relative">
        <div className="absolute z-10   text-white text-sm top-3 left-3">
          {status == "rent" ? (
            <p className="bg-[#F46926] px-3 py-1 rounded-3xl">For {status}</p>
          ) : (
            <p className="bg-[#35B679] px-3 py-1 rounded-3xl">For {status}</p>
          )}
        </div>
        <img className="h-[400px] w-full rounded-3xl" src={Card_image} alt="" />
      </div>
      {/* text content */}
      <div className="px-2 mt-5">
        <p className="mt-5 text-2xl font-semibold">{estate_title}</p>
        <p className="text-slate-400 text-sm my-1">{estateLocation}</p>
        {/* key points */}
        <div className="flex gap-5 flex-wrap justify-between text-slate-600 my-6 font-light text-lg border-b border-dashed border-slate-300 pb-6">
          <div className="flex gap-1 items-center">
            <LiaExternalLinkSquareAltSolid className="text-xl mb-1 font-light"></LiaExternalLinkSquareAltSolid>
            <p>{area}</p>
          </div>
          <div className="flex gap-1 items-center">
            <LuBed className="text-xl mb-1 font-light"></LuBed>
            <p>{bed} bed</p>
          </div>
          <div className="flex gap-1 items-center">
            <LuBath className="text-xl mb-1 font-light"></LuBath>
            <p>{bath} bath</p>
          </div>
        </div>
        {/* price */}
        <div className="flex items-center justify-between mb-5 h-10">
            <div className="flex items-center text-2xl gap-1">
            <HiOutlineCurrencyBangladeshi  className=" text-3xl"></HiOutlineCurrencyBangladeshi >
            <p className=" font-bold">{price} </p>
            </div>
            <div>
                <Link to={`/viewdetails/${id}`}>
                <button className=" rounded-full py-4 px-4 btn h-full  bg-black hover:bg-[#F46926]">
                    <MdArrowOutward className="text-white text-xl w-full h-full"></MdArrowOutward>
                </button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EstatesCard;
