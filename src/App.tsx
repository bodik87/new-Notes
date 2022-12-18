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
import { data } from "./data";

function App() {
  const location = useLocation();
  const foldersArray = data.filter((cart) => cart.type === "folder");
  const notesArray = data.filter((cart) => cart.type === "note");

  return (
    <>
      {location.pathname === "/" ? (
        <div className="bg-[url('./assets/bgDark.png')] w-full min-h-screen p-2 relative">
          <div className="pt-2 mx-auto max-w-[408px] relative">
            <Outlet />
            <MenuButton />
            <Title title={HOMEPAGE_TITLE} />

            <div className="flex gap-2 py-8 ml-4">
              {categoriesRow.map((category, i) => (
                <Category key={i} index={i} length={data.length}>
                  {category}
                </Category>
              ))}
            </div>

            <div className="flex justify-center flex-wrap gap-2">
              {foldersArray.map((folder) => (
                <Link key={folder.id} to={`folder/${folder.id}`}>
                  <Folder title={folder.title} isFavorite={folder.favorite} />
                </Link>
              ))}

              {notesArray.map((note) => {
                if (note.sections?.[0].sectionType === SECTIONS_TYPE.todo) {
                  return (
                    <Link key={note.id} to={`note/${note.id}`}>
                      <TodoCard
                        title={note.title}
                        color={note.style?.color}
                        isFavorite={note.favorite}
                        todos={note.sections
                          ?.filter(
                            (section) =>
                              section.sectionType === SECTIONS_TYPE.todo &&
                              section.body
                          )[0]
                          .body.slice(0, 3)}
                      />
                    </Link>
                  );
                }
                if (note.sections?.[0].sectionType === SECTIONS_TYPE.text) {
                  return (
                    <Link key={note.id} to={`note/${note.id}`}>
                      <TextCard
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
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default App;
