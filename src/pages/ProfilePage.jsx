import styled from '@emotion/styled';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/profilepage.module.css';

const ProfilePage = () => {
    const user = useSelector(state => state.user.currentUser)
    const navigate = useNavigate()
    useEffect(() => {
        if(!user) {
            navigate("/loginpage")
        }
    }, [])
    return (
    <div className="container">
        <h1 style= {{ textAlign: 'center', paddingBottom: '30px'}}>Профиль</h1>        
        <section style = {{ backgroundColor: '#f0f0f0',borderRadius: '10px'}}className={styles.user}>
            <div className={styles.wrapper}>
                <h2 style= {{ backgroundColor: 'white', borderRadius: '10px',padding: '20px, 15px'}}>Имя: {user?.username}</h2>
                <h2 style = {{ backgroundColor: 'white',borderRadius: '10px',padding: '20px, 15px', textAlign: ""}}>Почта: {user?.email}</h2>
            </div>
        </section>
    </div>

    );
};

export default ProfilePage;