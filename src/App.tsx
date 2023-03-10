import { Link, Outlet, useLocation } from "react-router-dom";
import {
  BTN_VARIANTS,
  categoriesRow,
  HOMEPAGE_TITLE,
  SECTIONS_TYPE,
} from "./assets/CONSTANTS";
import {
  Category,
  Folder,
  TextCard,
  TexturedCard,
  TodoCard,
} from "./components";
import { AddButtons, Button } from "./components/UI";
import { noteApi } from "./services/NotesService";

function App() {
  const { data, isError, isLoading, refetch } = noteApi.useGetAllNotesQuery("");
  const location = useLocation();
  const foldersArray = data?.filter((cart) => cart.type === "folder");
  const notesArray = data?.filter((cart) => cart.type === "note");

  return (
    <>
      {location.pathname === "/" ? (
        <>
          <div className="bg-[url('./assets/bgDark.png')] w-full min-h-screen p-2 relative">
            <div className="pt-2 mx-auto max-w-[408px] relative">
              <div className="flex justify-end">
                <Button onclick={() => {}} variant={BTN_VARIANTS.menu} />
              </div>
              <h1 className="w-2/3 ml-4 text-white text-7xl select-none">
                {HOMEPAGE_TITLE}
              </h1>

              <div className="flex gap-2 py-8 ml-4">
                {categoriesRow.map((category, i) => (
                  <Category key={i} index={i} length={data?.length}>
                    {category}
                  </Category>
                ))}
              </div>

              {isError && (
                <h1 className="text-red-500">Problem with loading...</h1>
              )}
              {isLoading && <h1 className="text-white">Loading...</h1>}

              <div className="flex justify-center flex-wrap gap-2">
                {foldersArray?.map((folder) => (
                  <Folder key={folder.id} folder={folder} />
                ))}

                {notesArray?.map((note) => {
                  if (note.sections?.[0].sectionType === SECTIONS_TYPE.todo) {
                    return <TodoCard key={note.id} note={note} />;
                  }
                  if (note.sections?.[0].sectionType === SECTIONS_TYPE.text) {
                    return <TextCard key={note.id} note={note} />;
                  }
                  if (note.sections?.[0].sectionType === SECTIONS_TYPE.image) {
                    return <TexturedCard key={note.id} note={note} />;
                  }
                })}
              </div>
            </div>
            <AddButtons />
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default App;
