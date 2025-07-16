
import { Card, ListGroup } from "react-bootstrap";
import '../../css/custom.css';

const MeetUp = () => {



    return (

        <Card className=" projectCard d-flex flex-column align-items-center">
            <Card.Img variant="top" src="meetUp.png" className="cardImg" />
            <Card.Body>
                <Card.Title>Meet Up</Card.Title>
                <Card.Text>
                    A simple calendar application that displays events from a Google Calendar.
                    it also allows users to filter by specific locations and view events in a list format.
                </Card.Text>
            </Card.Body>
            <Card.Text><b>Technologies</b></Card.Text>
            <ListGroup className="list-group-flush">

                <ListGroup.Item>oAuth</ListGroup.Item>
                <ListGroup.Item>AWS</ListGroup.Item>
                <ListGroup.Item>Google Calendar API</ListGroup.Item>
                <ListGroup.Item>Progressive Web Application</ListGroup.Item>
                <ListGroup.Item>React Bootstrap</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://github.com/srpmfp/meetup">Git Hub Link</Card.Link>
                <Card.Link href="https://meetup-tan.vercel.app/">Project Page</Card.Link>
            </Card.Body>
        </Card>
    );



}
export default MeetUp;