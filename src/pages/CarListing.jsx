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
const CarListing = () => {
  const [bikeData, setBikeData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/bikesData").then((data) => {
      setBikeData(data.data);
    });
  }, []);
  console.log(bikeData);

// сортировка
  useEffect(() => {
    if(sorted == "price"){
        console.log(bikeData.sort((a, b) => a.price - b.price))
    }
  }, [sorted])


  const [sorted, setSorted] = useState("price")
  return (
    <Helmet title="Bicycles">
      <CommonSection title="Каталог Велосипедов" />

      {/* Фильтр */}
      <Filter setSorted={setSorted} sorted = {sorted}/>
      
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
