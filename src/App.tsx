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
  return (
    <div className="bg-[url('./assets/bgDark2.png')] w-full min-h-screen p-2 relative">
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
          {data.map((card) => {
            if (card.type === "folder")
              return <Folder title={card.title} isFavorite={card.favorite} />;
          })}

          {data.map((card) => {
            if (
              card.sections?.some(
                (section) => section.sectionType === SECTIONS_TYPE.todo
                // !section.sectionType.includes(SECTIONS_TYPE.image)
              )
            ) {
              return (
                <TodoCard
                  key={card.id}
                  title={card.title}
                  color={card.style.color}
                  isFavorite={card.favorite}
                  // !!! исправить типы нмже
                  todos={card.sections
                    .filter(
                      (section) =>
                        section.sectionType === SECTIONS_TYPE.todo &&
                        section.body
                    )[0]
                    .body.slice(0, 3)}
                />
              );
            }
            if (
              card.sections?.every(
                (section) => section.sectionType === SECTIONS_TYPE.text
              )
            ) {
              return (
                <TextCard
                  key={card.id}
                  title={card.title}
                  color={card.style.color}
                  isFavorite={card.favorite}
                  text={
                    card.sections.filter(
                      (section) =>
                        section.sectionType === SECTIONS_TYPE.text &&
                        section.body
                    )[0].body
                  }
                />
              );
            }
            if (
              card.sections?.some(
                (section) => section.sectionType === SECTIONS_TYPE.image
                // !section.sectionType.includes(SECTIONS_TYPE.todo)
              )
            ) {
              return <TexturedCard />;
            }
          })}

          {/* <TexturedCard /> */}
        </div>
      </div>

      <AddButtons />
    </div>
  );
}

export default App;
