import React from 'react';

const Socials = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" src={require("../assets/twitter.svg")}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src={require("../assets/facebook.svg")}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={require("../assets/instagram.svg")}/>
        </a>
      </div>
  )
}

export default Socials;