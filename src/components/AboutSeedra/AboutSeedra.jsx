import React from 'react';
import './AboutSeedra.scss';

import aboutSeedraPhoto from '../../images/about-seedra-photo.png';
import aboutSeedraPhotoMobile from '../../images/about-seedra-photo-mb.png';

const AboutSeedra = () => {
  return (
    <div id="about-seedra" className='about-seedra'>
      <div className='about-seedra__content'>
        <h2 className='about-seedra__title'>
          Seedra helps to grow fast and efficient
        </h2>
        <p className='about-seedra__text'>
          SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George. <br /> <br />

          Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. <br /> Your easy growing experience is our guarantee.
          Spinach common culinary uses: salads, soups, smoothies, lasagna, pizza, pies, risotto, and more. <br /> <br />
          Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product.
        </p>
      </div>
      <div className='about-seedra__image'>
        <img src={aboutSeedraPhoto} alt="Seedra" className='desktop-image' />
        <img src={aboutSeedraPhotoMobile} alt="Seedra" className='mobile-image' />
      </div>
    </div>
  );
}

export default AboutSeedra;
