import { Container, Row, Col, Image } from "react-bootstrap";
import image from "./images/stinky.png";
import myGIF from "./images/asl.gif";
const Home = () => {
  return (
  <div className="d-flex justify-content-center">
  <Image src={image} alt="of tyler" className="img-fluid me" style={{width: "20%", borderRadius: "50%", margin: "50px"}} />
  <Container className="welcome">
    <Row>
      <Col>
        <div className="my-5">
          <h1 className="text-center">Welcome!</h1>
          <p className="lead bio">
          Welcome to Shauna McCord's Interpreter Services. As a soon to be certified American Sign Language (ASL) interpreter and Child of Deaf Adults (CODA), I am passionate about
           facilitating effective communication between Deaf and hard-of-hearing individuals and the hearing world. With over 2 years of experience 
           in providing interpretation services for a variety of settings, including medical appointments, business meetings, conferences, and more, I have developed a 
           strong reputation for my professionalism, accuracy, and cultural competence. Whether you're looking for on-site interpretation or remote video interpreting services,
            I am committed to delivering high-quality, reliable, and confidential services tailored to your unique needs. Please feel free to explore my website and contact me 
            for more information.
          </p>
          <p>Northern Essex Community College, Haverhill, Massachusetts Class of 2023</p>
          <p>Email me at : <a href="shaunaemccord@gmail.com">Shaunaemccord@gmail.com</a></p>
          <Image
            src={myGIF}
            alt="shauna mccord"
            className="img-fluid zoom mt-3"
            style={{width: "20%"}}
          />
        </div>
      </Col>
    </Row>
  </Container>
</div>
  );
};

export default Home;