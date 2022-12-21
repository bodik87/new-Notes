import { Link } from "react-router-dom";
import Heart from "../assets/heart.svg";
import HeartActive from "../assets/heart_active.svg";
import { INote } from "../models";

interface FolderProps {
  folder: INote;
}

export const Folder = (props: FolderProps) => {
  const favoriteIcon = props.folder.favorite ? HeartActive : Heart;
  return (
    <div className="max-w-[374px] w-full h-fit px-4 py-6 bg-[#F6ECC9] rounded-[50px] overflow-hidden cursor-pointer">
      <div className="flex">
        <div className="w-16 h-16 mr-4 flex justify-center items-center rounded-full bg-white backdrop-blur-[2px] text-2xl leading-none select-none">
          🙂
        </div>

        <Link
          className="flex flex-1"
          key={props.folder.id}
          to={`folder/${props.folder.id}`}
        >
          <div className="flex flex-col mr-4">
            <p className="text-sm pt-2 font-semibold text-black/40 select-none">
              5 notes
            </p>
            <p className="text-2xl font-semibold leading-none select-none">
              {props.folder.title}
            </p>
          </div>
        </Link>

        <div className="w-16 h-16 ml-auto flex justify-center items-center rounded-full bg-black/5 backdrop-blur-sm hover:bg-black/10 transition-all duration-200 active:bg-black/5 select-none">
          <img
            src={favoriteIcon}
            alt="fav"
            className="w-7 h-7 hover:scale-110 transition-all duration-100 active:scale-90"
          />
        </div>
      </div>
    </div>
  );
};
