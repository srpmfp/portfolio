import react from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../Header/Header';

//css styling
import '../../css/custom.css';


import { BrowserRouter, Routes, Route, Navigate } from 'react-router'


//components
import AboutView from '../About/About';
import HomeView from '../Home/HomeView';
import Apflix from '../Projects/apflix.jsx'
import MeetUp from '../Projects/meetUp.jsx'
import Pokedex from '../Projects/Pokedex.jsx'
import ChatApp from '../Projects/chatApp.jsx'


const MainView = () => {



    const [page, setPage] = useState("");
    return (
        <BrowserRouter>

            <Header className="position-fixed" setPage={setPage} />
            <div className="hexagon-background hexagon-background2 hexagon-background3 hexagon-background4">
            </div>
            <Routes>
                <Route path="/"
                    element=
                    {
                        <>

                            {page === "home" ? (<Navigate to='/home' />) :

                                (<Container fluid className="App">
                                    <HomeView />
                                </Container>

                                )}
                        </>} />
                {/* page routes removed to my hyperlink navigation. Future state to have more robust routing when necessary */}
            </Routes>

        </BrowserRouter>
    )
}

export default MainView;