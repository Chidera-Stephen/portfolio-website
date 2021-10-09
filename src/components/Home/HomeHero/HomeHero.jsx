import React from 'react';
import './index.scss';
import Button from '../../Others/Button/Button';
import HeroChidera  from '../../../assets/hero_chidera.png';

export default function HomeHero() {
  return (
    <div className="app_container">
      <div className="app_container__wrapper home_hero _flex a_center j_between">
        <div className="__text_holder">
          <h1 className="bold-64">
            I write <span className="teal bold-64">catchy</span> copy for B2C
            brands.
          </h1>
          <p className="_sub_heading">
            I help your B2C brand get more revenue with a persuasive copy so you
            can build other aspects of your business.
          </p>
          <Button semanticType="navLink" to="/about">
            Explore works
          </Button>
        </div>
        <div className="__image_holder">
          <img src={HeroChidera} alt="Chidera 'The Goat' Stephen" srcSet="" />
        </div>
      </div>
    </div>
  );
}
