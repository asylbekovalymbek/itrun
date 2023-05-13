import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/registerpage.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/userSlice';


const login = (loginData) => {
    return axios.post("https://gentle-ridge-36337.herokuapp.com/api/auth/login", loginData)
}

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userObj = {
            email,
            password
        }
        try {
            const res = await login(userObj)
            dispatch(loginSuccess(res.data))
            console.log(res)
            setUsername(res.data.username)
            toast("Вы успешно авторизовались")
        } catch (error) {
            toast(error.response.data)
        }
    }
    return ( 
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Логин {username}</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
            <TextField 
                    label="Ваш email" 
                    variant="filled" 
                    type="email"
                    name="email"
                    fullWidth
                    required
                    style={{ marginBottom: "20px" }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField 
                    label="Ваш пароль" 
                    variant="filled" 
                    type="password"
                    name="password"
                    fullWidth
                    required
                    style={{ marginBottom: "40px" }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button 
                    fullWidth 
                    type="submit" 
                    variant="contained"
                    style={{backgroundColor: "#228c22", fontSize: "24px"}}
                    >
                    Логин
                </Button>
            </form>
        </section>
    );
};

export default LoginPage;
// import React, { useState } from "react"; 
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import styles from "../RegistrPage/registrpage.module.css";
// import { authServicesLogin } from "../../services/auth";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import { loginSuccess } from "../../redux/userSlice";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [username, setUsername] = useState('')
//   const dispatch = useDispatch() // позволяет вызвать action
//   const user = useSelector(state => state.user.currentUser)
//   const navigate = useNavigate()
//   const validationSchema = yup.object().shape({
//     email: yup
//       .string()
//       .required("Обязательное поле")
//       .email("Введите корректный email"),
//     password: yup.string().required("Обязательное поле"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const { data } = await login(values);
//         dispatch(loginSuccess(data))
//         setUsername(data.username)
//         toast("Вы успешно авторизировались");
//         navigate("/profile")
//       } catch (err) {
//         toast(err.response.data);
//       }
//     },
//   });

//   const { login } = authServicesLogin();
//   return (
//     <section className={styles.wrapper}>
//       <h1 className={styles.title}>Логин {username}</h1>
//       <form className={styles.form} onSubmit={formik.handleSubmit}>
//         <TextField
//             error={formik.errors.email}
//             helperText={formik.errors.email ? formik.errors.email : ""}
//             onBlur={formik.handleBlur}
//           label="Ваш Email"
//           variant="filled"
//           type="email"
//           name="email"
//           fullWidth
//           style={{ marginBottom: "20px" }}
//           value={formik.values.email}
//           onChange={formik.handleChange}
//         />
//         <TextField
//           label="Ваш пароль"
//           variant="filled"
//           type="password"
//           name="password"
//             error={formik.errors.password}
//             helperText={formik.errors.password ? formik.errors.password : ""}
//             onBlur={formik.handleBlur}
//           fullWidth
//           style={{ marginBottom: "40px" }}
//           value={formik.values.password}
//           onChange={formik.handleChange}
//         />
//         <Button
//           fullWidth
//           type="submit"
//           variant="contained"
//           style={{ backgroundColor: "#BF94E8", fontSize: "24px" }}
//         >
//           Логин
//         </Button>
//       </form>
//       <ToastContainer
//         position="top-center"
//         autoClose={2000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </section>
//   );
// };

// export default LoginPage;