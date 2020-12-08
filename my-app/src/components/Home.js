import React from "react";
import HomeHeader from "./HomeHeader";
import HomeFirstSection from "./HomeFirstSection";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeFoundations from "./HomeFoundations";
import HomeContact from "./HomeContact";
import ScrollArrow from "./ScrollArrow";
import Logout from "./Logout";

function Home({user, isLogged, setIsLogged}) {

    console.log(user)
    return (
        <>
            <ScrollArrow/>
            <HomeHeader user={user} isLogged={isLogged} setIsLogged={setIsLogged}/>
            <HomeFirstSection/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeFoundations/>
            <HomeContact/>
            <Logout user={user}/>
        </>
    )
}

export default Home;
