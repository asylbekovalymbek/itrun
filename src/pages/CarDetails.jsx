//  cardetalils = bikedetails = singleproductpage = один велосипед ввиде поста

import React, { useEffect, useMemo, useState } from "react";

import styles from '../styles/singleproductcard.module.css'
import { Container, Row, Col, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import { getOneBike } from "../assets/data/carData";
import { editProduct} from "../assets/data/carData"
import CarData from "../assets/data/carData"
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TextField } from "@mui/material";
import { borderRadius } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { blue } from "@mui/material/colors";




const CarDetails = () => {
  const { slug } = useParams();
  const [bikesList, setBikesList] = useState([]);
  useEffect(() => {
    getOneBike(slug).then((res) => {
      setBikesList(res);
      console.log(res)
    });

    window.scrollTo(0, 0);
  }, []);
  const bike = useMemo(() => {
    return bikesList.find((bike) => bike.carName === slug) ?? {};
  }, [bikesList]);
 



const [editMode, setEditMode] = useState(false)
const dispatch = useDispatch()
const navgate = useNavigate()

const [newPrice, setNewPrice] = useState(0)
const [newNumber, setNewNumber] = useState(0)
const [newCarName, setNewCarName] = useState('')
const [newBrand, setNewBrand] = useState('')
const [newAutomatic , setNewAutomatic] = useState('')
const [newModel , setNewModel] = useState('')
const [newRating , setNewRating] = useState('')
const [newImgURL, setNewImgURL] = useState('')
const [newDescription, setNewDescription] = useState('')

// const [carName, setCarName] = useState('');
// const [description, setDescription] = useState('');
// const [brand, setBrand] = useState('');
// const [model, setModel] = useState('');
// const [price, setPrice] = useState(0);
// const [rating, setRating] = useState('');
// const [automatic, setAutomatic] = useState('');
// const [imgUrl, setImgUrl] = useState('');
// const [bikeData, setBikeData] = useState([]);
//   const addProduct = (e) => {
//       e.preventDefault()
//       const newProduct = {
//           carName,
//           brand,
//           price,
//           automatic,
//           description,
//           model,
//           rating,
//           imgUrl
//       }
// {
//   "id": 1,
//   "brand": "Leader",
//   "rating": "Фикс",
//   "carName": "Leader 6061 Fixie",
//   "imgUrl": "https://external-preview.redd.it/ey-eheEU8mVY4n5MOfRhxccd2GbukjWf6Fp99w2EvYU.jpg?width=640&crop=smart&auto=webp&s=724b02f35d814497596b5a202a1ec27600cb60e3",
//   "model": "2020",
//   "automatic": "No Gears",
//   "price": 29500,
//   "description": " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam."
// },
const handleEdit = () => {
  const newProduct = {
    carName: newCarName,
    description: newDescription,
    imgUrl: newImgURL,
    price: newPrice,
    brand: newBrand,
    rating: newRating,
    model: newModel,
    automatic: newAutomatic,
    number: newNumber
  }
  editProduct(bike.id , newProduct)
  .then(res => {


    // ///////////////
    setEditMode(false)
    setBikesList([res.data])

    //////////////
    // servicesApi.getProduct(id).then((res) => {
    //   setProduct(res.data);

  })
  .catch(err => console.log(err))
}

// const productudalenie = () => {
//   productService
//     .deleteProduct
// }

//  //////////////////////////////
const handleEditMode = () => {
  setNewCarName(bike.carName)
  setNewDescription(bike.description)
  setNewPrice(bike.price)
  setNewImgURL(bike.imgUrl)
  setNewBrand(bike.brand)
  setNewModel(bike.model)
  setNewAutomatic(bike.automatic)
  setNewRating(bike.rating)
  setNewNumber(bike.number)
  setEditMode(true)
}




  return (
  
  
  <Helmet title={bike.carName}>
  <div className="">
  {editMode ?  (
  <div className="">
    
  <TextField 
    variant='outlined'
    label="img"
    value = {newImgURL} onChange={e => setNewImgURL(e.target.value) } 
  />
     <TextField 
    variant='outlined'
    label="title"
    value = {newCarName} onChange={e => setNewCarName(e.target.value) } 

  />
     <TextField 
    variant='outlined'
    label="description"
    value = {newDescription} onChange={e => setNewDescription(e.target.value) } 

  />
     <TextField 
    variant='outlined'
    label="price"
    value = {newPrice} onChange={e => setNewPrice(e.target.value) } 

  />
    <TextField 
    variant='outlined'
    label="automatic"
    value = {newAutomatic} onChange={e => setNewAutomatic(e.target.value) } 
  />
     <TextField 
    variant='outlined'
    label="model"
    value = {newModel} onChange={e => setNewModel(e.target.value) } 

  />
     <TextField 
    variant='outlined'
    label="category"
    value = {newRating} onChange={e => setNewRating(e.target.value) } 

  />
     <TextField 
    variant='outlined'
    label="Brand"
    value = {newBrand} onChange={e => setNewBrand(e.target.value) } 

  />
   
     <TextField 
    variant='outlined'
    label="Number"
    value = {newNumber} onChange={e => setNewNumber(e.target.value) } 

  />
  
  <Button variant = "contained" onClick={handleEdit} styles={{
     marginTop: "20px",
     padding: "7px",
     background: "blue",
     color: "#fff",
     border: "none",
     outline: "none",
     borderRadius: "5px"
  }}>Сохранить изменения</Button>
</div>
  ) : (
    <>
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
                  
                    </span>
                    Категория: {bike.rating}
                  </span>
                </div>

                <p className="section__description">
                  {bike.description}
                  </p>
                  {/* <button className={styles.add}  > 
                            Добавить в корзину
                        </button> */}
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
                  <span className=" d-flex align-items-center gap-1 section__description">
                  <i class="ri-phone-fill"
                  style={{ color: "#f9a826" }}>
                    </i>{" "}
                    {bike.number}
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
          
            </Col>
          </Row>
          {/* .contact__btn {
  padding: 7px 15px;
  background: #228c22;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px; */}

          <button className ="editBtn" onClick={handleEditMode} style={{
            marginTop: "20px",
            padding: "7px",
            background: "rgb(75, 89, 251)",
            color: "#fff",
            border: "none",
            outline: "none",
            borderRadius: "5px"
          }}>Редактировать</button> 


          <button className="deleteBtn" onClick={e => handleSubmit(bike.id)}style={{
                marginTop:"20px",
                fontSize: "32px",
                background: "#fff",
                color: "#d0312d",
                padding: "2px",
                borderRadius: "5px",
                fontSize: "0.7rem",
                width: "100%"
                }}>
                <DeleteForeverIcon />
                  <p>Удалить Продажу</p>
              </button>

        </Container>
        
      </section>
    
    </>
  )}
  </div>

</Helmet>
    






  );
  function handleSubmit(carName) {
    const conf = window.confirm("Вы хотите удалить продажу?")
    if(conf) {
      axios.delete('http://localhost:3003/bikesData/'+carName)
      .then(res => {
        alert('Продажа была удалена');
        Navigate('/bikes')
      }).catch(err => console.log(err))
    }
  }
};

export default CarDetails;
