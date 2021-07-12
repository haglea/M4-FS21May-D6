import { Component } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import "./SingleBook.css"
import CommentArea from "./CommentArea";

class SingleBook extends Component {

    state = {
        selected: false
    }
  
    render() { 
      return ( 
        <div>   
          <Row>
            <Col md={6}>
          <Card 
          className="cardstyle m-3 p-3"   
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: (this.state.selected) ? "1px solid gray" : "none" }}
          >
            <Card.Link href="#">
              <Card.Img variant="top" src={this.props.book.img} className="cardimg"/>
            
            <Badge pill variant="secondary" className="badge">{this.props.book.price}</Badge>
            <Card.Body className="pt-0">
              <Card.Title>
                <small>{this.props.book.title}</small>
              </Card.Title>
            </Card.Body>
            </Card.Link>
          </Card>   
          </Col>

          <Col md={6}>
          <Card className="m-3 p-3">
          <Card.Header>Comments</Card.Header>
            <Card.Body className="m-0">
              <Card.Text>
              <CommentArea asin={this.props.book.asin} />
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>

          </Row> 
          </div>       
      );
    }
};

export default SingleBook;
