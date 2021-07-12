import { Jumbotron, Container } from "react-bootstrap";
import "./MyWelcome.css"

const MyWelcome = (props) => (
    <Jumbotron fluid 
        style={{background: "linear-gradient(180deg, rgb(233, 236, 239), white)", 
        height: "10rem"}}>
        <Container>
            <h1 className="text-center pb-3 headerhover">Welcome to our Bookstore</h1>
            <h4 className="text-center headerhover">Browse through the latest {props.books[0].category} releases</h4>
        </Container>
    </Jumbotron>
)


export default MyWelcome