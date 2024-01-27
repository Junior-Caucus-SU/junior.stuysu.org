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
            </div>
            <div className="names">
                    <div className="footer-people">
                        <span className="positions-title">Design Lead</span>  <div className="positions-people"><a href="https://github.com/willpill" className="name-link will-zhang">Will Zhang</a></div>
                    </div>
                    <div className="footer-people">
                        <span className="positions-title">Development Lead</span>  <div className="positions-people"><a href="https://github.com/Elias2660" className="name-link elias-xu">Elias Xu</a></div>
                    </div>
                    <div className="footer-people">
                        <span className="positions-title">Website Team</span> <div className="positions-people"><a href="https://github.com/yellowstonepark" className="name-link otzar-jaffe">Otzar Jaffe</a>, <a href="https://github.com/connor132435" className="name-link connor-yau">Connor Yau</a>, <a href="https://github.com/muff1n0" className="name-link tony-chen">Tony Chen</a><br />
                        </div></div>
                    <div className="footer-people">
                        <span className="positions-title">Illustration</span><div className="positions-people"><a href ="https://www.instagram.com/chloepwong/" className="name-link">Chloe Wong</a></div>
                    </div>
                    <div className="footer-people">
                        <span className="positions-title">Special Thanks</span> <div className="positions-people"><a href="https://github.com/TheEgghead27" className="name-link">David Chen</a></div>
                    </div>
            </div>
            <br />
            < div className="leadership">
                The <a href="https://www.instagram.com/stuyjuniorcaucus/" className="name-link">Junior Caucus</a> is led by <a href="https://www.instagram.com/josephineyoo_/" className="name-link">Josephine Yoo</a> & <a href="https://www.instagram.com/grace.rhee/" className="name-link">Grace Rhee</a>. </ div>

            <div className="leadership">
                Chiefs of Staff <a href="https://www.instagram.com/johnjayw_/" className="name-link">John Jay Wang</a> & <a href="https://www.instagram.com/ethan.sie/" className="name-link">Ethan Sie</a>.
            </div>
            <br />
            <a href="https://stuy.enschool.org/" className="school-logo-link">
                <div className="school">
                    <img className="school-icon" src={Stuyvesant} alt="Stuyvesant" />
                    <div className="school-text">Stuyvesant High School</div>
                </div>
            </a>

        </div>
    )
}