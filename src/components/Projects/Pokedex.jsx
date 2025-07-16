
import { Card, ListGroup } from "react-bootstrap";
import '../../css/custom.css';


const Pokedex = () => {


    return (

        <Card className=" projectCard d-flex flex-column align-items-center ">
            <Card.Img variant="top" src="pokedeximg.png" className="cardImg" />
            <Card.Body>
                <Card.Title>Pokedex</Card.Title>
                <Card.Text>
                    A simple Pokedex application that allows users to view pokemon data through a modal.
                    The application uses the PokeAPI to fetch data and display it in a user-friendly manner.
                </Card.Text>
            </Card.Body>
            <Card.Text><b>Technologies</b></Card.Text>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Bootstrap</ListGroup.Item>
                <ListGroup.Item>Pokedex API</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>

            </ListGroup>
            <Card.Body>
                <Card.Link href="https://github.com/srpmfp/Pokedex">Git Hub Link</Card.Link>
                <Card.Link href="https://srpmfp.github.io/Pokedex/">Project Page</Card.Link>
            </Card.Body>
        </Card>
    );


}
export default Pokedex;