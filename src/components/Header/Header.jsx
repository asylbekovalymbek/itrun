import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import styles from "../../styles/header.css";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice';
import SearchBar from "./SearchBar";
const navLinks = [
  {
    path: "/home",
    display: "Главная",
  },
  {
    path: "/about",
    display: "О нас",
  },
  {
    path: "/bikes",
    display: "Велосипеды",
  },
  {
    path: "/add",
    display: "Добавить предложение",
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


const Header = () => {
  const dispatch = useDispatch()
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const username = useSelector(state => state.user.currentUser?.username)

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
        
          <Row>
            <Col lg="6" md="6" sm="6">
            
              <div className="header__top__left">
              <p className={styles.username}> {username} </p>
                <span>По вопросам обращаться: </span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"> </i>+996-702-324-666 
                </span>
              </div>
            </Col>
          
            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">

              <Link to="/profilepage" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Профиль
                </Link>
                <Link to="/loginPage" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Логин
                </Link>

                <Link to="/registerpage" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Регистрация
                </Link>
              
                <button className="header__btn btn "  onClick={() => dispatch(logout())}>
                <span className="span_btn btn">Выйти</span>
              </button>
              

              </div>
            </Col>
            
          </Row>
          
        </Container>
        
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-riding-line"></i>
                    <span>
                      VeloChangeKG<br /> 
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Бишкек</h4>
                  <h6>Бейшена Егимбаева, 145, с. Кок-Джар</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Понед. - Воскр.</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Созвониться
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          
            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
             
                
                      {/* <SearchBar />*/}
              
         
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
