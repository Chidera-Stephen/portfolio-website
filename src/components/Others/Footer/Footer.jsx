import React from "react";
import "./index.scss";
import Button from "../Button/Button";
import {
  chat,
  facebook,
  twitter,
  instagram,
  linkedin,
  youtube,
  anchorfm,
} from "../../../assets/icons";

export default function Footer({ hasFooterSpacer }) {
  return (
    <div className="app_container">
      <div
        className="app_container__wrapper _flex a_base j_between app_footer"
        data-has-footer-spacer={`${hasFooterSpacer}`}
      >
        <div className="__left">
          <h1 className="bold-64 __heading">Ready to talk?</h1>
          <Button iconPosition="left" semanticType="navLink" icon={chat}>
            messsage me
          </Button>
        </div>
        <div className="__right __social_media_links">
          <SocialMediaLink to="https://anchor.fm/chidera-is-here/" iconSrc={anchorfm} />
          <SocialMediaLink to="https://www.facebook.com/chidera.stephen/" iconSrc={facebook} />
          <SocialMediaLink to="https://twitter.com/chiderastephen_/" iconSrc={twitter} />
          <SocialMediaLink to="https://www.instagram.com/chiderastephen_/" iconSrc={instagram} />
          <SocialMediaLink to="http://www.linkedin.com/in/chidera-stephen-91b425170/" iconSrc={linkedin} />
          <SocialMediaLink to="https://www.youtube.com/chiderastephen/" iconSrc={youtube} />
        </div>
      </div>
    </div>
  );
}

function SocialMediaLink({ to, iconSrc }) {
  return (
    <a href={to} className="__link">
      <img src={iconSrc} alt="" srcSet="" />
    </a>
  );
}

export { SocialMediaLink };
