import { categoriesRow, HOMEPAGE_TITLE } from "./assets/CONSTANTS";
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
            if (
              card.type === "note" &&
              card.sections?.some(
                (section) => section.sectionType === "todoList"
              )
            ) {
              return (
                <TodoCard
                  key={card.id}
                  title={card.title}
                  isFavorite={true}
                  todos={
                    card.sections.filter(
                      (section) =>
                        section.sectionType === "todoList" && section.body
                    )[0].body
                  }
                />
              );
            }
          })}

          {/* <TexturedCard />
          <Folder />
          <TextCard />
          <TexturedCard /> */}
        </div>
      </div>

      <AddButtons />
    </div>
  );
}

export default App;
