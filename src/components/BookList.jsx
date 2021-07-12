import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { CardGroup, Container, Form, Button, Row, Col } from "react-bootstrap";

class BookList extends Component {
  
  state = {   
    query: "",
    books: []  
  };

  searchBook = (e) => {
    e.preventDefault()   
    const filteredBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.query.toLowerCase())
    );
    this.setState({        
            books: filteredBooks        
         });
  };

  render() {
    return (
      <Container fluid className="m-auto">
        <Form>
          <Form.Row>
            <Col md={3}>
              <Form.Control
                placeholder="Enter keyword"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
            </Col>
            <Col>
              <Button
                variant="secondary"
                type="submit"
                onClick={this.searchBook}
              >
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>

        <h4 className="my-5"
        >Search Results</h4>
        <Row className="my-5">
          
          { this.state.books.map((book) => (
              <Col xs={12} sm={4} md={3} lg={2}>
                <SingleBook book={book} />
              </Col>
            ))}
        </Row>

        <h4 className="my-3"> {this.props.books[0].category} </h4>
        <Row>
          <Col>
          <CardGroup>
          {this.props.books.slice(0, 11).map((book) => (
            
              
              <SingleBook book={book} />
              
            
          ))}
          </CardGroup>
          </Col>
          </Row>
      </Container>
    );
  }
}

export default BookList;
