import React, { useState } from "react"

const Accordion = ({ heading, content }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <li className="accordion-item">
            <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
                <div className="w-full flex gap-4 justify-between">
                    <div className="text-[16px] sm:text-[20px] text-white font-bold">
                        {heading}
                    </div>
                    <div className={`${isActive ? 'rotate-180' : ''} transition-transform`}>
                        <svg width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.05 14.1294L19.5416 24.3102C18.4187 25.5125 16.5812 25.5125 15.4583 24.3102L5.94995 14.1294" stroke="#2748BD" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            {isActive && <div className="text-white text-[14px] xl:text-[16px] leading-[2] p-4 bg-[#FFFFFF]/[.02]">{content}</div>}
        </li>
    );
};

export default Accordion