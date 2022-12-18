import { Link, Outlet, useLocation } from "react-router-dom";
import {
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
import { AddButtons, MenuButton, Title } from "./components/UI";
import { noteApi, useGetAllNotesQuery } from "./services/NotesService";

function App() {
  const { data, isError, isLoading, refetch } = noteApi.useGetAllNotesQuery(
    ""
    // {
    //   pollingInterval: 2000,
    // }
  );
  const location = useLocation();
  const foldersArray = data?.filter((cart) => cart.type === "folder");
  const notesArray = data?.filter((cart) => cart.type === "note");

  return (
    <>
      {location.pathname === "/" ? (
        <>
          <div className="bg-[url('./assets/bgDark.png')] w-full min-h-screen p-2 relative">
            <div className="pt-2 mx-auto max-w-[408px] relative">
              <MenuButton />
              <Title title={HOMEPAGE_TITLE} />

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
                  <Link key={folder.id} to={`folder/${folder.id}`}>
                    <Folder title={folder.title} isFavorite={folder.favorite} />
                  </Link>
                ))}

                {notesArray?.map((note) => {
                  if (note.sections?.[0].sectionType === SECTIONS_TYPE.todo) {
                    return <TodoCard key={note.id} note={note} />;
                  }
                  if (note.sections?.[0].sectionType === SECTIONS_TYPE.text) {
                    return (
                      <Link to={`note/${note.id}`}>
                        <TextCard
                          key={note.id}
                          title={note.title}
                          color={note.style?.color}
                          isFavorite={note.favorite}
                          text={note.sections[0].body}
                        />
                      </Link>
                    );
                  }
                  if (note.sections?.[0].sectionType === SECTIONS_TYPE.image) {
                    return (
                      <Link key={note.id} to={`note/${note.id}`}>
                        <TexturedCard
                          title={note.title}
                          color={note.style?.color}
                          background={note.style?.background}
                          image={note.sections[0].body[0]}
                          isFavorite={note.favorite}
                        />
                      </Link>
                    );
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
