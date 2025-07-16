
import '../../css/custom.css';
import { Card, ListGroup } from "react-bootstrap";


const ChatApp = () => {

    return (
        <Card className=" projectCard d-flex flex-column align-items-center">

            <Card.Img variant="top" src="/chatApp.png" className="cardImg" />
            <div className="cBody">
                <Card.Body>
                    <Card.Title>Chat App</Card.Title>
                    <Card.Text>
                        Leveraging React Native and Firebase, this Chat App enables real-time communication. It utilizes features like user authentication, message storage, and multimedia messages, as well as Google Maps location sharing.
                    </Card.Text>
                </Card.Body>
                <Card.Text><b>Technologies</b></Card.Text>

                <ListGroup className="list-group-flush">
                    <ListGroup.Item>React Native</ListGroup.Item>
                    <ListGroup.Item>Firebase</ListGroup.Item>
                    <ListGroup.Item>Google Maps API</ListGroup.Item>
                    <ListGroup.Item>Expo</ListGroup.Item>
                    <ListGroup.Item>React Navigation</ListGroup.Item>
                    <ListGroup.Item>Redux</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://github.com/srpmfp/chat-app">Git Hub Link</Card.Link>

                    <Card.Link href="#">Live Demo</Card.Link>

                </Card.Body>
            </div>
        </Card>
    );

}
export default ChatApp;