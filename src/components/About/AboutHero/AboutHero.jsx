import React from "react";
import "./index.scss";
import {facebook, twitter, instagram, linkedin, youtube, anchorfm } from "../../../assets/icons";
import { SocialMediaLink } from "../../Others/Footer/Footer";
import HeroChidera  from '../../../assets/hero_chidera.png';


export default function AboutHero() {
  return (
    <div className="app_container">
      <div className="app_container__wrapper about_hero _flex a_center">
        <div className="__image_rapper">
          <img src={HeroChidera} alt="" srcSet="" />
        </div>
        <div className="__text_holder">
          <p className="bold-48">Chidera Stephen</p>
          <div className="__description">
            <p>
              I am a creative and adaptive individual who is passionate about
              growth. I love the process of problem solving and I’m ready to
              accept challenges that polish skills while adding quality value to
              an organization.
            </p>
          </div>
          <div className="__description">
            <p>Contact</p>
            <a href="/">chiderastephen@gmail.com</a>
          </div>

          <div className="__social_media_links">
            <SocialMediaLink to="https://anchor.fm/chidera-is-here/" iconSrc={anchorfm} />
            <SocialMediaLink to="https://www.facebook.com/chidera.stephen/" iconSrc={facebook} />
            <SocialMediaLink to="https://twitter.com/chiderastephen_/" iconSrc={twitter} />
            <SocialMediaLink to="https://www.instagram.com/chiderastephen_/" iconSrc={instagram} />
            <SocialMediaLink to="http://www.linkedin.com/in/chidera-stephen-91b425170/" iconSrc={linkedin} />
            <SocialMediaLink to="https://www.youtube.com/chiderastephen/" iconSrc={youtube} />
          </div>
        </div>
      </div>
    </div>
  );
}
