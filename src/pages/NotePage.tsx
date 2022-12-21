import { useParams } from "react-router-dom";
import { noteApi } from "../services/NotesService";
import { BTN_VARIANTS, TITLE_COLORS } from "../assets/CONSTANTS";
import { Button } from "../components/UI";
import { ChangeEvent, useState } from "react";

export const NotePage = () => {
  const { data, isError, isLoading, refetch } = noteApi.useGetAllNotesQuery("");
  const { noteId } = useParams();
  const note = data?.filter((note) => note.id.toString() === noteId)[0];

  const [titleValue, setTitleValue] = useState(note?.title);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-2"
      style={{ backgroundColor: note?.style?.color }}
    >
      <div className="max-w-[408px] w-full">
        <div className="flex justify-between">
          <Button variant={BTN_VARIANTS.back} />
          <Button variant={BTN_VARIANTS.share} />
        </div>
        <input value={titleValue} onChange={handleTitleChange} />
      </div>
    </div>
  );
};
