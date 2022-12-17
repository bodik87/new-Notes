import Heart from "../assets/heart.svg";
import Check from "../assets/check.svg";
import HeartActive from "../assets/heart_active.svg";

interface TextCardProps {
  title: string;
  color: string | undefined;
  isFavorite: boolean;
  text: any;
}

export const TextCard = (props: TextCardProps) => {
  const favoriteIcon = props.isFavorite ? HeartActive : Heart;
  const cardGradient = `linear-gradient(0deg, ${props.color} 0%, ${props.color}, rgba(0,212,255,0) 100%)`;
  return (
    <div
      className="max-w-[183px] h-[315px] px-4 pt-6 rounded-br-[50px] rounded-tl-[50px] rounded-bl-[50px] relative overflow-hidden cursor-pointer"
      style={{ backgroundColor: props.color }}
    >
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="w-2/3 text-2xl mt-2 font-semibold leading-none select-none">
            {props.title}
          </p>
          <div className="w-16 h-16 flex justify-center items-center rounded-full bg-black/5 backdrop-blur-sm hover:bg-black/10 transition-all duration-200 active:bg-black/5 select-none">
            <img
              src={favoriteIcon}
              alt="fav"
              className="w-7 h-7 hover:scale-110 transition-all duration-100 active:scale-90"
            />
          </div>
        </div>
        <p className="text-sm pt-2 pb-4 font-semibold text-black/40 select-none">
          Update 2h ago
        </p>
      </div>
      {/* Body */}
      <div
        className="absolute bottom-0 left-0 h-14 w-[200px]"
        style={{ background: cardGradient }}
      ></div>
      <div className="select-none">{props.text}</div>
    </div>
  );
};
