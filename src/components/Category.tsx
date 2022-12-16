import { ReactNode } from "react";
import styles from "./Category.module.css";

interface CategoryProps {
  children: ReactNode;
  index: number;
  length: number;
  onClick?: () => void;
}

export const Category = (props: CategoryProps) => {
  return (
    <button className="flex justify-center items-center gap-2 py-2 px-4 text-2xl ml-4 text-white rounded-3xl border-2 border-white">
      {props.children}
      {props.index === 0 && (
        <span className="w-8 h-8 flex justify-center items-center rounded-full bg-white">
          {props.length}
        </span>
      )}
    </button>
  );
};
