import { ChangeEvent, useRef, useState } from "react";

interface TextAreaProps {
  body: string;
}

export const TextArea = (props: TextAreaProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(props.body);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (ref.current) {
      ref.current.style.height = "100%";
      ref.current.style.height = `${e.target.scrollHeight}px`;
    }
    setValue(e.target.value);
  };

  return (
    <textarea
      ref={ref}
      // rows={1}
      value={value}
      onChange={handleChange}
      placeholder="Enter text here..."
      className="w-full px-4 bg-transparent outline-none resize-none border border-black"
    >
      {props.body}
    </textarea>
  );
};
