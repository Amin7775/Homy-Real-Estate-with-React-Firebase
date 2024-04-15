import shapeImg from "./../../../assets/img/EstatePage/Estate_Form_shape.svg";

const EstatesSearch = () => {
    return (
        <div className="w-1/4">
          <div
            className="max-w-full h-auto p-4"
            style={{ background: `url(${shapeImg})` }}
          >
            <div className="bg-white min-h-full w-full p-6 flex flex-col gap-1">
              {/* 1 */}
              <div className="w-full border-b-2  border-slate-200 pr-0  py-1 lg:py-2">
                <h1 className="text-slate-500 text-lg">Im Looking to...</h1>
                <select className="select w-full mt-1 lg:mt-3 text-xl font-medium border-slate-200 mb-2">
                  <option selected>Buy Apartment/Villa</option>
                  <option>Rent</option>
                </select>
              </div>
              {/* 2 */}
              <div className="w-full border-b-2  border-slate-200 pr-0  py-1 lg:py-2">
                <h1 className="text-slate-500 text-lg">Location</h1>
                <select className="select w-full mt-1 lg:mt-3 text-xl font-medium border-slate-200 mb-2">
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
              <div className="w-full border-b-2  border-slate-200 pr-0  py-1 lg:py-2">
                <h1 className="text-slate-500 text-lg">Price Range</h1>
                <select className="select w-full mt-1 lg:mt-3 text-xl font-medium border-slate-200 mb-2">
                  <option selected>20,000-100,000</option>
                  <option>100,000-250,000</option>
                  <option>250,000 ++ </option>
                </select>
              </div>
              {/* 4 */}
              <div className="w-full border-b-2  border-slate-200 pr-0  py-1 lg:py-2">
                <h1 className="text-slate-500 text-lg">Keywords</h1>
                <input
                  type="text"
                  placeholder="Playground,Swimming pool"
                  className="input w-full border-slate-200 mt-1 lg:mt-3 text-lg font-medium mb-2"
                />
              </div>
              {/* 5 - checkBox */}
              <div className="w-full border-b-2  border-slate-200 pr-0  py-1 lg:py-2">
                <h1 className="text-slate-500 text-lg">AMENITIES</h1>
                <div className="w-full mt-1 lg:mt-3 mb-2 grid grid-cols-2 gap-x-6 gap-y-1">
                  <label className="label cursor-pointer">
                    <span className="text-lg font-light">A/C & Heating</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="text-lg font-light">Garages</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="text-lg font-light">Garden</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="text-lg font-light">Disabled Access</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="text-lg font-light">Swimming Pool</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="text-lg font-light">Parking</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="text-lg font-light">Wifi</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="text-lg font-light">Pet Friendly</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="text-lg font-light">Fireplace</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="text-lg font-light">Play Ground</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="text-lg font-light">Elevator</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </div>
              </div>
              {/* 6 search */}
              <div className="w-full border-b-2  border-slate-200 pr-0  py-1 lg:py-2">
                <button className="w-full btn bg-custom-text-1 text-white text-2xl py-2 h-full font-semibold mb-1 hover:bg-black ">
                    Search
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default EstatesSearch;