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
        <section className={styles.user}>
            <div className={styles.wrapper}>
                <h1>{user?.username}</h1>
            </div>
        </section>
    );
};

export default ProfilePage;