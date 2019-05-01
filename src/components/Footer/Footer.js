import React from 'react';
import './Footer.css';
import Img from '../../assets/Octocat.png';

const Footer = props => (
    <div className="Footer">
        <label className="footer-text">{props.label}</label>
            <a href="https://github.com/rasikh92/React_GitUsersApp"
                target="_blank">
            <img className="img" src={Img} alt="Github Link">
            </img></a>
    </div>
);

export default Footer;