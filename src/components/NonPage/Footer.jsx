import React from 'react';
import "./Footer.css";
import FooterImage from "../../Images/footer-image.svg";
import Facebook from "../../Images/facebook.svg";
import Instagram from "../../Images/instagram.svg";
import Stuyvesant from "../../Images/stuyvesant.png";

export default function Footer() {
    return (
        <div className="footer-banner">
            <img className="footer-image" src={FooterImage} alt="FooterImage" />
            <div className="footer-content">
                <div className="icons-container">
                    <div className="icons">
                        <img src={Instagram} alt="Instagram" />
                    </div>
                    <div className="icons">
                        <img src={Facebook} alt="Facebook" />
                    </div>
                </div>
                <div className="credits">
                    <div className="positions">
                        Design Lead<br/>
                        Development Lead<br/>
                        Development Team<br/>
                        Illustration & Animation<br/>
                        Photography<br/>
                        Special Thanks
                    </div>
                    <div className="names">
                        Will Zhang<br/>
                        Elias Xu<br/>
                        Otzar Jaffe, Connor Yau, Tony Chen<br/>
                        Chloe Wong<br/>
                        Someone Here<br/>
                        David Chen
                    </div>
                </div>
                <div className="leadership">
                    The Junior Caucus is led by Josephine Yoo and Grace Rhee.
                </div>
                <div className="school">
                    <img className="school-icon" src={Stuyvesant} alt="Stuyvesant" />
                    <div className="school-text">Stuyvesant High School</div>
                </div>
            </div>
        </div>
    )
}