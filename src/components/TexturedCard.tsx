import Heart from "../assets/heart.svg";
import HeartActive from "../assets/heart_active.svg";

interface TexturedCardProps {
  title: string;
  color: string | undefined;
  isFavorite: boolean;
}

export const TexturedCard = (props: TexturedCardProps) => {
  const favoriteIcon = props.isFavorite ? HeartActive : Heart;
  return (
    <div
      className="max-w-[183px] h-[315px] px-4 pt-6 rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] bg-[url('./assets/wood.png')] bg-cover relative overflow-hidden"
      style={{ backgroundColor: props.color }}
    >
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="w-2/3 text-2xl mt-2 font-semibold leading-none">
            {props.title}
          </p>
          <div className="w-16 h-16 flex justify-center items-center rounded-full bg-black/5 backdrop-blur-[2px]">
            <img src={favoriteIcon} alt="fav" className="w-7 h-7" />
          </div>
        </div>
        <p className="text-sm mt-2 font-semibold text-black/40">
          Update 2h ago
        </p>
      </div>
      <div className="rounded-3xl bg-[url('./assets/sample.png')] bg-cover absolute bottom-0 left-0 right-0 top-32 z-20"></div>
    </div>
  );
};
