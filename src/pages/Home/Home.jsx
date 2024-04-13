import Header from "./HomeComponents/Header";
import IdealHome from "./HomeComponents/IdealHome/IdealHome";
import Reviews from "./HomeComponents/Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <IdealHome></IdealHome>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;