import { Navbar, Nav} from 'react-bootstrap'
import './MyNavBar.css';

const MyNavBar = () => (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#" className="navstyle">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#" className="navstyle" style={{color: "black"}}>About</Nav.Link>
      <Nav.Link href="#" className="navstyle" style={{color: "black"}}>Browse</Nav.Link>     
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default MyNavBar