/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/bgg3.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Website-Scrapping-Web-App 🎉",
    description:
      "A web application that scrapes data from websites and presents it in a user-friendly format.",
    url: "https://github.com/Hemlata3010/Website-Scrapping-Web-App",
  },
  {
    title: "SkillsUp-with-Mentors",
    description:
      "SkillsUp-with-Mentors: Empowering learners with personalized mentorship, expert guidance, and tailored skill development to achieve their career goals and maximize their potential."
,
    url: "https://github.com/Hemlata3010/SkillsUp-with-Mentors",
  },
  {
    title: "metroCard",
    description:
      "Streamlining urban travel with a convenient, contactless payment system for public transportation.",
    url: "https://hemlata3010.github.io/metroCard.github.io/",
  },
  {
    title: "TinDog",
    description:
      " Crafting an engaging and responsive website for a dog dating app, enhancing user experience and connectivity for dog owners.",
    url: "https://eransh1.github.io/TinDog/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
