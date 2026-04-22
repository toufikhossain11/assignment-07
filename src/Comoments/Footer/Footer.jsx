import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className="bg-[#244D3F] text-white text-center py-8">
                <h2 className="text-5xl font-bold">KeenKeeper</h2>
                <p className="text-sm mt-2">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="flex justify-center gap-4 mt-4">
                    <button className="btn btn-circle btn-sm"><FaFacebook /></button>
                    <button className="btn btn-circle btn-sm"><AiFillInstagram /></button>
                    <button className="btn btn-circle btn-sm"><FaTwitter /></button>
                </div>
                <div className='flex justify-between mx-auto p-4 mt-15 border-t border-gray-500 text-center w-300 '>

                <p className="text-xs ">© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex text-center gap-5 text-xs'> 
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;