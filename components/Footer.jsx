import React from 'react'
import { Socials } from './';

const Footer = () => {
  return (
    <footer className='footer container mx-auto px-10'> 
        <div className="border-t w-full inline-block border-blue-400 py-8">
            <Socials/>
            <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-semibold text-2xl text-yellow-500">
                    Currencyforte
                </p>
                <p className="text-md text-yellow-500">
                    ©2023 Currencyforte. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;