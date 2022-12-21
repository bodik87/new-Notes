import { useState } from "react";

interface TextBoxProps {
  body: string;
}

export const TextBox = (props: TextBoxProps) => {
  const [value, setValue] = useState(props.body);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  //window.getSelection()?.toString()

  return (
    <>
      <div
        defaultValue={value}
        contentEditable="true"
        aria-multiline="true"
        spellCheck="false"
        role="textbox"
        onChange={handleChange}
        className="py-2 outline-none"
      >
        {props.body}
      </div>
    </>
  );
};
