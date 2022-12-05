import React from "react";
import DiamondIcon from "../assets/diamond.svg";

const AmountBox = ({ point, yellow, red }) => {
    return (
        <div className="border-2 border-black w-[65px] h-[50px] rounded-md flex flex-col overflow-hidden">
            <div
                className={`h-[50%] ${
                    yellow ? "bg-yellow-300" : "bg-[#80C1F0]"
                } ${red && "bg-red-500"} flex items-center justify-center`}
            >
                <img src={DiamondIcon} alt="" />
            </div>
            <div className="h-[50%] bg-white">
                <p className="text-center font-bold">{point}</p>
            </div>
        </div>
    );
};

export default AmountBox;
