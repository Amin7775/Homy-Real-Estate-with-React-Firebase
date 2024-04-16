import { Helmet } from "react-helmet-async";
import EstatesCard from "../../components/EstatesCard/EstatesCard";
import { getEstateData } from "../../utilities/localStorage";
import { TbMoodEmpty } from "react-icons/tb";

const Favorites = () => {
    const favoritesData = getEstateData()
    console.log(favoritesData)
  return (
    <div className="bg-[#F4EDE8] min-h-screen border-b py-10">
      <Helmet>
        <title>Homy - Favorites</title>
      </Helmet>
      <h1 className="text-4xl lg:text-6xl font-bold text-center max-w-[80%] leading-relaxed lg:max-w-[45%] mx-auto py-5">
        Favorite Estates
      </h1>
      {/* container */}
      <div className="max-w-[90%] mx-auto pt-10">
        {
            favoritesData?.length > 0 ? 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
                {
                    favoritesData?.map((singleEstate) => <EstatesCard key={singleEstate.id} estate={singleEstate}></EstatesCard>)
                }
            </div> 
            : 
            <div className="h-[55vh] flex flex-col justify-center items-center gap-2">
                <TbMoodEmpty className="text-5xl  text-center text-custom-text-2"></TbMoodEmpty>
                <h1 className="text-3xl font-light text-center max-w-[80%] leading-relaxed lg:max-w-[45%] mx-auto text-custom-text-2">Your List is Empty!</h1>
            </div>
        }
      </div>
    </div>
  );
};

export default Favorites;
