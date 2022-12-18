import { TodoItem } from "./UI";
import { INote, ITodo } from "../models";
import Heart from "../assets/heart.svg";
import HeartActive from "../assets/heart_active.svg";
import { Link } from "react-router-dom";
import { SECTIONS_TYPE } from "../assets/CONSTANTS";

interface TodoCardProps {
  note: INote;
}

export const TodoCard = (props: TodoCardProps) => {
  const todos: ITodo[] = props.note.sections
    ?.filter(
      (section) => section.sectionType === SECTIONS_TYPE.todo && section.body
    )[0]
    .body.slice(0, 3) as [];
  const favoriteIcon = props.note.favorite ? HeartActive : Heart;

  return (
    <div
      className="max-w-[183px] h-[315px] px-4 pt-6 rounded-br-[50px] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden select-none cursor-pointer"
      style={{ backgroundColor: props.note.style?.color }}
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
        <p className="text-sm pt-2 pb-4 font-semibold text-black/40 select-none">
          Updated 2h ago
        </p>
      </div>
      <Link to={`note/${props.note.id}`}>
        <div className="flex flex-col gap-1">
          {todos?.map((todo) => (
            <TodoItem
              key={todo.id}
              body={todo.todoBody}
              isChecked={todo.isChecked}
            />
          ))}
        </div>
      </Link>
    </div>
  );
};
