import { TodoItem } from "./UI";
import { ITodo } from "../models";
import Heart from "../assets/heart.svg";
import HeartActive from "../assets/heart_active.svg";

interface TodoCardProps {
  title: string;
  color: string | undefined;
  isFavorite: boolean;
  todos: any;
}

export const TodoCard = (props: TodoCardProps) => {
  const favoriteIcon = props.isFavorite ? HeartActive : Heart;

  return (
    <div
      className="max-w-[183px] h-[315px] px-4 pt-6 rounded-br-[50px] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden select-none cursor-pointer"
      style={{ backgroundColor: props.color }}
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
        <p className="text-sm pt-2 pb-4 font-semibold text-black/40">
          Updated 2h ago
        </p>
      </div>
      <div className="flex flex-col gap-1">
        {props.todos.map((todo: ITodo) => (
          <TodoItem
            key={todo.id}
            body={todo.todoBody}
            isChecked={todo.isChecked}
          />
        ))}
      </div>
    </div>
  );
};
