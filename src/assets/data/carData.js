
import axios from "axios";


const getBikes = async () => {
    const responce = await axios.get('http://localhost:3003/bikesData')
    return responce.data;   
}
const getOneBike = async (title) => {
    const responce = await axios.get('http://localhost:3003/bikesData',{
        params:{
            title
            

        }
    })
    return responce.data;   
}

export {getBikes, getOneBike};

// // import all images from assets/images directory
// import img01 from "../all-images/cars-img/fixedgear5.png";
// import img02 from "../all-images/cars-img/mtb2.png";
// import img03 from "../all-images/cars-img/kidsbike2.png";
// import img04 from "../all-images/cars-img/kidsbike3.png";
// import img05 from "../all-images/cars-img/fixedgear3.png";
// import img06 from "../all-images/cars-img/citybike3.png";
// import img07 from "../all-images/cars-img/kidsbike1.png";
// import img08 from "../all-images/cars-img/fixedgear4.png";

// const carData = [
//   {
//     id: 1,
//     brand: "Leader",
//     rating: 112,
//     carName: "Leader 6061 Fixie",
//     imgUrl: img01,
//     model: "2020",
//     automatic: "No Gears",
//     price: 50,
//     description:
//       " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
//   },

//   {
//     id: 2,
//     brand: "Azimut",
//     rating: 102,
//     carName: "Azimut Spark",
//     imgUrl: img02,
//     model: "2016",
//     automatic: "7 gear",
//     price: 50,
//     description:
//       " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
//   },

//   {
//     id: 3,
//     brand: "KidBike",
//     rating: 132,
//     carName: "JustCycle 01",
//     imgUrl: img03,
//     model: "2014",
//     automatic: "1 gear",
//     price: 65,
//     description:
//       " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
//   },

//   {
//     id: 4,
//     brand: "Matts",
//     rating: 102,
//     carName: "Merida Mats",
//     imgUrl: img04,
//     model: "2015",
//     price: 70,
//     automatic: "6 Gears",
//     description:
//       " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
//   },

//   {
//     id: 5,
//     brand: "Tsunami",
//     rating: 94,
//     carName: "Tsunami E-type ",
//     imgUrl: img05,
//     model: "2022",
//     price: 45,
//     automatic: "6 Gears",
//     description:
//       " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
//   },

//   {
//     id: 6,
//     brand: "Giant",
//     rating: 119,
//     carName: "Giant",
//     imgUrl: img06,
//     model: "2019",
//     automatic: "6 Gears",
//     price: 85,
//     description:
//       " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
//   },

//   {
//     id: 7,
//     brand: "Melas",
//     rating: 82,
//     carName: "Melas Fiesta",
//     imgUrl: img07,
//     model: "2018",
//     automatic: "4 Gears",
//     price: 50,
//     description:
//       " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
//   },

//   {
//     id: 8,
//     brand: "Engine 11",
//     rating: 52,
//     carName: "DigiCamo",
//     imgUrl: img08,
//     model: "2021",
//     automatic: "No Gears",
//     price: 50,
//     description:
//       " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
//   },
// ];

// export default carData;
