import bg_img from "./../../../../assets/img/HomePage/Contact_us.svg";

const ContactUs = () => {
  return (
    <div
      className="bg-[#FEF8F4] h-[40vh] md:h-[70vh]"
      style={{
        background: `url(${bg_img})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="h-full lg:h-[90%] w-full flex flex-col justify-center items-center gap-7">
        <h1 className="max-w-[80%] lg:max-w-[50%] mx-auto text-center text-4xl md:text-7xl font-bold leading-1">
          Any Inquiry? Feel free To contact Us.
        </h1>
        <div className="">
          <button className="btn bg-black text-white hover:bg-custom-text-1 px-8 py-3 h-full text-lg">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
