import React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import styles from "../styles/registerpage.module.css";
import { useState } from "react";
import { authServices } from '../services/auth';
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";


const RegisterPage = () => {
    const validationSchema = yup.object().shape({
        email:yup.string().required('Обязательное поле').email('Введите корректный email'),
        password: yup.string().required("Обязательное поле"),
        username: yup.string().required("Обязательное поле"),
    });

    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        username: "",
      },
      validationSchema, 
      onSubmit: async (values) => {
      try {
          const { data } = await registration(values);
          console.log(data._doc);
          toast("Добро пожаловать!")
      } catch (err) {                                                                                                                                               
          toast("Email или имя уже существует");
      }      }
    })

    const { registration } = authServices();

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Регистрация</h1>
      <form className={styles.form} onSubmit = {formik.handleSubmit} >
        <TextField
          error = {formik.errors.email}
          helperText = {formik.errors.email ? formik.errors.email : ""}
          onBlur = {formik.handleBlur}
          label="Ваш email"
          variant="filled"
          type="email"
          name = "email"
          fullWidth
          style= {{ marginBottom: "20px" }}
          value = {formik.values.email}
          onChange = {formik.handleChange}
        />
        <TextField
          label="Пароль"
          variant="filled"
          type="password"
          name = "password"
          fullWidth
          value = {formik.values.password}
          style= {{ marginBottom: "20px" }}
          error = {formik.errors.password}
          helperText = {formik.errors.password ? formik.errors.password : ""}
          onBlur = {formik.handleBlur}
          onChange = {formik.handleChange}
        />

        <TextField
          label="Имя"
          variant="filled"
          type="text"
          name = "username"
          fullWidth
          error = {formik.errors.username}
          helperText = {formik.errors.username ? formik.errors.username : ""}
          onBlur = {formik.handleBlur}
          value = {formik.values.username}
          style= {{ marginBottom: "40px" }}
          onChange = {formik.handleChange}
          
        />
        <Button
         fullWidth 
         type = "submit" 
         variant="contained"
          style = {{backgroundColor: "#228c22", fontSize: "24px"}}
         >
            Зарегистрироваться
        </Button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default RegisterPage;
