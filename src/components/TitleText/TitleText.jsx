const TitleText = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-6xl text-center">{title}</h1>
      <p className="mt-5 text-2xl font-light text-center text-slate-500">
        {description}
      </p>
    </div>
  );
};

export default TitleText;
