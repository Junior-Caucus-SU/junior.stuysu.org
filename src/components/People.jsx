import React from "react";
import Navbar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";
import "./People.css";
import Ayla_Irshad from '../Images/people/Ayla_Irshad.jpg';
import Chenming_Fang from '../Images/people/Chenming_Fang.jpeg';
import Chloe_Wong from '../Images/people/Chloe_Wong.jpeg';
import Elias_Xu from '../Images/people/Elias_Xu.jpg';
import Emily_Li from '../Images/people/Emily_Li.jpeg';
import Ethan_Sie from '../Images/people/Ethan_Sie.jpg';
import Grace_Rhee from '../Images/people/Grace_Rhee.jpeg';
import Josephine_Gunawan from '../Images/people/Josephine_Gunawan.jpeg';
import Maegan_Diep from '../Images/people/Maegan_Diep.jpeg';
import Stacie_Au from '../Images/people/Stacie_Au.jpeg';
import Josephine_Yoo from '../Images/people/Josephine_Yoo.png';
import Will from '../Images/people/Will.jpeg';
import John from '../Images/people/John.png';

export default function People() {
  let peoplePage = (
    <div className="people-page">
      <Navbar page="People"/>
      <Texture/>
      <div className="people-page-body">
      <div className="meet-team-container">
        <div className="meet">Meet</div>
        <br />
        <div className="the-team">The Team</div>
      </div>

      <div className="presidents people-section">
        <div className="presidents-box box">
          <div className="presidents-box-text box-text">Presidents</div>
        </div>
        <div className="president person-container">
          <img src={Josephine_Yoo} alt="Josephine Yoo" />
          <div className="name">Josephine</div>
          <div className="description">the president</div>
        </div>
        <div className="president person-container">
          <img src={Grace_Rhee} alt="Grace Rhee" />
          <div className="name">Grace</div>
          <div className="description">the president</div>
        </div>
      </div>

      <div className="chiefs people-section">
        <div className="chief chief1 person-container">
          <img src={John} alt="" />
          <div className="name">John J. Wang</div>
          <div className="description">Description here...</div>
        </div>
        <div className="chief chief2 person-container">
          <img src={Ethan_Sie} alt="" />
          <div className="name">Ethan Sie</div>
          <div className="description">Description here...</div>
        </div>
        <div className="chiefs-box box">
          <div className="chiefs-box-text box-text">Chiefs of Staff</div>
        </div>
      </div>

      <div className="directors people-section">
        <div className="directors-box box">
          <div className="directors-box-text box-text">Directors</div>
        </div>
        <div className="directors-container subgroup-container">

          <div className="d_type_box">
            <div className="d_type">Events</div>
            <div className="president person-container">
                <img src={Emily_Li} alt="" />
                <div className="name">Emily Li</div>
                <div className="description">Description here...</div>
            </div>
          </div>
          
          <div className="d_type_box">
            <div className="d_type">Internals</div>
            <div className="director person-container">
                <img src={Chenming_Fang} alt="" className = "director-img"/>
                <div className="name">Chenming Fang</div>
                <div className="description">Description here...</div>
            </div>
            <div className="director person-container">
                <img src={Josephine_Gunawan} alt="" className = "director-img"/>
                <div className="name">Josephine Gunawan</div>
                <div className="description">Description here...</div>
            </div>
          </div>
        </div>
      </div>

        <div classNmae="subgroup_containerD_all">
          <div className="subgroup-containerD">
            <div className="d_type_box">
              <div className="d_type">I/T</div>
              <div className="director person-container">
                  <img src={Elias_Xu} alt="" className = "director-img"/>
                  <div className="name">Elias Xu</div>
                  <div className="description">Description here...</div>
              </div>
              <div className="director person-container">
                  <img src={Will} alt="" className = "director-img"/>
                  <div className="name">Will Zhang</div>
                  <div className="description">Description here...</div>
              </div>
            </div>
          </div>

          <div className="subgroup-containerD">
            <div className="d_type_box">
              <div className="d_type">Finance</div>
              <div className="director person-container">
                  <img src={Stacie_Au} alt="" className = "director-img"/>
                  <div className="name">Stacie Au</div>
                  <div className="description">Description here...</div>
              </div>
              <div className="director person-container">
                  <img src={Ayla_Irshad} alt="" className = "director-img"/>
                  <div className="name">Ayla Irshad</div>
                  <div className="description">Description here...</div>
              </div>
            </div>
          </div>

          <div className="subgroup-containerD">
            <div className="d_type_box">
              <div className="d_type">Graphics</div>
              <div className="director person-container">
                  <img src={Chloe_Wong} alt="" className = "director-img"/>
                  <div className="name">Chloe Wang</div>
                  <div className="description">Description here...</div>
              </div>
            </div>
            <div className="d_type_box">
              <div className="d_type">Social Media</div>
              <div className="director person-container">
                  <img src={Maegan_Diep} alt="" className = "director-img"/>
                  <div className="name">Maegan Diep</div>
                  <div className="description">Description here...</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
  return peoplePage;
}
