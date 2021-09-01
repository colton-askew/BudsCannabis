import React from 'react'
import '../src/Components/Locationspage.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'react-bootstrap';

function Locations() {
    return (
        <div className="locationsPage">
            <h1>Locations, Hours & Contact Info</h1>
            .........................................................................................
            <div className="pageContent">
            <p style={{fontSize:"20px"}}>We are open 7 days a week to serve you!</p>
            <p style={{fontSize:"30px"}}>
                ​MONDAY to SATURDAY   |   10 AM to 8 PM <br />
                SUNDAY   |   11 AM to 6 PM</p>
            <p style={{fontSize:"25px"}}>
            We will be allowing a <b>maximum of 4 people in the store</b> at a time.
            <br /><br />
            Thank you for your cooperation and support.
            </p>
            .........................................................................................
            </div>
            <div className="cards">
                <Card className="locationsCards">
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title style={{fontSize:"30px"}}>BudsCannabis</Card.Title>
                    <Card.Text style={{fontSize:"20px"}}>
                    #100-6765 Veyaness Road
                    <br />
                    Saanichton, BC
                    <br /> <br />
                    Tel: 778-351-2837
                    </Card.Text>
                    <Card.Link href="https://www.google.com/maps/?q=buds%20cannabis%206765%20Veyaness%20Road%20Saanichton,%20BC" style={{fontSize:"20px"}}>Map Location</Card.Link>
                </Card.Body>
                </Card>
                <Card className="locationsCards">
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title style={{fontSize:"30px"}}>BudsCannabis</Card.Title>
                    <Card.Text style={{fontSize:"20px"}}>
                    #9775 Second Street
                    <br />
                    Sidney, BC
                    <br /> <br />
                    Tel: 778-351-4201
                    </Card.Text>
                    <Card.Link href="https://www.google.com/maps/?q=buds cannabis 9775 Second St, Sidney, BC V8L 4P8" style={{fontSize:"20px"}}>Map Location</Card.Link>
                </Card.Body>
                </Card>
            </div>
        </div>
        
    );
}

export default Locations;