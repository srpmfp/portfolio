
import { Card, ListGroup, Container } from "react-bootstrap";
import '../../css/custom.css';


const Pokedex = () => {


    return (

        <Card className="h-75 projectCard d-flex flex-column align-items-center ">
            <Card.Img variant="top" src="pokedeximg.png" className="cardImg" />
            <Card.Body>
                <Card.Title>Pokedex</Card.Title>
                <Card.Text>
                    A simple Pokedex application that allows users to view pokemon data through a modal.
                    The application uses the PokeAPI to fetch data and display it in a user-friendly manner.
                </Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
                <div className="d-flex  flex-row justify-content-around align-items-center">

                    <Container>
                        <Card.Text><b>Technologies</b></Card.Text>
                        <ListGroup.Item>Bootstrap</ListGroup.Item>
                        <ListGroup.Item>Pokedex API</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>

                    </Container>

                </div>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://github.com/srpmfp/Pokedex">Git Hub Link</Card.Link>
                <Card.Link href="https://srpmfp.github.io/Pokedex/">Project Page</Card.Link>
            </Card.Body>
        </Card>
    );


}
export default Pokedex;