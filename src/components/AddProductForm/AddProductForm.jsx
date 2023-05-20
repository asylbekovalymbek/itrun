import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

// const Posts 
const createPost = (newProduct) => {
  return axios.post('http://localhost:3003/bikesData', newProduct )
}
const AddProductForm = () => { 
  const [carName, setCarName] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState('');
  const [automatic, setAutomatic] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [bikeData, setBikeData] = useState([]);
    const addProduct = (e) => {
        e.preventDefault()
        const newProduct = {
            carName,
            brand,
            price,
            automatic,
            description,
            model,
            rating,
            imgUrl
        }
        createPost(newProduct)
          .then(res => setCarName(carName.concat(res.data)))
          
        
        // if(imgUrl){
        //     const imgUrlData = new FormData()
        //     // const filename = Date.now() + image.name
        //     // imageData.append("name", filename) // .appen  добавить значение/ключ в обьект formData
        //     // imageData.append("file", image)
        //     axios.post("http://localhost:3003/bikesData/imgUrl", imgUrl)
        //     .then((data) => {
        //         // setBikeData(data.data);
        //         newProduct.imgUrl = ''

        //       })
        //     .catch(err => console.log(err))
        //     }
          // axios.post("http://localhost:3003/bikesData", newProduct)
          // .then((data) => {
          //   setBikeData(data.data)
          // })
          //   .catch(err => console.log(err))
          
        }
      
 
  return (
    <form onSubmit = {addProduct}>
      <TextField
        label="Название велосипеда"
        variant="outlined"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
      />
      <TextField
        label="Производитель"
        variant="outlined"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <TextField
        label="Описание"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
        <TextField
        label="price"
        variant="outlined"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
        <TextField
        label="Год"
        variant="outlined"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
        <TextField
        label="Качество"
        variant="outlined"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
        <TextField
        label="Передачи"
        variant="outlined"
        value={automatic}
        onChange={(e) => setAutomatic(e.target.value)}
      />
       <TextField
        label="URL картинки"
        variant="outlined"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />
   
   
        <input type="submit" />
    </form>
  );
};

export default AddProductForm;

// {
//     "brand": "Matts",
//     "rating": 102,
//     "carName": "Merida Mats",
//     "imgUrl":  "https://yams.kufar.by/api/v1/kufar-ads/images/81/8111882660.jpg?rule=gallery",
//     "model": "2015",
//     "price": 7000,
//     "automatic": "6 Gears",
//     "description": " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam."
//   },


// if(image) {
//     const imageData = new FormData()
//     const filename = Date.now() + image.name
//     imageData.append("name", filename)
//     imageData.append("file", image)
    
//     axios.post("http://whispering-river-87788.herokuapp.com/api/upload", imageData)
//         .then(res => {
//             console.log(res)
//             newProduct.img = `https://whispering-river-87788.herokuapp.com/images/${filename}`
//         })
//         .catch(err => console.log(err))
// }
// }