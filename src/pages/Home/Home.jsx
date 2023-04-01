import { Container, Row, Col } from "react-bootstrap";
import image from "./images/stinky.png";
// import myGIF from "./images/penguin_gif.gif";
const Home = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={image} alt="of tyler" className="img-fluid me" />
      <Container className="welcome">
        <Row>
          <Col>
            <div className="my-5">
              <h1 className="text-center">About Me</h1>
              <p className="lead bio">
              Hey Yo Whats up im Shauna McCord, im real freakin cool and i got some mad skills with ASL....my boobs are sweet too
                {/* <img
                  src={myGIF}
                  alt="penguin coding"
                  className="img-fluid penguin zoom"
                /> */}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;