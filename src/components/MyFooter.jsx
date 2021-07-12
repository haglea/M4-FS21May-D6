import { Container, Row, Col } from "react-bootstrap";
import "./MyFooter.css";

const MyFooter = () => (
    <Container fluid style={{background: "rgb(233, 236,239)"}}>
        <Container style={{ paddingLeft: "4rem", paddingBottom: "2rem", paddingTop: "1rem"}}>
        <Row>
            <Col>
                <a href="#" style={{color: "black", textDecorationLine: "none"}}><strong>Latest Releases</strong></a>
            </Col>
            <Col>
            <a href="#" style={{color: "black", textDecorationLine: "none"}}><strong>About</strong></a>
            </Col>
            <Col>
            <a href="#" style={{color: "black", textDecorationLine: "none"}}> <strong>Account</strong></a>
            </Col>
            <Col>
            <a href="#" style={{color: "black", textDecorationLine: "none"}}> <strong>Contact Us</strong></a>
            </Col>
        </Row>
        <Row>
            <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Fantasy</a></Col>
            <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Our Story</a></Col>
            <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Sign Up</a></Col>
            <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>FAQ</a></Col>
        </Row>
        <Row>
        <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>History</a></Col>            
            <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Our Blog</a></Col>
            <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Sign In</a></Col>
            <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Help Center</a></Col>
        </Row>
        <Row>
        <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Horror</a></Col>
        <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Facebook</a></Col>
            <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Payment methods</a></Col>
            <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Contacts</a></Col>
        </Row>
        <Row>
        <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Romance</a></Col>
        <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Instagram</a></Col>
        <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Delivery methods</a></Col>
        <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Recommendations</a></Col>
        </Row>
        <Row>
            <Col><a href="#" style={{color: "black", textDecorationLine: "none"}}>Sci-fi</a></Col>
        </Row>
        </Container>
    </Container>
)

export default MyFooter