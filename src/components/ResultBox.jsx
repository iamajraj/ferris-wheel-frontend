import React from "react";

const ResultBox = ({ icon }) => {
    return (
        <div className="rounded-full w-[30px] h-[30px] bg-white  border-2 border-black p-[2px]">
            <img className="w-full h-full" src={icon} alt="" />
        </div>
    );
};

export default ResultBox;
