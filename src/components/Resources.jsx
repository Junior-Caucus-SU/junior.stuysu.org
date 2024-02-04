import React, { useState, useEffect } from "react";
import NavBar from "./NonPage/NavBar";
import Texture from "./NonPage/Texture";
import Footer from "./NonPage/Footer";
import CustomCursor from "./NonPage/Cursor";
import "./Resources.css";
import ResourceCard from "./NonPage/ResourceCard";

export default function Resources() {
  const [Resources, setResources] = useState([]);
  useEffect(() => {
    const fetchSheetsData = async () => {
      try {
        const ID = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
        const sheet_name = "Resources";
        const response = await fetch(
          `https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`,
        );
        const text = await response.text();
        let data = text.split("\n");
        data = data.map((x) => {
          return x.replaceAll('"', "").split(",");
        });
        data.shift();
        setResources(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSheetsData();
  }, []);
  let resourcesPage = (
    <div>
      <NavBar {...{ page: "Resources" }} />
      <div className="resources-super">
        <div className="resources-container">
          {Resources.map((resource, i) => (
            <ResourceCard
              key={i}
              title={resource[0]}
              description={resource[1]}
              link={resource[2]}
              release={resource[3]}
            />
          ))}
        </div>
      </div>
      <Footer />
      <CustomCursor />
      <Texture />
    </div>
  );
  return resourcesPage;
}
