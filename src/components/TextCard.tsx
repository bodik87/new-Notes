import Heart from "../assets/heart.svg";
import Check from "../assets/check.svg";
import HeartActive from "../assets/heart_active.svg";

export const TextCard = () => {
  return (
    <div className="max-w-[183px] h-[315px] px-4 pt-6 bg-[#A8D672] rounded-br-[50px] rounded-tl-[50px] rounded-bl-[50px] relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="w-2/3 text-2xl mt-2 font-semibold leading-none">
            Text of lecture
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
      <div className="absolute bottom-0 left-0 h-14 w-[200px] bg-gradient-to-t from-[#A8D672] via-[#A8D672]"></div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        reiciendis blanditiis est deleniti. Inventore tempore, atque, est ex,
        voluptate cumque sit accusamus doloremque veritatis dignissimos
        provident totam libero fugiat quos!
      </div>
    </div>
  );
};
