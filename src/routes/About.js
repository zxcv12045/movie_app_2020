import React from 'react';
import './About.css';

function About(props){
    console.log(props);
    return (
        <div className="about-container">
            <span>201930435 홍예연 입니다.</span>
            <span>2020.11.20</span>
        </div>
    );
}

export default About;