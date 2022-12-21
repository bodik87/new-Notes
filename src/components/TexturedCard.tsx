import { Link } from "react-router-dom";
import Heart from "../assets/heart.svg";
import HeartActive from "../assets/heart_active.svg";
import { INote } from "../models";

interface TexturedCardProps {
  note: INote;
}

export const TexturedCard = (props: TexturedCardProps) => {
  const favoriteIcon = props.note.favorite ? HeartActive : Heart;
  const image = props.note.sections?.[0].body[0];
  return (
    <div
      className="max-w-[183px] h-[315px] px-4 pt-6 rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] bg-cover relative overflow-hidden cursor-pointer"
      style={{
        backgroundColor: props.note.style?.color,
        backgroundImage: `url(${props.note.style?.background})`,
      }}
    >
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="w-2/3 text-2xl mt-2 font-semibold leading-none select-none">
            {props.note.title}
          </p>
          <div className="w-16 h-16 flex justify-center items-center rounded-full bg-black/5 backdrop-blur-sm hover:bg-black/10 transition-all duration-200 active:bg-black/5 select-none">
            <img
              src={favoriteIcon}
              alt="fav"
              className="w-7 h-7 hover:scale-110 transition-all duration-100 active:scale-90"
            />
          </div>
        </div>
      </div>
      <Link key={props.note.id} to={`note/${props.note.id}`}>
        <p className="text-sm mt-2 font-semibold text-black/40 select-none">
          Update 2h ago
        </p>
        <div
          className="rounded-3xl bg-cover absolute bottom-0 left-0 right-0 top-32 z-20"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </Link>
    </div>
  );
};
