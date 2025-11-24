
import '../../css/custom.css';
import { Container } from 'react-bootstrap';


import Apflix from './apflix.jsx'
import MeetUp from './meetUp.jsx'
import Pokedex from './Pokedex.jsx'
import ChatApp from './chatApp.jsx';

const AllWork = () => {

    return (

        <>
            <Apflix md={3} />

            <Pokedex md={3} />

            <MeetUp md={3} />

            <ChatApp md={3} />
        </>
    )
}

export default AllWork;