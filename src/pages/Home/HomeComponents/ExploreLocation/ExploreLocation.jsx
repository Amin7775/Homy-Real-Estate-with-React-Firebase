import { useEffect, useState } from "react";
import TitleText from "../../../../components/TitleText/TitleText";
import ExploreSlider from "./ExploreSlider";

const ExploreLocation = () => {
    const [savedLocation, setSavedLocation] = useState([]);

    useEffect(()=>{
        fetch('/location.json')
        .then(res => res.json())
        .then(data => setSavedLocation(data))
    },[])

    console.log(savedLocation)

    return (
        <div className="mb-24 mt-5">
            <TitleText title={'Explore Popular Location'} description={'Explore the latest listings & projects in diverse areas'}></TitleText>

            {/* location container */}
            <div className="my-8 md:my-10 lg:my-14">
            {
                <ExploreSlider savedLocation={savedLocation} ></ExploreSlider>
            }
            </div>
        </div>
    );
};

export default ExploreLocation;