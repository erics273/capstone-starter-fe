import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function GridCards(props) {


    let arrayOfData = [{name:"eric", photoURL:"https://s3-us-east-2.amazonaws.com/ditrainingco/wp-content/uploads/2020/11/20043911/devlogo.png"}, {name:"steve"}, {name:"sally"}, {name:"sue"}, {name:"sam"}]

    return (
        <div className="GridCards container mb-3">
            <Row xs={1} lg={3} className="g-4">
                {arrayOfData.map((person, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={person.photoURL || "http://via.placeholder.com/300"} />
                            <Card.Body>
                                <Card.Title>{person.name}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default GridCards;
