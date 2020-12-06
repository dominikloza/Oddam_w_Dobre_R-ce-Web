import React, {useState, useEffect} from 'react';
import decoration from '../assets/Decoration.svg'
import Foundations from "./Foundations";
import Pagination from "./Pagination";


const HomeFoundations = () => {

    const [foundations, setFoundations] = useState([
        {
            title: "Fundacja “Dbam o Zdrowie”",
            description: "Cel i Misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            title: "Fundacja “Dla dzieci”",
            description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            items: "ubrania, meble, zabawki"
        },
        {
            title: "Fundacja “Bez domu”",
            description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            items: "ubrania, jedzenie, ciepłe koce"
        },
        {
            title: "Fundacja “Dbam o Zdrowie”",
            description: "Cel i Misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            title: "Fundacja “Dla dzieci”",
            description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            items: "ubrania, meble, zabawki"
        },
        {
            title: "Fundacja “Bez domu”",
            description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            items: "ubrania, jedzenie, ciepłe koce"
        },
        {
            title: "Fundacja “Dbam o Zdrowie”",
            description: "Cel i Misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            title: "Fundacja “Dla dzieci”",
            description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            items: "ubrania, meble, zabawki"
        },
        {
            title: "Fundacja “Bez domu”",
            description: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            items: "ubrania, jedzenie, ciepłe koce"
        },
    ]);

    const [organizations] = useState([
        {
            title: "Organizacja “Lorem Ipsum 1“",
            description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            items: "Egestas, sed, tempus"
        },
        {
            title: "Organizacja “Lorem Ipsum 2“",
            description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            items: "Ut, aliquam, purus, sit, amet"
        },
        {
            title: "Organizacja “Lorem Ipsum 3“",
            description: "Scelerisque in dictum non consectetur a erat nam.",
            items: "Mi, quis, hendrerit, dolor"
        },
        {
            title: "Organizacja “Lorem Ipsum 4“",
            description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            items: "Egestas, sed, tempus"
        },
        {
            title: "Organizacja “Lorem Ipsum 5“",
            description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            items: "Ut, aliquam, purus, sit, amet"
        },
        {
            title: "Organizacja “Lorem Ipsum 6“",
            description: "Scelerisque in dictum non consectetur a erat nam.",
            items: "Mi, quis, hendrerit, dolor"
        },
    ]);

    const [local] = useState([
        {
            title: "Zbiórka “Lorem Ipsum 1“",
            description: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            items: "Egestas, sed, tempus"
        },
        {
            title: "Zbiórka “Lorem Ipsum 2“",
            description: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            items: "Ut, aliquam, purus, sit, amet"
        },
        {
            title: "Zbiórka “Lorem Ipsum 3“",
            description: "Scelerisque in dictum non consectetur a erat nam.",
            items: "Mi, quis, hendrerit, dolor"
        }
    ]);


    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3);

    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    //Get current foundation
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = foundations.slice(indexOfFirstPost, indexOfLastPost);
    const currentPostsOrg = organizations.slice(indexOfFirstPost, indexOfLastPost);
    const currentPostsLocal = local.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = (pageNumber, index, setActiveIndex) => {
        setCurrentPage(pageNumber);
        setActiveIndex(index);
    }

    const changeFound = (index) => {
        setActiveButtonIndex(index)
    }

    const buttons = [
        "Fundacjom", "Ogranizajom pozarządowym", "Lokalnym zbiórkom"
    ]


    return (
        <div className="foundations" id="foundations">
            <h1>Komu pomagamy?</h1>
            <img src={decoration} alt=""/>
            <ul className="foundations__buttons">
                {
                    buttons.map((el, index) => {
                        const classActive = activeButtonIndex === index ? "activeButton" : "null";
                        return (
                        <li className={classActive} onClick={() => changeFound(index)}>{el}</li>
                        )
                    })

                }
            </ul>
            <div className={activeButtonIndex === 0 ? "foundations__found active" : "foundations__found"}>
                <p className="foundations__descr">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                    współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują.</p>
                <Foundations foundations={currentPosts}/>
                <Pagination postPerPage={postPerPage} totalPosts={foundations.length} paginate={paginate}/>
            </div>
            <div className={activeButtonIndex === 1 ? "foundations__found active" : "foundations__found"}>
                <p className="foundations__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation.</p>
                <Foundations foundations={currentPostsOrg}/>
                <Pagination postPerPage={postPerPage} totalPosts={organizations.length} paginate={paginate}/>
            </div>
            <div className={activeButtonIndex === 2 ? "foundations__found active" : "foundations__found"}>
                <p className="foundations__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation.</p>
                <Foundations foundations={currentPostsLocal}/>
                <Pagination postPerPage={postPerPage} totalPosts={local.length} paginate={paginate}/>
            </div>

        </div>
    );
};

export default HomeFoundations;