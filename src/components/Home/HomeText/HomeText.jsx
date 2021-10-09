import React from 'react';
import './HomeText.scss';

export default function HomeText() {
  return (
    <div className="app_container">
      <div className="app_container__wrapper text_hero">
        <div className="text_holder">
          <h3 className="sub_heading">
            I help your B2C brand get more revenue with a persuasive copy so you
            can build other aspects of your business.
          </h3>
          <br />
          <div className="text_content">
            <p>
              Losing customers is hard, especially when you spend a lot of money
              on your digital campaigns and acquisitions.
            </p>
            <p>
              The solution? Avoid copy that makes users snore & scroll past your
              brand. Hire a copywriter who understands the power of words.
            </p>
            <p>
              Think about it, for every contact you have had with prospects,
              that’s an opportunity to tell your brand’s story & win a fan for
              life!
            </p>
            <p>
              How do you grab this offer? You are here now, so don’t pay for
              mere texts. Hire for ...
            </p>
            <div className='home_list'>
              <ul>
                <li>Fascinating stories that attract leads.</li>
                <li>Branding to distinguish yourself from competitors.</li>
                <li>Success mission for your business.</li>
                <li>
                  I’m here to do all these for you without being intrusive.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
