import React from 'react';
import InstagramIcon from './icons/InstagramIcon.svg';
import WhatsAppIcon from './icons/WhatsAppIcon.svg';
import LinkedInIcon from './icons/LinkedInIcon.svg';
import GmailIcon from './icons/GmailIcon.svg';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div>
                    <p className="text-lg font-semibold">Health Web App</p>
                    <p className="text-sm">Providing health solutions for all</p>
                </div>
                <div className="flex space-x-4">

                    <div className="flex items-center space-x-2">

                        <img src={InstagramIcon} alt="Instagram" className="h-12 w-12 fill-current text-gray-400 bg-purple-900 hover:scale-150" />
                        <img src={WhatsAppIcon} alt="WhatsApp" className="h-12 w-12 fill-current text-gray-400 bg-green-900 hover:scale-150" />
                        <img src={LinkedInIcon} alt="LinkedIn" className="h-12 w-12 fill-current text-gray-400 bg-white hover:scale-150" />
                        <img src={GmailIcon} alt="Gmail" className="h-12 w-12 fill-current text-gray-400 bg-white hover:scale-150" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-4 px-4">
                <p className="text-sm text-gray-400 hover:text-yellow-500">Contact Us:</p>
                <p className="text-xs text-gray-400 hover:text-green-500">Email: example@example.com</p>
                <p className="text-xs text-gray-400 hover:text-blue-500">Phone: +1234567890</p>
                <p className="text-xs text-gray-400 hover:text-red-500">Owner: John Doe</p>
            </div>
        </footer>
    );
}

export default Footer;
