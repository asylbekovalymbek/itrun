// carlisting = bikelisting = каталог велосипедов

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import Filter from "../components/Filter/Filter";
// import carData from "../assets/data/carData";
import axios from "axios";
import { getBikes } from "../assets/data/carData";

// если поменять car listing --> bike listing будет car listing not defined
//  ==========   get запрос =================
const CarListing = () => {
  const [bikeData, setBikeData] = useState([]);
  const [sorted, setSorted] = useState("price");
  useEffect(() => {
    axios.get("http://localhost:3003/bikesData").then((data) => {
      setBikeData(data.data);
    });
  }, []);
  console.log(bikeData);

  //  ================= сортировка =========================

  useEffect(() => {
    if (sorted == "low") {
      setBikeData(bikeData.sort((a, b) => b.price - a.price));
    } else if (sorted == "high") {
      setBikeData(bikeData.sort((a, b) => a.price - b.price));
    }
  }, [sorted]);

  // =======================     сортировка  конец ================================

  return (
    <Helmet title="Bicycles">
      <CommonSection title="Каталог Велосипедов" />

      {/*================                 Фильтр      ========================================*/}
      <Filter setSorted={setSorted} sorted={sorted} />

      {/* ================================================================================= */}
      <section>
        <Container>
          <Row>
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
