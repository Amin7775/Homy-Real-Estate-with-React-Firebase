import Navbar from "../../../components/Navbar/Navbar";
import Topbar from "./Topbar/Topbar";

const Header = () => {
    return (
        <div>
            <Topbar></Topbar>
            <div>
            <Navbar></Navbar>
            </div>
            This is home header
        </div>
    );
};

export default Header;