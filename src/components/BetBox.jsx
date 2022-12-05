import React from "react";

const BetBox = ({ className, points, icon }) => {
    return (
        <div
            className={`${className} w-[80px] h-[80px] bg-[#186199] rounded-[20px] overflow-hidden border border-black`}
        >
            <div className="h-full w-full rounded-[20px] overflow-hidden border-[4px] border-[#186199]">
                <div className="flex gap-[4px] h-[30px]">
                    <div className="bg-white w-[50%] h-full p-[5px]">
                        <img className="w-full h-full" src={icon} alt="" />
                    </div>
                    <div className="bg-white w-[50%] h-full">
                        <p className="italic font-semibold text-center text-[18px] pt-[4px] tracking-[-2px] text-[#186199]">
                            x {points}
                        </p>
                    </div>
                </div>
                <div className="h-[25px] bg-[#7FC2F0] mt-[4px]">
                    <p className="text-center text-[12px] text-red-500">You:</p>
                </div>
                <div className="w-full h-full bg-white mt-[4px]"></div>
            </div>
        </div>
    );
};

export default BetBox;
