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
  const foldersArray = data.filter((cart) => cart.type === "folder");
  const notesArray = data.filter((cart) => cart.type === "note");

  return (
    <div className="bg-[url('./assets/bgDark.png')] w-full min-h-screen p-2 relative">
      <div className="pt-2 mx-auto max-w-[408px] relative">
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
            <Folder
              key={folder.id}
              title={folder.title}
              isFavorite={folder.favorite}
            />
          ))}

          {notesArray.map((note) => {
            if (note.sections?.[0].sectionType === SECTIONS_TYPE.todo) {
              return (
                <TodoCard
                  key={note.id}
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
              );
            }
            if (note.sections?.[0].sectionType === SECTIONS_TYPE.text) {
              return (
                <TextCard
                  key={note.id}
                  title={note.title}
                  color={note.style?.color}
                  isFavorite={note.favorite}
                  text={note.sections[0].body}
                />
              );
            }
            if (note.sections?.[0].sectionType === SECTIONS_TYPE.image) {
              return (
                <TexturedCard
                  key={note.id}
                  title={note.title}
                  color={note.style?.color}
                  background={note.style?.background}
                  image={note.sections[0].body[0]}
                  isFavorite={note.favorite}
                />
              );
            }
          })}
        </div>
      </div>

      <AddButtons />
    </div>
  );
}

export default App;
