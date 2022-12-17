import { ReactNode } from "react";

interface TitleProps {
  title: string;
}

export const Title = (props: TitleProps) => {
  return (
    <h1 className="w-2/3 ml-4 text-white text-7xl select-none">
      {props.title}
    </h1>
  );
};
