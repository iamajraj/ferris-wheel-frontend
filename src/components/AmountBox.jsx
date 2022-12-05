import React from "react";

const AmountBox = ({ point, yellow }) => {
    return (
        <div className="border-2 border-black w-[65px] h-[50px] rounded-md flex flex-col overflow-hidden">
            <div
                className={`h-[50%] ${
                    yellow ? "bg-yellow-300" : "bg-[#80C1F0]"
                }`}
            ></div>
            <div className="h-[50%] bg-white">
                <p className="text-center font-bold">{point}</p>
            </div>
        </div>
    );
};

export default AmountBox;
