import React from "react";
import DiamondIcon from "../assets/diamond.svg";

const AmountBox = ({ point, yellow, red, short }) => {
    return (
        <div
            className={`border-2 border-black ${
                short ? "w-[50px]" : "w-[65px]"
            } ${
                short ? "h-[50px]" : "h-[50px]"
            } rounded-md flex flex-col overflow-hidden `}
        >
            <div
                className={`h-[50%] ${
                    yellow ? "bg-yellow-300" : "bg-[#80C1F0]"
                } ${red && "bg-red-500"} flex items-center justify-center`}
            >
                <img src={DiamondIcon} alt="" />
            </div>
            <div className="h-[50%] bg-white">
                <p
                    className={`text-center font-bold ${
                        short ? "text-[11px]" : ""
                    }`}
                >
                    {point}
                </p>
            </div>
        </div>
    );
};

export default AmountBox;
