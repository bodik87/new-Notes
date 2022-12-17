import Heart from "../assets/heart.svg";
import HeartActive from "../assets/heart_active.svg";

interface FolderProps {
  title: string;
  isFavorite: boolean;
}

export const Folder = (props: FolderProps) => {
  const favoriteIcon = props.isFavorite ? HeartActive : Heart;
  return (
    <div className="max-w-[374px] w-full h-fit px-4 py-6 bg-[#F6ECC9] rounded-[50px] overflow-hidden">
      <div className="flex">
        <div className="w-16 h-16 mr-4 flex justify-center items-center rounded-full bg-white backdrop-blur-[2px] text-2xl leading-none">
          🙂
        </div>

        <div className="flex flex-col mr-4">
          <p className="text-sm pt-2 font-semibold text-black/40">5 notes</p>
          <p className="text-2xl font-semibold leading-none">{props.title}</p>
        </div>

        <div className="w-16 h-16 ml-auto flex justify-center items-center rounded-full bg-black/5 backdrop-blur-[2px]">
          <img src={favoriteIcon} alt="fav" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};
