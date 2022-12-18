import { useParams } from "react-router-dom";
import { noteApi } from "../services/NotesService";

interface NotePageProps {
  // color: string;
}

export const NotePage = (props: NotePageProps) => {
  const { noteId } = useParams();

  const { data, isError, isLoading, refetch } = noteApi.useGetNoteQuery(noteId);
  return <div>NotePage</div>;
};
