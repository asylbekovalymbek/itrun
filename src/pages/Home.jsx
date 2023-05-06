import React, { useEffect, useState } from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import { getBikes } from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BlogList from "../components/UI/BlogList";
import axios from 'axios'

const Home = () => {
  const [bikeData, setBikeData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/bikesData").then((data) => {
      setBikeData(data.data);
    });
  }, []);
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                {/* <div className="find__cars-left">
                  <h2>Найди свой лучший байк здесь</h2>
                </div> */}
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="section__title">Почему мы?</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <h2 className="section__title">Каталог</h2>
            {bikeData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      {/* =============== блог =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Взгляньте на наши блоги</h6>
              <h2 className="section__title">Последние блоги</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
