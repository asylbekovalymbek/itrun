import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/aboutusbike.png";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="О нас" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Мы стремимся предоставлять решения для безопасной езды
                </h2>
                

                <p className="section__description">

                Мы стремимся предоставлять решения для безопасной езды на велосипедах, поэтому мы предлагаем высококачественное оборудование и экипировку, которые способствуют безопасности наших клиентов.   </p>
                <p className="section__description">
                Безопасность наших клиентов - наш приоритет, и мы делаем все возможное, чтобы предоставить решения, которые обеспечивают безопасность при езде на велосипеде. Приходите к нам, и мы поможем вам сделать вашу поездку на велосипеде максимально безопасной и комфортной.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>
                  <div>
                    <h6 className="section__subtitle">Нужна помощь?</h6>
                    <h4>+996 702 324 666</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      

      <section>
        <Container>
          <Row>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
