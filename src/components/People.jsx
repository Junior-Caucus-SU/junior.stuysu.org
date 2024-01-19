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
import John from '../Images/people/John.png';

export default function People() {
  const adjustDescriptionWidth = () => {
    const images = document.querySelectorAll('.person-container img');
    images.forEach(img => {
      try {
        const name = img.parentElement.querySelector('.name');
        const description = img.parentElement.querySelector('.description');
        console.log(name);

        // Get the previous element if there is one
        const previous = img.previousElementSibling;

        if (previous && previous.classList.contains('d_type')) {
          previous.style.width = `${img.offsetWidth}px`;
        }
        if (name && name.classList.contains('name')) {
          name.style.width = `${img.offsetWidth}px`;
        }
        if (description && description.classList.contains('description')) {
          description.style.width = `${img.offsetWidth}px`;
        }
      } catch (e) {
        console.log(e);
      }
    });

    const president_images = document.querySelectorAll('.person-container .image_box img');
    president_images.forEach(img => {
      try {
        const name = img.parentElement.parentElement.querySelector('.name');
        const description = img.parentElement.parentElement.querySelector('.description');
        console.log(name);

        // Get the previous element if there is one
        const previous = img.previousElementSibling;

        if (previous && previous.classList.contains('d_type')) {
          previous.style.width = `${img.offsetWidth}px`;
        }
        if (name && name.classList.contains('name')) {
          name.style.width = `${img.offsetWidth}px`;
        }
        if (description && description.classList.contains('description')) {
          description.style.width = `${img.offsetWidth}px`;
        }
      } catch (e) {
        console.log(e);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('load', adjustDescriptionWidth);
    window.addEventListener('resize', adjustDescriptionWidth);

    // Clean up the event listeners
    return () => {
      window.removeEventListener('load', adjustDescriptionWidth);
      window.removeEventListener('resize', adjustDescriptionWidth);
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
              <img src={Josephine_Yoo} alt="Josephine Yoo" ref={pres1Ref} /></div>
            <div className="name">Josephine</div>
            <div className="description to-fade-in">Lorem ipsum dolor sit amet consectetur. Velit convallis sit odio orci varius eu elementum. Est sit et hendrerit id eget diam. Maecenas amet sed ac turpis facilisis semper at. Tincidunt egestas vulputate sed lobortis hac augue. Est pharetra aliquet faucibus.</div>
          </div>
          <div className="president person-container pres2 to-fly-from-right"  >
            <div className="image_box">
              <img src={Grace_Rhee} alt="Grace Rhee" ref={pres2Ref} /></div>
            <div className="name">Grace</div>
            <div className="description">Lorem ipsum dolor sit amet consectetur. Velit convallis sit odio orci varius eu elementum. Est sit et hendrerit id eget diam. Maecenas amet sed ac turpis facilisis semper at. Tincidunt egestas vulputate sed lobortis hac augue. Est pharetra aliquet faucibus.</div>
          </div>
        </div>

        <div className="chiefs people-section">
          <div className="chief chief1 person-container to-fly-from-left">
            <img src={John} alt="" />
            <div className="name">John J. Wang</div>
            <div className="description">Lorem ipsum dolor sit amet consectetur. Velit convallis sit odio orci varius eu elementum. Est sit et hendrerit id eget diam. Maecenas amet sed ac turpis facilisis semper at. Tincidunt egestas vulputate sed lobortis hac augue. Est pharetra aliquet faucibus.</div>
          </div>
          <div className="chief chief2 person-container to-fly-from-left">
            <img src={Ethan_Sie} alt="" />
            <div className="name">Ethan Sie</div>
            <div className="description">Lorem ipsum dolor sit amet consectetur. Velit convallis sit odio orci varius eu elementum. Est sit et hendrerit id eget diam. Maecenas amet sed ac turpis facilisis semper at. Tincidunt egestas vulputate sed lobortis hac augue. Est pharetra aliquet faucibus.</div>
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

            <div className="president person-container emily to-fly-from-right">
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
                    <div className="description">Lorem ipsum dolor sit amet consectetur. Velit convallis sit odio orci varius eu elementum. Est sit et hendrerit id eget diam. Maecenas amet sed ac turpis facilisis semper at. Tincidunt egestas vulputate sed lobortis hac augue. Est pharetra aliquet faucibus.</div>
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
                  <div className="description">Lorem ipsum dolor sit amet consectetur. Velit convallis sit odio orci varius eu elementum. Est sit et hendrerit id eget diam. Maecenas amet sed ac turpis facilisis semper at. Tincidunt egestas vulputate sed lobortis hac augue. Est pharetra aliquet faucibus.</div>
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
              <div className="d_type_box_c">
                <div className="director person-container to-fly-from-right">
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
      <div className="to-fade-in">
        <Footer />

      </div>
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