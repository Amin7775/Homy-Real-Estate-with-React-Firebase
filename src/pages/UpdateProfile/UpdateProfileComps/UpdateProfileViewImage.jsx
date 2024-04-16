const UpdateProfileViewImage = ({ userData }) => {
  //   const { displayName, photoURL } = userData;
  return (
    <div className=" py-8">
      <img
        className="rounded-full w-48 h-48 mx-auto object-cover"
        src={userData?.photoURL}
        alt=""
      />
    </div>
  );
};

export default UpdateProfileViewImage;
