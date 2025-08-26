import { Col, Container, Row } from "react-bootstrap";
import Header from "../component/Header";
import BusantravelList from "../component/BusantravelList";




const Home = () =>{
    return(
    <Container>
        <Row>
            <Col>
                <Header />
            </Col>
        </Row>
        <Row>
            <Col>
                <h2 className="text-center">부산테마여행리스트</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <BusantravelList />
            </Col>
        </Row>

    </Container>
    )
}

export default Home;