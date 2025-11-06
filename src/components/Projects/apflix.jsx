import react from "react";
import '../../css/custom.css';

import { Card, ListGroup, Container, } from "react-bootstrap";


const Apflix = () => {

    return (
        <Card className=" projectCard h-75 d-flex flex-column align-items-center">
            <Card.Img variant="top" src="/apflixImg.png" className="cardImg" />
            <Card.Body>
                <Card.Title>Apflix</Card.Title>
                <Card.Text>
                    A simple movie application that allows users to search for movies and view their details.
                    The application uses a bespoke API to fetch movie data.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <Card.Text style={{ 'textAlign': 'center' }}><b>Technologies</b></Card.Text>
                <div className="d-flex  flex-row justify-content-around align-items-center">
                    <Container >
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                        <ListGroup.Item>Netlify</ListGroup.Item>
                        <ListGroup.Item>Express</ListGroup.Item>
                    </Container>
                    <Container >

                        <ListGroup.Item>Json Web Token</ListGroup.Item>
                        <ListGroup.Item>Passport</ListGroup.Item>
                        <ListGroup.Item>Mongoose</ListGroup.Item>
                    </Container>
                </div>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://github.com/srpmfp/movie_api">Git: Movie API</Card.Link>
                <Card.Link href="https://appflixcf-d4726ef19667.herokuapp.com/documentation.html">API Documentation</Card.Link>
                <Card.Link href="https://github.com/srpmfp/Apflix">Git: Apflix</Card.Link>
                <Card.Link href="https://apflix.netlify.app/login">Project Page</Card.Link>
            </Card.Body>
        </Card>
    );

}
export default Apflix;