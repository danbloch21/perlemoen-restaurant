import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1
          className="headtext__poiret"
          style={{ letterSpacing: "0.1em", marginBottom: "1rem"}}
          id="about"
        >
          ABOUT US
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          The building where you are dining today was the first abalone hatchery
          where local vet Dr Pierre Hugo began experimenting with cultivating
          the shellfish in 1984. Decades later, there is a clutch of thriving
          abalone farms in Hermanus and the wider Overstrand area, designated a
          “Creative City of Gastronomy” by{" "}
          <a className="app__aboutus-link">
            <a
              href="https://en.unesco.org/creative-cities/overstrand-hermanus"
              target="_blank"
            >
              UNESCO
            </a>{" "}
          </a>
          in 2020 – a first for Africa. We are very fortunate to be able to work
          with our supplier and partner,
          <a className="app__aboutus-link">
            <a href="http://www.hik.co.za/" target="_blank">
              {""} HIK Abalone Farm, {""}
            </a>
          </a>
          which provides us with our live produce twice a week and is one of
          only two South African producers certified as responsible farms by the{" "}
          <a className="app__aboutus-link">
            <a href="https://asc-aqua.org/" target="_blank">
              Aquaculture Stewardship Council
            </a>
          </a>
          . We proudly bring you this delicacy, part of Hermanus’s seafood
          culture, sustainably to your plate. Abalone is a mollusc and part of a
          family that includes clams, mussels, sea slugs and octopus. More
          specifically, it is a gastropod – literally meaning “stomach on a
          foot”. It is a flattened sea snail with ear-shaped shells, native to
          our cool Atlantic waters.
        </p>
        <button className="custom__button" style={{ marginTop: "2rem" }}>
          <a href="#home">BACK TO TOP</a>
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__poiret" style={{ letterSpacing: "0.1em" , marginBottom: "1rem" }}>
          OUR HISTORY
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Ever since the 1850s, visitors have been drawn to Hermanus by the
          variety and abundance of food harvested from the sea. The Old Harbour
          provided a safe haven for the small fishing boats going out for their
          daily catch. For over a century, the return of the boats to the inlet
          at the harbour provided much excitement. Onlookers would see the
          fishing boats ply the heavy seas at the entrance to the harbour –
          waiting for a break between swells to allow them to row into the
          safety of the picturesque port. Visbaai, as the harbour was known in
          those days, was a popular place. And it was made all the more so by
          local legends such as{" "}
          <a href className="app__aboutus-link">
            <a
              href="https://www.hermanusonline.mobi/hermanus-history-2/local-hermanus-fisherman-bill-selkirk-caught-the-world-s-biggest-man-eating-shark-with-a-rod-and-reel-in-1922"
              target="_blank"
            >
              Bill Selkirk
            </a>
          </a>
          , who famously caught a record-breaking 2,176lb (976kg) great white
          shark with a rod and line from the harbour in 1922. And visitors are
          still drawn to its shore today.
        </p>
        {/* <button type="button" className="custom__button">
          KNOW MORE
        </button> **/}
      </div>
    </div>
  </div>
);
export default AboutUs;
