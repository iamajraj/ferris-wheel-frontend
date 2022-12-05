import React from "react";

const RevenueRankModal = ({ setShow }) => {
    function closeModal(e) {
        console.log(e.currentTarget);
        if (e.target === e.currentTarget) {
            setShow(false);
        }
    }

    return (
        <div
            className="fixed bg-[#00000090] w-full h-screen z-50 flex items-center justify-center inset-0 flex-col"
            onClick={function (e) {
                closeModal(e, this);
            }}
        >
            <div className="bg-[#FF684B] w-[95%] min-h-[300px] rounded-md border-white border-2 pb-[10px] relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-6 h-6 absolute text-white right-0"
                    onClick={() => setShow(false)}
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>

                <h2 className="text-center mt-[10px] text-white text-[14px] font-bold">
                    Today's Revenue Rank
                </h2>
                <table className="text-white text-center w-[95%] mx-auto mt-[10px]">
                    <thead className="border-b-2 border-white">
                        <tr className="">
                            <td>Ranking</td>
                            <td>Profile</td>
                            <td>Name</td>
                            <td>Revenue</td>
                        </tr>
                    </thead>
                    <tbody className="before:content-['-'] before:block before:leading-[1em] before:text-transparent">
                        {Array.from(Array(10).keys()).map((n) => {
                            return (
                                <tr>
                                    <td>{n + 1}</td>
                                    <td>
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0ZY99MBAlAQOn48Olvp0eKdwCCMd2IFRfTPv55Y&s"
                                            alt=""
                                            className="w-[20px] rounded-[5px] border-2 border-black mx-auto"
                                        />
                                    </td>
                                    <td>
                                        <p className="text-[11px]">প্রবাস...</p>
                                    </td>
                                    <td>
                                        <p className="text-[12px]">5,020,500</p>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <p className="text-white text-[12px] mt-[10px]">
                Click on blank areas to close template
            </p>
        </div>
    );
};

export default RevenueRankModal;
