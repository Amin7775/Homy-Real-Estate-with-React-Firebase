import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import LoginTopText from "./LoginComponents/LoginTopText";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaTwitter } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, googleLogin, twitterLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    // login
    loginUser(email, password)
      .then((result) => {
        // console.log(result.user);
        toast("Login Successful!");
        setTimeout(() => {
          navigation(location?.state ? location?.state : "/");
        }, 1500);
      })
      .catch((error) => {
        toast("Error logging in, Please try again later",error.message)
        setTimeout(() => {
          toast(error.message)
        }, 1500);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin().then(() => {
      toast("Google Login Successful!");
      setTimeout(() => {
        navigation(location?.state ? location?.state : "/");
      }, 1500);
    });
  };
  // twitter login
  const handleTwitter = () => {
    twitterLogin().then(() => {
      toast("Twitter Login Successful!");
      setTimeout(() => {
        navigation(location?.state ? location?.state : "/");
      }, 1500);
    });
  };

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="min-h-screen bg-[#F4EDE8] pb-12">
      <div className=" min-h-[95vh] rounded-3xl overflow-hidden w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto   flex justify-center items-center pt-10">
        <div className=" w-full bg-white rounded-3xl ">
          <div className="max-w-[80%] py-14 mx-auto">
            <LoginTopText></LoginTopText>
            {/* form */}
            <div className="">
              <form
                className="flex flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* email */}
                <div className="flex flex-col gap-2 mb-3">
                  <label className="text-black opacity-50 text-xl">Email</label>
                  <input
                    type="email"
                    className="border px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                    {...register("email", { required: true })}
                    placeholder="Enter Your Email Here"
                  />
                  {errors.email && <span>Please enter a valid email</span>}
                </div>
                {/* password */}
                <div className="flex flex-col gap-2 mb-4">
                  <label className="text-black opacity-50 text-xl">
                    Password
                  </label>
                  {/* password field modification */}
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="border w-full px-5 text-xl py-2 rounded-lg bg-[#F5F5F5] "
                      {...register("password", { required: true })}
                      placeholder="Enter Your Password Here"
                    />
                    {!showPassword ? (
                      <FaRegEye
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 bottom-3 text-lg text-black opacity-50 cursor-pointer"
                      ></FaRegEye>
                    ) : (
                      <FaRegEyeSlash
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 bottom-3 text-lg text-black opacity-50 cursor-pointer"
                      ></FaRegEyeSlash>
                    )}
                  </div>
                  {errors.password && <span>Invalid password</span>}
                </div>
                {/* checkbox and forget password */}
                <div className="flex justify-between mb-3">
                  {/* checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      placeholder="loggedIn"
                      {...register("loggedIn", {})}
                    />
                    <label className="text-black opacity-50 ">
                      Keep me logged in
                    </label>
                  </div>
                  {/* forget password */}
                  <p className="cursor-pointer  text-black opacity-50">
                    Forget password ?
                  </p>
                </div>
                <input
                  type="submit"
                  className="btn w-full bg-custom-text-1 hover:bg-[#F34126] py-3 h-full text-white text-2xl font-normal rounded-lg"
                  value={"Login"}
                />
              </form>
              {/* or */}
              <div className="flex items-center my-5 gap-3">
                <hr className="flex-grow border-t-2 border-slate-300" />
                <span className="">OR</span>
                <hr className="flex-grow border-t-2 border-slate-300" />
              </div>
              {/* Login with google and facebook*/}
              <div className="grid gap-4 md:gap-6 lg:gap-10 grid-cols-1 md:grid-cols-2">
                {/* google */}
                <button
                  onClick={handleGoogleLogin}
                  className="bg-transparent btn hover:bg-[#F0F0F0] text-base md:text-xl font-normal py-3 drop-shadow-sm h-full border-slate-300"
                >
                  <FcGoogle></FcGoogle>
                  Login with Google
                </button>
                {/* twitter */}
                <button
                  onClick={handleTwitter}
                  className="bg-transparent btn hover:bg-[#F0F0F0]  text-base md:text-xl font-normal py-3 drop-shadow-sm h-full border-slate-300"
                >
                  <FaTwitter className="text-[#4D9EF1]"></FaTwitter>
                  Login with twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
