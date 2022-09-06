import React from 'react';
// components
import Card from './Card1';
import Card2 from './Card2';

// style
import styles from "./Landing.module.css"




const Landing = () => {
    return (
        <div className={styles.container}>
           <Card2/>
           <Card/>
           
        </div>
    );
};

export default Landing;