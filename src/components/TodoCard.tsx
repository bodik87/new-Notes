import Heart from "../assets/heart.svg";
import Check from "../assets/check.svg";
import HeartActive from "../assets/heart_active.svg";

export const TodoCard = () => {
  return (
    <div className="max-w-[183px] h-[315px] px-4 pt-6 bg-[#EA7A53] rounded-br-[50px] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden">
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="w-2/3 text-2xl mt-2 font-semibold leading-none">
            Plan for The Day
          </p>
          <div className="w-16 h-16 flex justify-center items-center rounded-full bg-black/5 backdrop-blur-[2px]">
            <img src={HeartActive} alt="fav" className="w-7 h-7" />
          </div>
        </div>
        <p className="text-sm pt-2 pb-4 font-semibold text-black/40">
          Update 2h ago
        </p>
      </div>
      {/* Body */}
      <div className="flex flex-col gap-1">
        <div className="flex gap-3 items-center rounded-3xl p-3 bg-black/5 text-black/50 line-through">
          <div className="w-6 h-6 flex justify-center items-center rounded-full bg-black/50 border-2 border-black/0">
            <img src={Check} alt="fav" className="w-3 h-3 opacity-50" />
          </div>
          Buy food
        </div>

        <div className="flex gap-3 items-center rounded-3xl p-3 bg-black/5">
          <div className="w-6 h-6 flex justify-center items-center rounded-full border-2 border-black/50"></div>
          GYM
        </div>

        <div className="flex gap-3 items-center rounded-3xl p-3 bg-black/5">
          <div className="w-6 h-6 flex justify-center items-center rounded-full border-2 border-black/50"></div>
          Invest
        </div>
      </div>
    </div>
  );
};
