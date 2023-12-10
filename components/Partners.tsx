import React from 'react'
import { FaAmazon, FaFacebook, FaGithub, FaGoogle, FaPaypal } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { PiContactlessPaymentFill } from "react-icons/pi";

const Partners = () => {
    return (
        <div className='w-[70%] mx-auto text-[#444444] my-24 animate-infinite-scroll overflow-hidden'>
            <div className='grid grid-flow-col '>
                <FaGoogle size={20}/>
                <FaGithub size={20}/>
                <SiFirebase size={20}/>
                <FaFacebook size={20}/>
                <FaPaypal size={20}/>
                <PiContactlessPaymentFill size={20}/>
                <FaAmazon size={20} />
            </div>
        </div>
    )
}

export default Partners