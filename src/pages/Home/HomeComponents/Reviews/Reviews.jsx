import review1 from "./../../../../assets/img/reviews/reviews1-ezgif.com-webp-to-jpg-converter.jpg";
import review2 from "./../../../../assets/img/reviews/reviews2-ezgif.com-webp-to-jpg-converter.jpg";
import review3 from "./../../../../assets/img/reviews/reviews3-ezgif.com-webp-to-jpg-converter.jpg";
import rating from "./../../../../assets/img/reviews/ratings-ezgif.com-webp-to-jpg-converter.jpg";

const Reviews = () => {
  return (
    <div className=" mx-auto relative border-b mb-10 flex justify-center">
      <div className=" container  carousel w-full h-auto lg:h-60 py-10 lg:py-0 ">
        {/* 1 */}
        <div id="item1" className="carousel-item w-full">
          <div className="flex items-center  flex-col md:flex-row gap-1 md:gap-5 w-full">
            <div className="w-full md:w-1/5 flex flex-col items-center justify-center">
              <img className="rounded-full" src={review3} alt="Review 1" />
              <p className="font-md text-2xl md:text-xl lg:text-2xl text-center">Rashed Kabir</p>
              <p className="text-slate-400 text-lg">Dhaka,BD</p>
            </div>
            <div className="w-full md:w-3/5 ">
              <p className="text-xl lg:text-4xl leading-relaxed text-center">
                Efficient, knowledgeable, & made our home search a smooth
                experience.I Highly recommend this agency!
              </p>
            </div>
            <div className="w-full md:w-1/5 flex flex-col justify-center items-center pr-0 md:pr-5 lg:pr-0">
              <img src={rating} alt="" />
              <p className="text-slate-400 text-lg mt-2">4.7 Rating</p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div id="item2" className="carousel-item w-full">
          <div className="flex items-center  flex-col md:flex-row gap-1 md:gap-5 w-full">
            <div className="w-full md:w-1/5 flex flex-col items-center justify-center">
              <img className="rounded-full" src={review2} alt="Review 1" />
              <p className="font-md text-2xl md:text-xl lg:text-2xl text-center">Sufia Rena</p>
              <p className="text-slate-400 text-lg">Dhaka,BD</p>
            </div>
            <div className="w-full md:w-3/5 ">
              <p className="text-xl lg:text-4xl leading-relaxed text-center">
                Efficient, knowledgeable, & made our home search a smooth
                experience. Highly recommended agency!
              </p>
            </div>
            <div className="w-full md:w-1/5 flex flex-col justify-center items-center pr-0 md:pr-5 lg:pr-0">
              <img src={rating} alt="" />
              <p className="text-slate-400 text-lg mt-2">4.9 Rating</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div id="item3" className="carousel-item w-full">
          <div className="flex items-center  flex-col md:flex-row gap-1 md:gap-5 w-full">
            <div className="w-full md:w-1/5 flex flex-col items-center justify-center">
              <img className="rounded-full" src={review1} alt="Review 1" />
              <p className="font-md text-2xl md:text-xl lg:text-2xl text-center">Jonathan Mile</p>
              <p className="text-slate-400 text-lg">Milan,Italy</p>
            </div>
            <div className="w-full md:w-3/5 ">
              <p className="text-xl lg:text-4xl leading-relaxed text-center">
                Efficient, knowledgeable, & made our home search a smooth
                experience. Highly recommended agency!
              </p>
            </div>
            <div className="w-full md:w-1/5 flex flex-col justify-center items-center pr-0 md:pr-5 lg:pr-0">
              <img src={rating} alt="" />
              <p className="text-slate-400 text-lg mt-2">4.7 Rating</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex justify-center w-full py-2 gap-2 absolute z-10 -bottom-5">
        <a href="#item1" className="btn btn-sm">
          1
        </a>
        <a href="#item2" className="btn btn-sm">
          2
        </a>
        <a href="#item3" className="btn btn-sm">
          3
        </a>
      </div>
    </div>
  );
};

export default Reviews;
