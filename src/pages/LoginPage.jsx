import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/registerpage.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const login = (loginData) => {
    return axios.post("https://gentle-ridge-36337.herokuapp.com/api/auth/login", loginData)
}

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userObj = {
            email,
            password
        }
        try {
            const res = await login(userObj)
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