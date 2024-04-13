import Advantages from "./HomeComponents/Advantages/Advantages";
import Header from "./HomeComponents/Header";
import IdealHome from "./HomeComponents/IdealHome/IdealHome";
import Reviews from "./HomeComponents/Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <IdealHome></IdealHome>
            <Reviews></Reviews>
            <Advantages></Advantages>
        </div>
    );
};

export default Home;