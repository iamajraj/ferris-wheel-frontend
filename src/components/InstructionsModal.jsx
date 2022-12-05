import React from "react";

const InstructionsModal = ({ setShow }) => {
    function closeModal(e) {
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
            <div className="bg-[#FF684B] w-[95%] min-h-[300px] rounded-md border-white border-2 pb-[10px]">
                <h2 className="text-center mt-[10px] text-white text-2xl border-b border-dotted max-w-[70%] mx-auto">
                    Instructions
                </h2>
                <ol className="list-decimal text-white max-w-[70%] mx-auto mt-[15px] text-[11px]">
                    <li>Choose your bet amount and select the food to bet;</li>
                    <li>
                        There're 30 seconds for betting each round, the result
                        will be announced instantly afterwards;
                    </li>
                    <li>
                        If the result announced matches the food you have
                        selected, you will coin rewards relative to the
                        respective odds;
                    </li>
                    <li>
                        The official prize pool will increase as more users
                        participate in game, there will be a chance for 'PIZZA'
                        or 'SALAD' reward as prize pool reaches a certain
                        amount;
                    </li>
                    <li>
                        If 'SALAD' was announced, then all vegetables will be
                        rewarded;
                    </li>
                    <li>
                        If 'PIZZA' was announced, then all meats will be
                        rewarded;
                    </li>
                </ol>
            </div>
            <p className="text-white text-[12px] mt-[10px]">
                Click on blank areas to close template
            </p>
        </div>
    );
};

export default InstructionsModal;
