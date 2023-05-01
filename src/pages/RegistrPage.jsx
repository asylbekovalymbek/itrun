import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./registrpage.module.css";
import Button from "@mui/material/Button";
import { authServices } from "../../services/auth";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

const RegistrPage = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Обязательное поле")
      .email("Введите корректный email"),
    username: yup.string().required("Обязательное поле"),
    password: yup.string().required("Обязательное поле"),
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
        toast("пользователь зарегестрирован");
      } catch (err) {
        toast("Email или Имя уже существует");
      }
    },
  });

  const { registration } = authServices();

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Регистрация</h1>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField
          error={formik.errors.email}
          helperText={formik.errors.email ? formik.errors.email : ""}
          onBlur={formik.handleBlur}
          label="Ваш Email"
          variant="filled"
          type="email"
          name="email"
          fullWidth
          style={{ marginBottom: "20px" }}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextField
          label="Ваше имя"
          variant="filled"
          type="text"
          name="username"
          fullWidth
          error={formik.errors.username}
          helperText={formik.errors.username ? formik.errors.username : ""}
          onBlur={formik.handleBlur}
          style={{ marginBottom: "20px" }}
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <TextField
          label="Ваш пароль"
          variant="filled"
          type="password"
          name="password"
          error={formik.errors.password}
          helperText={formik.errors.password ? formik.errors.password : ""}
          onBlur={formik.handleBlur}
          fullWidth
          style={{ marginBottom: "40px" }}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          style={{ backgroundColor: "#BF94E8", fontSize: "24px" }}
        >
          Зарегестрироваться
        </Button>
      </form>
      <ToastContainer 
        autoClose={2000}
      />
    </section>
  );
};

export default RegistrPage;
