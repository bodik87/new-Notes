import Check from "../../assets/check.svg";

interface TodoItemProps {
  body: string;
  isChecked: boolean;
  onClick?: () => void;
}

export const TodoItem = (props: TodoItemProps) => {
  return (
    <div
      className={`flex gap-3 items-center rounded-3xl p-3 bg-black/5 ${
        props.isChecked ? "line-through text-black/50" : "text-black"
      }`}
    >
      <div
        className={`w-6 h-6 flex justify-center items-center rounded-full ${
          props.isChecked ? "bg-black/50" : "border-2 border-black/50"
        }`}
      >
        {props.isChecked && (
          <img src={Check} alt="fav" className="w-3 h-3 opacity-50" />
        )}
      </div>
      {props.body}
    </div>
  );
};
