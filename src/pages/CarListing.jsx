import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
// import carData from "../assets/data/carData";
import axios from "axios";

// если поменять car listing --> bike listing будет car listing not defined
const CarListing = () => {
  const [bikeData, setBikeData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/bikesData").then((data) => {
      setBikeData(data.data);
    });
  }, []);
  console.log(bikeData);
  return (
    <Helmet title="Cars">
      <CommonSection title="Каталог Велосипедов" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Отсортировать по
                </span>

                <select>
                  <option>Нет Фильтра</option>
                  <option value="low">Низкая - Высокая</option>
                  <option value="high">Высокая - Низкая</option>
                </select>
              </div>
            </Col>

            {bikeData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
