const TitleText = ({ title, description }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-center">{title}</h1>
      <p className="mt-2 md:mt-2 lg:mt-4 text-xl md:text-2xl font-light text-center text-slate-500">
        {description}
      </p>
    </div>
  );
};

export default TitleText;
