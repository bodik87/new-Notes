import Heart from "../assets/heart.svg";
import HeartActive from "../assets/heart_active.svg";

export const TexturedCard = () => {
  return (
    <div className="max-w-[183px] h-[315px] px-4 pt-6 bg-[#f7d44c] rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] bg-[url('./assets/wood.png')] bg-cover overflow-hidden">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="w-2/3 text-2xl mt-2 font-semibold leading-none">
            Image Notes
          </p>
          <div className="w-16 h-16 flex justify-center items-center rounded-full bg-black/5 backdrop-blur-[2px]">
            <img src={Heart} alt="fav" className="w-7 h-7" />
          </div>
        </div>
        <p className="text-sm mt-2 font-semibold text-black/40">
          Update 2h ago
        </p>
      </div>
    </div>
  );
};
