import React from "react";
import HomeHeader from "./HomeHeader";
import HomeFirstSection from "./HomeFirstSection";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeFoundations from "./HomeFoundations";
import HomeContact from "./HomeContact";
import ScrollArrow from "./ScrollArrow";

function Home({user, isLogged, setIsLogged}) {

    console.log(user)
    return (
        <>
            <ScrollArrow/>
            <HomeHeader user={user} isLogged={isLogged} setIsLogged={setIsLogged}/>
            <HomeFirstSection isLogged={isLogged}/>
            <HomeThreeColumns/>
            <HomeFourSteps isLogged={isLogged}/>
            <HomeAboutUs/>
            <HomeFoundations/>
            <HomeContact/>
        </>
    )
}

export default Home;
