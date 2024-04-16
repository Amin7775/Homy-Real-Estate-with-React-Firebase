import { useForm } from "react-hook-form";
import { useContext } from "react";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthProvider";
import UpdateProfileViewImage from "./UpdateProfileComps/UpdateProfileViewImage";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
//   const [showPassword, setShowPassword] = useState(false);
  const { auth,updateUserFromProfile } = useContext(AuthContext);

  const previousUser = auth.currentUser;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    // const phoneNumber = data.phoneNumber;
   
    // console.log(password)
    updateUserFromProfile(name,photoURL)
    .then(()=>{
      toast("Update Success!");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    })
  };

  return (
    <div className="min-h-screen bg-[#F4EDE8] pb-12">
      <Helmet>
        <title>Homy - Update Profile</title>
      </Helmet>
      <div className=" min-h-[95vh] rounded-3xl overflow-hidden w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto   flex justify-center items-center pt-10">
        <div className=" w-full bg-white rounded-3xl ">
          <div className="max-w-[80%] py-14 mx-auto">
            <div className="flex items-center  gap-3">
              <hr className="flex-grow border-t-2 border-slate-300" />
              <span className="text-2xl font-medium">Update Profile</span>
              <hr className="flex-grow border-t-2 border-slate-300" />
            </div>
            <UpdateProfileViewImage
              userData={previousUser}
            ></UpdateProfileViewImage>
            {/* form */}
            <div className="">
              <form
                className="flex flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* name */}
                <div className="flex flex-col gap-2 mb-3">
                  <label className="text-black opacity-50 text-xl">Name</label>
                  <input
                    type="text"
                    defaultValue={`${auth?.currentUser?.displayName}`}
                    className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                    {...register("name", { required: true, min: 4 })}
                  />
                </div>
                {/* photoURL */}
                <div className="flex flex-col gap-2 mb-3">
                  <label className="text-black opacity-50 text-xl">
                    Photo url
                  </label>
                  <input
                    type="text"
                    className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                    {...register("photoURL")}
                    defaultValue={`${auth?.currentUser?.photoURL}`}
                  />
                </div>
                {/* photoURL */}
                {/* <div className="flex flex-col gap-2 mb-3">
                  <label className="text-black opacity-50 text-xl">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                    {...register("phoneNumber")}
                    // placeholder={auth?.currentUser?.phoneNumber == null ? "Add Here" : undefined}
                    // defaultValue={auth?.currentUser?.phoneNumber != null ? previousUser?.phoneNumber : undefined}
                  />
                </div> */}
                

                <input
                  type="submit"
                  className="btn w-full bg-custom-text-1 hover:bg-[#F34126] py-3 h-full text-white text-2xl font-normal rounded-lg mt-1"
                  value={"Update"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
