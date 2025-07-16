
import '../../css/custom.css';


import Apflix from './apflix.jsx'
import MeetUp from './meetUp.jsx'
import Pokedex from './Pokedex.jsx'
import ChatApp from './chatApp.jsx';

const AllWork = () => {

    return (
        <div className="workCont h-100 d-flex flex-row overflow-scroll ">


            <Apflix md={3} className="snapScroll" />

            <Pokedex md={3} className="snapScroll" />

            <MeetUp md={3} className="snapScroll" />

            <ChatApp md={3} className="snapScroll" />

        </div>
    )
}

export default AllWork;