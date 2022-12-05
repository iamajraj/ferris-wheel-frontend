import cloudImage from "./assets/cloud.png";
import gameBody from "./assets/game.svg";
import BetBox from "./components/BetBox";
import BroccoliIcon from "./assets/broccoli.svg";
import BreadIcon from "./assets/bread.svg";
import BurgerIcon from "./assets/burger.svg";
import LegIcon from "./assets/leg.svg";
import PizzaIcon from "./assets/pizza.svg";
import ChickenIcon from "./assets/chicken.svg";
import SandWichIcon from "./assets/sandwich.svg";
import SushiIcon from "./assets/sushi.svg";
import AmountBox from "./components/AmountBox";
import ResultBox from "./components/ResultBox";

function App() {
    return (
        <div className="bg-[#FBE170] min-h-screen w-full h-screen flex flex-col">
            {/* Clouds */}
            <>
                <img
                    className="h-[30px] absolute top-[20px] left-[120px]"
                    src={cloudImage}
                    alt=""
                />
                <img
                    className="h-[30px] absolute top-[50%] left-[20px]"
                    src={cloudImage}
                    alt=""
                />
            </>
            <div className="pt-[50px]">
                {/* Top Bar */}
                <div className="relative px-[20px] flex items-center justify-between z-10">
                    <div className="flex items-start gap-[5px]">
                        <div className="bg-[#58529A] w-[30px] h-[30px] rounded-sm"></div>
                        <div className="">
                            <p className="text-[9px] font-semibold">
                                Today: Round <span>1113</span>
                            </p>
                            <p className="text-[9px] text-green-500 font-semibold">
                                10ms
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <div className="w-[32px] h-[32px] rounded-full bg-[#0B325B] border-[3px] relative border-[#2D8FD5] before:content-['Rules'] before:absolute before:bottom-[-10px] before:left-[-3px] before:text-[9px] before:px-[5px] before:text-white before:bg-[#006BBB] before:rounded-md"></div>
                        <div className="w-[32px] h-[32px] rounded-full bg-[#0B325B] border-[3px] relative border-[#2D8FD5] before:content-['Settings'] before:absolute before:bottom-[-10px] before:left-[-8px] before:text-[9px] before:px-[5px] before:text-white before:bg-[#006BBB] before:rounded-md"></div>
                    </div>
                </div>
                {/* Main Game */}
                <div className="relative w-max max-w-[95%] mx-auto mt-[50px]">
                    <img
                        className="w-full max-h-[500px]"
                        src={gameBody}
                        alt=""
                    />
                    {/* Bet Box */}
                    <>
                        <BetBox
                            className="absolute top-[-70px] left-[38%]"
                            icon={ChickenIcon}
                            points={45}
                        />
                        <BetBox
                            className="absolute top-[-30px] left-[12%]"
                            icon={BroccoliIcon}
                            points={5}
                        />
                        <BetBox
                            className="absolute top-[58px] left-[3%]"
                            icon={SushiIcon}
                            points={5}
                        />
                        <BetBox
                            className="absolute top-[150px] left-[10%]"
                            icon={PizzaIcon}
                            points={5}
                        />
                        <BetBox
                            className="absolute top-[190px] left-[38%]"
                            icon={SandWichIcon}
                            points={5}
                        />
                        <BetBox
                            className="absolute top-[-30px] right-[12%]"
                            icon={LegIcon}
                            points={25}
                        />
                        <BetBox
                            className="absolute top-[58px] right-[3%]"
                            icon={BreadIcon}
                            points={15}
                        />
                        <BetBox
                            className="absolute top-[150px] right-[10%]"
                            icon={BurgerIcon}
                            points={10}
                        />
                    </>
                    {/* Amount Box */}
                    <>
                        <div className="flex items-center justify-between gap-[10px] absolute bottom-[5px] w-[85%] left-[8%]">
                            <AmountBox yellow point={100} />
                            <AmountBox point={1000} />
                            <AmountBox point={10000} />
                            <AmountBox point={100000} />
                        </div>
                    </>
                </div>
                {/* Bottom Controls */}

                {/* Overlay */}
                <div className="bg-[#FF6855] w-full h-[20px] -mt-[10px] rounded-tl-[25px] rounded-tr-[25px]"></div>

                {/* Main */}
                <div className="bg-[#E33D21] h-full w-full px-[20px] py-[10px]">
                    <div className="flex items-center justify-between">
                        {/* Left Profile and amount */}
                        <div className="flex items-start">
                            <div className="w-[40px] h-[40px] border-2 border-black bg-[#864222] rounded-md"></div>
                            <div className="">
                                <p className="text-white text-[11px] ml-[5px]">
                                    100Cr
                                </p>
                                <div className="w-[100px] h-[20px] bg-white rounded-tr-[20px] rounded-br-[20px] flex items-center">
                                    <p className="text-[12px] ml-[10px]">80</p>
                                </div>
                            </div>
                        </div>
                        {/* Today's Revenue */}
                        <div className="flex flex-col items-center">
                            <p className="text-[11px] text-white">
                                Today's Revenue:
                            </p>
                            <div className="w-[100px] bg-white h-[20px] rounded-[20px] flex items-center justify-center">
                                <p className="">0</p>
                            </div>
                        </div>
                    </div>

                    {/* RESULTS */}
                    <div className="mt-[10px] flex items-center py-[2px] px-[10px] bg-[#FF684B] rounded-md">
                        <p className="text-white text-[12px] font-semibold">
                            Results:
                        </p>
                        <div className="py-[5px] ml-[10px] flex items-center gap-[4px]">
                            <ResultBox icon={BroccoliIcon} />
                            <ResultBox icon={BurgerIcon} />
                            <ResultBox icon={SushiIcon} />
                            <ResultBox icon={PizzaIcon} />
                            <ResultBox icon={BreadIcon} />
                            <ResultBox icon={SushiIcon} />
                        </div>
                    </div>

                    {/* TWO BIG BOX */}
                    <div className="flex items-center gap-[15px] mt-[10px]">
                        <div className="w-[50%] h-[55px] bg-white rounded-md p-[5px] flex items-center gap-[4px] justify-between">
                            <div className="flex h-full gap-[5px]">
                                <div className="rounded-md h-full w-[45px] border-2 border-red-500"></div>
                                <div className="">
                                    <p className="text-[14px]">প্রবাস...</p>
                                    <p className="text-[12px]">5,020,500</p>
                                </div>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </div>
                        <div className="w-[50%] h-[55px] bg-white rounded-md flex items-center justify-center">
                            <p className="">My History</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 ml-[15px]"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
