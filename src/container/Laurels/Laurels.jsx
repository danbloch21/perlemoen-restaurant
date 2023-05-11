import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p
        className="p__poiret"
        style={{ color: "#DCCA87", marginBottom: "1rem", marginTop: "1rem" }}
      >
        {title}
      </p>
      <p className="p__opensans" style={{ textTransform: "none" }}>
        One of eight restaurants recognised by{" "}
        <a className="app__laurels-link">
          <a href="https://www.laliste.com/en/awards2023" target="_blank">
            La Liste
          </a>
        </a>{" "}
        as ‘Hidden Gems’ in the prestigious Paris-based global restaurant guide
        and app’s 2023 awards. Perlemoen was chosen as ‘worth going the extra
        mile for’, based on recommendations from guidebooks, press articles and
        customer reviews, as well as for its ‘entrepreneurship, unexpected
        customer experience, local produce approach and terroir’, according to
        the judges.
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="AWARDS & MEDIA" />
      <h1 className="headtext__poiret" style={{ marginBottom: "1rem" }}>
        OUR LAURELS
      </h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
      <h1
        className="headtext__poiret"
        style={{ marginBottom: "1rem", marginTop: "2rem" }}
      >
        PRESS COVERAGE
      </h1>
      <p className="p__opensans">
        <a className="app__laurels-link">
          <a
            href="https://www.capetownetc.com/food-and-drink/perlemoenrestauranthermanus/"
            target="_blank"
          >
            Visit this hidden gem on your next trip to Hermanus
          </a>
        </a>
      </p>
      <p className="p__opensans">
        <a className="app__laurels-link">
          <a
            href="https://www.eatout.co.za/article/seafood-restaurant-perlemoen-hermanus-uplifting-community-tackling-sustainability/"
            target="_blank"
          >
            How seafood restaurant Perlemoen in Hermanus is uplifting its
            community and tackling sustainability
          </a>
        </a>
      </p>
      <p className="p__opensans">
        <a className="app__laurels-link">
          <a
            href="https://www.foodandhome.co.za/entertaining/la-liste-hidden-gem-hermanus-perlemoen-restaurant"
            target="_blank"
          >
            La Liste’s hidden gem in Hermanus: Perlemoen Restaurant
          </a>
        </a>
      </p>
      <p className="p__opensans">
        <a className="app__laurels-link">
          <a
            href="https://online.fliphtml5.com/xkcxj/pxmv/#p=4"
            target="_blank"
          >
            Global award puts Perlemoen on the app
          </a>
        </a>
      </p>
      <p className="p__opensans">
        <a className="app__laurels-link">
          <a
            href="https://online.fliphtml5.com/xkcxj/ekdr/#p=3"
            target="_blank"
          >
            New restaurant showcases local perlemoen
          </a>
        </a>
      </p>
    </div>
    <div className="app__wrapper-img">
      <img src={images.HiddenGem} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
