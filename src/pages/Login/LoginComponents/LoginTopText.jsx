import { Link } from "react-router-dom";


const LoginTopText = () => {
    return (
        <>
        {/* login/Register top*/}
        <div className="grid grid-cols-2 border border-custom-text-1 w-full rounded-[40px] overflow-hidden">
              {/* login */}
              <Link to={"/login"}>
                <h1 className="text-lg md:text-xl lg:text-2xl text-center border-r p-2  py-3 border-custom-text-1 text-custom-text-1 hover:bg-[#FEF8F4]/[.2]">
                  Login
                </h1>
              </Link>
              {/* register */}
              <Link to={"/register"}>
                <h1 className="text-lg md:text-xl lg:text-2xl text-center  p-2  py-3 border-custom-text-1 bg-[#FEF8F4]  hover:bg-white">
                  Register
                </h1>
              </Link>
            </div>
            {/* Welcome Back Message */}
            <div className="mt-8 mb-6">
              <h1 className="text-4xl md:text-5xl text-center font-semibold">
                Welcome Back!
              </h1>
              <p className="text-lg md:text-2xl text-center font-light mt-3">
                Still don't have an account? 
                <Link to={"/register"}>
                  <span className="text-custom-text-1"> Register</span>
                </Link>
              </p>
            </div>
        </>
    );
};

export default LoginTopText;