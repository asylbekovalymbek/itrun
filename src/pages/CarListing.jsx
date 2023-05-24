// carlisting = bikelisting = каталог велосипедов

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import Filter from "../components/Filter/Filter";
// import carData from "../assets/data/carData";
import axios from "axios";


import SearchBar from "../components/Header/SearchBar";
// если поменять car listing --> bike listing будет car listing not defined
const getBikes = (params={}) => {
  return axios.get("http://localhost:3003/bikesData", {
    params
  })
}

const CarListing = () => {

//  ==========   get запрос =================
  const [bikeData, setBikeData] = useState([]);
  const [sorted, setSorted] = useState("price");
  const [filter, setFilter] = useState("Все")
  // const [category, setCategory] = useState("rating")
  useEffect(() => {
    let response
    if(filter === "Все"){
      response = getBikes()
    } else {
      response = getBikes({rating: filter})
    }
 
    response.then((data) => {
      setBikeData(data.data);

    });
  }, [filter]);
  console.log(bikeData);

  // const [searchKey, setSearchKey] = useState('')

  // const handleSearchSubmit = event => {
  //   event.preventDefault()
   
  //   console.log(getBikes())
  //   const filteredBikes = getBikes().filter((getBikes)=> getBikes.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
  //   console.log(filteredBikes)
  //   setBikeData(filteredBikes);
  // }
  // // const handleSearchResults=() => {
    
  // };


  // const handleClearSearch= ()=>{
  //   setBikeData(bikeData);
  //   setSearchKey('');
  // }


  useEffect(() => {
    if (sorted == "low") {
      setBikeData(bikeData.sort((a, b) => b.price - a.price));
    } else if (sorted == "high") {
      setBikeData(bikeData.sort((a, b) => a.price - b.price));
    }
 
    
  }, [sorted]);


//  postsToShow
  // const bikeDataFilter = showAll ? bikeData : bikeData.filter(BikeData => BikeData.rating)
  // console.log(bikeDataFilter)

  return (
    <div>
    <Helmet title="Bicycles">
      <CommonSection title="Каталог Велосипедов" />
    {/* кнопка опубликованные:все */}
      {/* <button onClick ={() => setShowAll(!showAll)}>Показано:  {showAll ? 'МТБ' : 'все'}</button> */}
      <select onChange={ (e) => setFilter(e.target.value)}>
        <option value="Все" >Все</option>
        <option value="Детский" >Детский</option>
        <option value="МТБ" >МТБ</option>
        <option value="Городской" >Городской</option>
        <option value="Фикс" >Фикс</option>
        <option value="Шоссейный" >Шоссейный</option>
      
      
      </select>
      <Filter setSorted={setSorted} sorted={sorted} />
      
      <section>
        <Container>
          <Row>
            {/* postsToShow.map */}
            {bikeData.map((item) => {
              return (
                <CarItem item={item} key={item.id} />
              )
            } ) }
          </Row>
        </Container>
      </section>
    </Helmet>
  </div>

  );
};

export default CarListing;











  {/* <SearchBar 
        value={searchKey}
        clearSearch = {handleClearSearch}
        formSubmit= {handleSearchSubmit} 
        handleSearchKey={e => setSearchKey(e.target.value)}/> */}