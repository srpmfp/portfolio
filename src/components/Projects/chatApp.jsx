
import '../../css/custom.css';
import { Card, ListGroup, Container } from "react-bootstrap";


const ChatApp = () => {

    return (
        <Card className="h-75 projectCard d-flex flex-column align-items-center">

            <Card.Img variant="top" src="/chatApp.png" className="cardImg" />

            <Card.Body>
                <Card.Title>Chat App</Card.Title>
                <Card.Text>
                    Leveraging React Native and Firebase, this Chat App enables real-time communication. It utilizes features like user authentication, message storage, and multimedia messages, as well as Google Maps location sharing.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <Card.Text style={{ 'textAlign': 'center' }}><b>Technologies</b></Card.Text>
                <div className="d-flex flex-wrap flex-row justify-content-around align-items-center">
                    <Container >
                        <ListGroup.Item>React Native</ListGroup.Item>
                        <ListGroup.Item>Firebase</ListGroup.Item>
                        <ListGroup.Item>Google Maps API</ListGroup.Item>
                    </Container>
                    <Container>
                        <ListGroup.Item>Expo</ListGroup.Item>
                        <ListGroup.Item>React Navigation</ListGroup.Item>
                        <ListGroup.Item>Redux</ListGroup.Item>
                    </Container>

                </div>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://github.com/srpmfp/chat-app">Git Hub Link</Card.Link>

                <Card.Link href="#">Live Demo</Card.Link>

            </Card.Body>

        </Card>
    );

}
export default ChatApp;