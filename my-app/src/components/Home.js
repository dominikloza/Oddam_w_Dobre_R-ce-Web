import React from "react";
import HomeHeader from "./HomeHeader";
import HomeFirstSection from "./HomeFirstSection";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeFoundations from "./HomeFoundations";
import HomeContact from "./HomeContact";
import ScrollArrow from "./ScrollArrow";

function Home() {
    return (
        <>
            <ScrollArrow/>
            <HomeHeader/>
            <HomeFirstSection/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeFoundations/>
            <HomeContact/>
        </>
    )
}

export default Home;
