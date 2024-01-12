import React from 'react';
import "./Footer.css";
import Facebook from "../../Images/facebook.svg";
import Instagram from "../../Images/instagram.svg";
import Stuyvesant from "../../Images/stuyvesant.png";

export default function Footer() {
    return (
        <div className="footer-banner">
            <div className="footer-content">
                <div className="icons-container">
                    <div className="icons">
                        <a href="https://www.instagram.com/stuyjuniorcaucus/?hl=en" className="logo-ref">
                            <img className="instagram-logo footer-logo-top" src={Instagram} alt="Instagram logo" />
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://www.facebook.com/StuyJuniorCaucus" className="logo-ref">
                            <img className="facebook-logo footer-logo-top" src={Facebook} alt="Facebook logo" />
                        </a>
                    </div>
                </div>
                <div className="credits">
                    <div className="positions">
                        Design Lead<br />
                        Development Lead<br />
                        Website Team<br />
                        Illustration<br />
                        Special Thanks
                    </div>
                    <div className="names">
                        <a href="https://github.com/willpill" className="name-link will-zhang">Will Zhang</a><br />
                        <a href="https://github.com/Elias2660" className="name-link elias-xu">Elias Xu</a><br />
                        <a href="https://github.com/yellowstonepark" className="name-link otzar-jaffe">Otzar Jaffe</a>, <a href="https://github.com/connor132435" className="name-link connor-yau">Connor Yau</a>, <a href="https://github.com/muff1n0" className="name-link tony-chen">Tony Chen</a><br />
                        Chloe Wong<br />
                        David Chen
                    </div>
                </div>
                < div className="leadership">
                    The Junior Caucus is led by Josephine Yoo & Grace Rhee. </ div>

                <div className="leadership">
                    With gratitudes to chiefs of staff John Jay Wang & Ethan Sie.
                </div>
                <a href="https://stuy.enschool.org/" className="school-logo-link">
                    <div className="school">
                        <img className="school-icon" src={Stuyvesant} alt="Stuyvesant" />
                        <div className="school-text">Stuyvesant High School</div>
                    </div>
                </a>

            </div>
        </div >
    )
}