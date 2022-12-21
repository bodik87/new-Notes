import { useNavigate, useParams } from "react-router-dom";
import { noteApi } from "../services/NotesService";
import { BTN_VARIANTS, SECTIONS_TYPE, TITLE_COLORS } from "../assets/CONSTANTS";
import { Button } from "../components/UI";
import { ChangeEvent, useState } from "react";
import { TextArea } from "../components/UI/TextArea";

export const NotePage = () => {
  const { data, isError, isLoading, refetch } = noteApi.useGetAllNotesQuery("");
  const { noteId } = useParams();
  const note = data?.filter((note) => note.id.toString() === noteId)[0];

  const [titleValue, setTitleValue] = useState(note?.title);

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitleValue(e.target.value);
  };

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div
      className="min-h-screen flex flex-col items-center p-2"
      style={{ backgroundColor: note?.style?.color }}
    >
      <div className="max-w-[408px] w-full">
        <div className="flex justify-between">
          <Button onclick={goBack} variant={BTN_VARIANTS.back} />
          <Button onclick={() => {}} variant={BTN_VARIANTS.share} />
        </div>
        <textarea
          value={titleValue}
          onChange={handleTitleChange}
          className="w-full py-6 px-4 text-7xl bg-transparent outline-none resize-none"
        />

        {note?.sections?.map((section) => {
          if (section.sectionType === SECTIONS_TYPE.text) {
            return <TextArea key={section.id} body={section.body} />;
          }
        })}
      </div>
    </div>
  );
};
