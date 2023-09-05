import React from 'react';
import instagram from '../public/instagram-icon-white-on-black.png';
import facebook from '../public/facebook-circle.svg';
import twitter from '../public/twitter.PNG';

const Socials = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="twitter"
            src={twitter}
          />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="facebook"
            src={facebook}
          />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="instagram"
            src={instagram}
          />
        </a>
      </div>
  )
}

export default Socials;