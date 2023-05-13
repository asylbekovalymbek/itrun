import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "О нас",
  },

  {
    path: "/registerpage",
    display: "Зарегистрироваться",
  },

  {
    path: "/bikes",
    display: "Каталог Велосипедов",
  },
  {
    path: "/blogs",
    display: "Блог",
  },

  {
    path: "/contact",
    display: "Контакты",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                <i class="ri-riding-line"></i>
                  <span>
                    VeloChangeKG <br />
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Многое из того, кем мы являемся, возвращается туда, откуда мы родом. Velochange возникла из-за желания предоставить людям велосипеды, чтобы они могли исследовать свои районы и взаимодействовать со своими сообществами.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Ccылки</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Главный Офис</h5>
              <p className="office__info"> Бейшена Егимбаева, 145, с. Кок-Джар</p>
              <p className="office__info">Телеф: +996 702 324 666</p>

              <p className="office__info">Почта: abcdе@gmail.com</p>

              <p className="office__info"> Рабочее время: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Новости</h5>
              <p className="section__description">Подпишитесь на рассылку</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                VeloChangeKG. Все права защищены.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
