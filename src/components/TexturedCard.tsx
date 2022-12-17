import Heart from "../assets/heart.svg";
import HeartActive from "../assets/heart_active.svg";

interface TexturedCardProps {
  title: string;
  color: string | undefined;
  isFavorite: boolean;
  background: any;
  image: any;
}

export const TexturedCard = (props: TexturedCardProps) => {
  const favoriteIcon = props.isFavorite ? HeartActive : Heart;

  return (
    <div
      className="max-w-[183px] h-[315px] px-4 pt-6 rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] bg-cover relative overflow-hidden cursor-pointer"
      style={{
        backgroundColor: props.color,
        backgroundImage: `url(${props.background})`,
      }}
    >
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="w-2/3 text-2xl mt-2 font-semibold leading-none">
            {props.title}
          </p>
          <div className="w-16 h-16 flex justify-center items-center rounded-full bg-black/5 backdrop-blur-sm hover:bg-black/10 transition-all duration-200 active:bg-black/5">
            <img
              src={favoriteIcon}
              alt="fav"
              className="w-7 h-7 hover:scale-110 transition-all duration-100 active:scale-90"
            />
          </div>
        </div>
        <p className="text-sm mt-2 font-semibold text-black/40">
          Update 2h ago
        </p>
      </div>
      <div
        className="rounded-3xl bg-cover absolute bottom-0 left-0 right-0 top-32 z-20"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>
    </div>
  );
};
