import React from 'react'
import { Socials } from '.';

const Footer = () => {
  return (
    <footer className='container mx-auto bg-blue-700 px-10'> 
        <div className="w-10/12 mx-auto">
            <Socials/>
            <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-playfair font-semibold text-2xl text-yellow-500">
                    Currencyforte
                </p>
                <p className="font-playfair text-md text-yellow-500">
                    ©2023 Currencyforte. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;