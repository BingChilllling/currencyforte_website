import React from 'react';
import Image from 'next/image';

const Socials = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image
              height={50}
              width={50}
              src="../assets/twitter.svg"
            />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            height={50}
            width={50}
            src="../assets/facebook.svg"
          />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            height={50}
            width={50}
            src="../assets/instagram.svg"
          />
        </a>
      </div>
  )
}

export default Socials;