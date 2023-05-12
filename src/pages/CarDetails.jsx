import React, { useEffect, useMemo, useState } from "react";

import styles from '../styles/singleproductcard.module.css'
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import { getOneBike } from "../assets/data/carData";

const CarDetails = () => {
  const { slug } = useParams();
  const [bikesList, setBikesList] = useState([]);
  useEffect(() => {
    getOneBike(slug).then((res) => {
      setBikesList(res);
    });
    window.scrollTo(0, 0);
  }, []);
  const bike = useMemo(() => {
    return bikesList.find((bike) => bike.carName === slug) ?? {};
  }, [bikesList]);
  console.log(bike);
  return (
    <Helmet title={bike.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={bike.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{bike.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    {bike.price} cом
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({bike.rating} Рейтинг)
                  </span>
                </div>

                <p className="section__description">
                  {bike.description}
                  </p>
                  <button className={styles.add}  > 
                            Добавить в корзину
                        </button>
                        {/* onClick={() => dispatch(addToCart({...product}))} */}
                

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-time-fill" style={{ color: "#f9a826" }}></i>{" "}
                    {bike.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {bike.automatic}
                  </span>

                  {/* <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.speed}
                  </span> */}
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  {/* <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.gps}
                  </span> */}

                  {/* <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span> */}

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {bike.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Информация об обмене/продаже</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold "></h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
