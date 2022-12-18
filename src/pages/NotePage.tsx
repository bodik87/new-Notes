import { useParams } from "react-router-dom";
import { noteApi } from "../services/NotesService";

interface NotePageProps {
  // color: string;
}

export const NotePage = (props: NotePageProps) => {
  const { data, isError, isLoading, refetch } = noteApi.useGetAllNotesQuery("");
  const { noteId } = useParams();
  const note = data?.filter((note) => note.id.toString() === noteId)[0];

  return <div>{note?.title}</div>;
};
