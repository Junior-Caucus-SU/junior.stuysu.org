import React, { useEffect, useRef } from "react";
import Navbar from "./NonPage/NavBar";
import CustomCursor from "./NonPage/Cursor";
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";
import "./People.css";
import Ayla_Irshad from '../Images/people/Ayla_Irshad.jpg';
import Chenming_Fang from '../Images/people/Chenming_Fang.jpg';
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
import John from '../Images/people/John.jpeg';
import Vicki_Chen from "../Images/people/Vicki_Chen.png";

export default function People() {

  useEffect(() => {
    const handleScroll = () => {
      const meetText = document.querySelector('.meet');
      const teamText = document.querySelector('.the-team');
      const screenHeight = window.innerHeight;
      const scrollY = window.scrollY;
      let transformPercentage = Math.min(scrollY / (screenHeight * 0.5), 1);
      meetText.style.transform = `translateX(${transformPercentage * 100}%)`;
      teamText.style.transform = `translateX(-${transformPercentage * 100}%)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //flying in from right
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".to-fly-from-right");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((element) => {
        console.log(element);
        if (element.isIntersecting) {
          element.target.classList.add("show");
        } else {
          element.target.classList.remove("show");
        }
      })
    })
    hiddenElements.forEach((entry) => {
      observer.observe(entry);
    })
  })

  //flying in from left
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".to-fly-from-left");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((element) => {
        console.log(element);
        if (element.isIntersecting) {
          element.target.classList.add("show");
        } else {
          element.target.classList.remove("show");
        }
      })
    })
    hiddenElements.forEach((entry) => {
      observer.observe(entry);
    })
  })

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".to-fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((element) => {
        console.log(element);
        if (element.isIntersecting) {
          element.target.classList.add("show");
        } else {
          element.target.classList.remove("show");
        }
      })
    })
    hiddenElements.forEach((entry) => {
      observer.observe(entry);
    })
  })

  const pres1Ref = useRef(null);
  const pres2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      [pres1Ref, pres2Ref].forEach(ref => {
        if (ref.current) {
          // Calculate the width of the screen
          //let screenWidth = window.innerWidth;

          // Calculate the zoom level
          let zoom = calculateZoom(ref.current);

          // Transform
          ref.current.style.transform = `scale(${zoom})`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it once initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  let peoplePage = (
    <div className="people-page">
      <CustomCursor />
      <Navbar page="People" />
      <Texture />
      <div className="people-page-body">
        <div className="meet-team-container">
          <div className="meet">Meet</div>
          <br />
          <div className="the-team">The Team</div>
        </div>

        <div className="presidents people-section">
          <div className="to-fade-in">
            <div className="presidents-box box">
              <div className="presidents-box-text box-text">Presidents</div>
            </div>
          </div>
          <div className="president person-container pres1 to-fly-from-right"  >
            <div className="image_box">
              <img src={Josephine_Yoo} alt="Josephine Yoo" ref={pres1Ref} className="president-image" />
            </div>
            <div className="name">Josephine</div>
            <div className="description to-fade-in">
              Hi everyone! I'm Josephine, one of your Co-Presidents this year, and I'm so excited to be working with you all to make the most of our junior year! One of my biggest goals for the year are to make sure there's constant and clear communication between the Junior Caucus and the student body. We want to make sure that your voices are heard and taken into consideration! Whether your worries are about college or general high school lifestyle, I hope to alleviate your stress and foster a positive and supportive junior student body. A fun fact about me is that I once dropped my phone in pasta sauce trying to take a picture of my food! 🍽
            </div>
          </div>
          <div className="president person-container pres2 to-fly-from-right"  >
            <div className="image_box">
              <img src={Grace_Rhee} alt="Grace Rhee" ref={pres2Ref} className="president-image" /></div>
            <div className="name">Grace</div>
            <div className="description">
              Hi! I'm Grace, and it is my pleasure to be your Junior Caucus co-president this year. I am super excited to work with everybody to bring you the best Junior year possible! My biggest goal this year is to make this year less stressful and more enjoyable. This includes planning an affordable and exciting JProm and providing the most relatable and accessible resources for both general academics and college! One fun fact about me is that I love to go try different restaurants’ nachos around the city! 🌮
            </div>
          </div>
        </div>

        <div className="chiefs people-section">
          <div className="chief chief1 person-container to-fly-from-left">
            <img src={John} alt="" />
            <div className="name">John J. Wang</div>
            <div className="description">
              Hi! I’m John Jay, and I’m so excited to be working as the Chief of Staff! My goals this year are to help plan the best Junior Prom possible, help guide the junior grade through courses and tests, and provide accessible college resources, amidst all the junior year stress. We want your voices to be heard, and with your help, we hope to make this year the best year for all of our juniors! We can’t wait to work with you all! One fun fact about me is that I can play three instruments.
            </div>
          </div>
          <div className="chief chief2 person-container to-fly-from-left">
            <img src={Ethan_Sie} alt="" />
            <div className="name">Ethan Sie</div>
            <div className="description">
              Hey! I’m Ethan, and I work as one of the Chiefs of Staff alongside John Jay. I can’t wait to get started on all of the projects we have planned for this year, and I hope you guys are excited for everything to come (especially Jprom!). In my free time, I like to play my Saxophone, and I'm still working on 3D modeling and building a lightsaber (if I ever get around to it). Stay tuned for more fun events, internals resources/guides, and college events!
            </div>
          </div>
          <div className="chiefs-box box">
            <div className="to-fade-in">
              <div className="chiefs-box-text box-text">Chiefs <i>of</i> Staff</div>
            </div>
          </div>
        </div>

        <div className="directors people-section">
          <div className="to-fade-in">
            <div className="directors-box box">
              <div className="directors-box-text box-text">Directors</div>
            </div>
          </div>
          <div className="directors-container subgroup-container">

            <div className="director person-container emily to-fly-from-right">
              <div className="d_type_image">
                <div className="d_type">Events</div>
                <img src={Emily_Li} alt="" />
              </div>
              <div className="nameAndDescription">
                <div className="name">Emily Li</div>
                <div className="description">
                  Hello! I’m Emily, director of events for Junior Caucus. I love eating at new restaurants, taking pretty pictures and listening to music. I run on the XC and track and field team. Lastly, I am very excited to help plan this year’s events and J-Prom.
                </div>
              </div>
            </div>



            <div className="subgroup_containerD_all">
              <div className="subgroup-containerD">
                <div className="d_type_box">
                  <div className="director person-container chenming to-fly-from-left">
                    <div className="d_type">Internals</div>
                    <img src={Chenming_Fang} alt="" className="director-img" />
                    <div className="name">Chenming Fang</div>
                    <div className="description">
                      Hi I'm Chenming, co-director for Internals Department. I like exercising and discovering new music and food. I run long distance for track and cross country. I'm excited to help in creating more useful resources for everyone!
                    </div>
                  </div>
                  <div className="director person-container to-fly-from-right">
                    <img src={Josephine_Gunawan} alt="" className="director-img" />
                    <div className="name">Josephine Gunawan</div>
                    <div className="description">
                      Hi, I'm Josephine, and I am so excited to be one of your Internals Directors this year! I love literature and history, but when I have free time, my favorite thing to do is bake pecan pie tarts.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="subgroup-containerD">
              <div className="d_type_box">
                <div className="director person-container elias to-fly-from-left">
                  <div className="d_type">I/T</div>
                  <img src={Elias_Xu} alt="" className="director-img" />
                  <div className="name">Elias Xu</div>
                  <div className="description">
                    Hi! I’m Elias! I’m a beekeeper, book enthusiast, and programmer. Even though I mainly come from a background in Artificial Intelligence and Competitive Programming, I’ve been deemed competent enough to run (with Will Zhang) the I/T department. Cheers!
                  </div>
                </div>
                <div className="director person-container to-fly-from-right">
                  <img src={Will} alt="" className="director-img" />
                  <div className="name">Will Zhang</div>
                  <div className="description">Hi! I'm Will. I love having a good steak, telling stories, and designing websites. I am thrilled to hold up the caucus infrastructure this year with Elias!</div>
                </div>
              </div>
            </div>

            <div className="subgroup-containerD">
              <div className="d_type_box">
                <div className="director person-container stacie to-fly-from-left">
                  <div className="d_type finance_name">Finance</div>
                  <img src={Stacie_Au} alt="" className="director-img" />
                  <div className="name">Stacie Au</div>
                  <div className="description">
                    Hi I’m Stacie, this year’s Junior Caucus finance director, and I look forward to making JProm cheaper (or at least a little more affordable)! I’ve worked in this department for 2 years now and have been in the finance space for 3/4 years. Other than being interested in finance and business, I often enjoy doing different sports such as diving or stunt.
                  </div>
                </div>
                <div className="director person-container to-fly-from-left">
                  <img src={Ayla_Irshad} alt="" className="director-img" />
                  <div className="name">Ayla Irshad</div>
                  <div className="description">
                    Hi, I'm Ayla! This is my third year as finance director, and this year I am excited to be working on fundraisers and budgeting for events! In particular, I look forward to helping make JProm as successful and accessible as possible. Aside from caucus I also work in the SU Finance Department. In my free time, I enjoy going on bike rides as well as traveling to experience new cultures!
                  </div>
                </div>
              </div>
            </div>

            <div className="subgroup-containerD">
              <div className="d_type_box_c chloe">
                <div className="director person-container to-fly-from-right">
                  <div className="d_type">Graphics</div>
                  <img src={Chloe_Wong} alt="" className="director-img" />
                  <div className="name">Chloe Wong</div>
                  <div className="description">
                    Hey! I'm Chloe, and I've been in Caucus Graphics since my freshman year. I'm extremely passionate about graphic design, and I enjoy exploring its applications both within and outside digital media. I look forward to bringing my creative vision for the Junior Caucus to life this school year!
                  </div>
                </div>
              </div>
              <div className="director person-container to-fly-from-right">
                <img src={Vicki_Chen} alt="" className="director-img" />
                <div className="name">Vicki Chen</div>
                <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
              <div className="d_type_box_c">
                <div className="director person-container to-fly-from-left">
                  <div className="d_type">Social Media</div>
                  <img src={Maegan_Diep} alt="" className="director-img " />
                  <div className="name">Maegan Diep</div>
                  <div className="description">
                    Hi! I'm Maegan, but I also go by Mae. This is my second year as the Social Media Director, and I'm excited to be working on our main project, the Junior Athlete Spotlight, and promoting events/information. Aside from running social media, I also enjoy baking, making art, and traveling! Fun fact: I've been to Dominican Republic four times... (I highly recommend visiting though.)
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
      <Footer />
    </div>
  );
  return peoplePage;
}

const calculateZoom = (element) => {
  if (!element) return 1; // if the element is not defined

  const viewportHeight = window.innerHeight;
  const rect = element.getBoundingClientRect();
  const elementCenter = rect.top + rect.height / 2;
  const distanceFromCenter = Math.abs(viewportHeight / 2 - elementCenter);
  const maxDistance = viewportHeight / 3; // max dist from the center

  // calculate the zoom level - closer to center means more zoom
  const zoomLevel = 1 + (1 - distanceFromCenter / maxDistance) * 0.1; // controls max zoom
  return Math.max(zoomLevel, 1); // the scale is not less than 1
};