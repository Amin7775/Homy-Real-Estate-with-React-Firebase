// import TitleText from "../../../../components/TitleText/TitleText";
import homeImg from "./../../../../assets/img/HomePage/idealhome.svg";
import shape from "./../../../../assets/img/HomePage/shape_ideal_home.svg";

const IdealHome = () => {
  return (
    <div
      className="bg-[#FEF8F4] h-screen"
      style={{
        background: `url(${homeImg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full md:h-[90%] lg:h-[80%] ">
        {/* title */}
        <h1 className="text-4xl lg:text-7xl font-bold text-center max-w-[80%] leading-relaxed lg:max-w-[45%] mx-auto">
          Get the ideal home for your family
        </h1>
        <p className="text-lg px-8 text-center lg:text-2xl font-light mt-3 lg:mt-6">
          We have more than 7,45,000 apartments,place & plot
        </p>
        
        {/* search bar */}
        <div
          className="flex flex-col lg:flex-row justify-center items-center w-[95%] lg:w-[70%] p-6 mt-5 lg:mt-14"
          style={{ background: `url(${shape})` }}
        >
          <div className="bg-white h-full w-full border-2 p-8 flex flex-col lg:flex-row gap-2 lg:gap-5">
            <div className="w-full lg:w-[28%] border-b-2 lg:border-b-0 lg:border-r-2 border-slate-200 pr-0 lg:pr-5 py-1 lg:py-2">
              <h1 className="text-slate-500">Im Looking to...</h1>
              <select className="select w-full max-w-full mt-1 lg:mt-3 text-xl font-medium border-slate-200">
                <option selected>Buy Apartment/Villa</option>
                <option>Sell </option>
                <option>Rent</option>
              </select>
            </div>
            {/* 2 */}
            <div className="w-full lg:w-[28%] border-b-2 lg:border-b-0 lg:border-r-2 border-slate-200 pr-0 lg:pr-5  py-1 lg:py-2">
              <h1 className="text-slate-500">Location</h1>
              <select className="select w-full max-w-full mt-1 lg:mt-3 text-xl font-medium border-slate-200">
                <option value="Dhanmondi">Dhanmondi, Dhaka</option>
                <option value="Gulshan">Gulshan, Dhaka</option>
                <option value="Banani">Banani, Dhaka</option>
                <option value="Bashundhara">Bashundhara, Dhaka</option>
                <option value="Mirpur">Mirpur, Dhaka</option>
                <option value="Mohammadpur">Mohammadpur, Dhaka</option>
                <option value="Uttara">Uttara, Dhaka</option>
              </select>
            </div>
            {/* 3 */}
            <div className="w-full lg:w-[28%] border-b-2 lg:border-b-0 lg:border-r-2 border-slate-200 pr-0 lg:pr-5 py-1 lg:py-2">
              <h1 className="text-slate-500">Price range</h1>
              <select className="select w-full max-w-full mt-1 lg:mt-3 text-xl font-medium border-slate-200">
                <option selected>20,000-100,000</option>
                <option>100,000-250,000</option>
                <option>250,000 ++ </option>
              </select>
            </div>

            <div className="flex-1">
              <div className="flex items-center h-full">
                <button className="btn w-full text-white bg-[#282828] hover:bg-[#F46926] ease-linear text-lg ">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdealHome;
