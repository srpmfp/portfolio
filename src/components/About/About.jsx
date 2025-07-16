import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/custom.css';

const AboutView = () => {


    return (
        
        <Container>
            <Row className="about">
                <h1>About</h1>
                <div className="m-auto p-5">
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </Row>
            <Row className="about p-3">
                <h1> "Jack of all trades, master of none, still better than a master of one."</h1>


                <Col md="auto" >
                    The majority of skills I developed are from specific needs for a project. <br />  Some of these skills are self-taught, such as the usagage of the Microsoft Power Suite, the datawarehouse, as well as  .
                    <br />


                </Col>
            </Row>
            <Row className="about">




            </Row>

        </Container>

    )
}

export default AboutView;