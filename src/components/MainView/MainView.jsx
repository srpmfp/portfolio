import react from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap'
import Header from '../Header/Header';

//css styling
import '../../css/custom.css';


import { BrowserRouter, Routes, Route, Navigate } from 'react-router'


//components

import HomeView from '../Home/HomeView';



const MainView = () => {



    const [page, setPage] = useState("");
    return (
        <BrowserRouter>

            <Header className="position-fixed" setPage={setPage} />
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