import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">


    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__poiret">ABOUT US</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The building where you are dining today was the first abalone hatchery where Dr Pierre Hugo experimented with cultivating the shellfish in 1984. Decades later, there are multiple thriving abalone farms in Hermanus.  We are very fortunate to be able to work with HIK Abalone Farm, which provides us with our live produce twice a week. We proudly bring you this delicacy, part of Hermanus’s seafood culture, sustainably to your plate. Abalone is a mollusc and part of a family that includes clams, mussels, sea slugs and octopus. More specifically, it is a gastropod – literally meaning “stomach on a foot”. It is a flattened sea snail with ear-shaped shells, native to our cool Atlantic waters.</p>
        <button type="button" className="custom__button">KNOW MORE</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__poiret">OUR HISTORY</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Ever since the 1850s, visitors have been drawn to Hermanus by the variety and abundance of food harvested from the sea. The Old Harbour provided a safe haven for the small fishing boats going out for their daily catch. For over a century, the return of the boats to the inlet at the harbour provided much excitement. Onlookers would see the fishing boats ply the heavy seas at the entrance to the harbour – waiting for a break between swells to allow them to row into the safety of the picturesque port. Visbaai, as the harbour was known in those days, was surely a popular place to hang out – just as visitors are doing now, centuries later.  
</p>
        <button type="button" className="custom__button">KNOW MORE</button>
      </div>
    </div>
  </div>
);
export default AboutUs;
