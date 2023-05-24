import React, { useState } from 'react';
import styles from './filter.module.css'



const Filter = (props) => {
    
    return (
        <div className={styles.filter}>
            <div className={styles.wrapper}>
                <div className={styles["icon-wrapper"]}>
                    <img src="/images/filter-icon.png" alt="" />
                    <p className={styles["filter-text"]}>Filter</p>
                </div>
                <div className={styles.controls}>

                    <p>
                    <i class="ri-sort-asc"></i>Отсортировать по
                        <select onChange={e => props.setSorted(e.target.value)} value = {props.sorted}>
                            <option value="low">Низкая - Высокая</option>
                            <option value="high">Высокая - Низкая</option>
                      
                        </select>
                        
                    </p>    
                </div>    
            </div>
        </div>
    );
};

export default Filter;