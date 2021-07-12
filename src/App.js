import './App.css';
import { Container } from "react-bootstrap";
import MyNavBar from "./components/MyNavBar";
import MyWelcome from "./components/MyWelcome";
import WarningSign from "./components/WarningSign";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <Container fluid>
    <MyNavBar />
    <MyWelcome books={fantasy} />
    <WarningSign text="I am an alert" />
    <BookList books={fantasy} />
    <MyFooter />
  </Container>
  );
}

export default App;
