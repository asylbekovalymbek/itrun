import React from 'react';
// import TextField from "@mui/material/TextField";
import styles from "../styles/registerpage.module.css";
const RegisterPage = () => {
    return (
        <section className={styles.wrapper}>
               <h1 className={styles.title}>
                    Регистрация</h1>
               <form className={styles.from}>
               {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
               </form>
        </section>
    );
};

export default RegisterPage;