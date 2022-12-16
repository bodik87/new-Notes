import { Folder } from "./components/Folder";
import { TextCard } from "./components/TextCard";
import { TexturedCard } from "./components/TexturedCard";
import { TodoCard } from "./components/TodoCard";

import Menu from "./assets/oval.svg";
import Plus from "./assets/plus.svg";
import { categoriesRow } from "./assets/CONSTANTS";
import { Category } from "./components/Category";

function App() {
  return (
    <div className="bg-[url('./assets/bgDark3.png')] w-full min-h-screen p-2">
      <div className="pt-2 mx-auto max-w-[408px]">
        <div className="flex justify-end">
          <div className="w-16 h-16 flex justify-center items-center rounded-full bg-white/10 backdrop-blur-[4px]">
            <img src={Menu} alt="fav" className="w-4 h-4" />
          </div>
        </div>
        <h1 className="w-2/3 ml-4 text-white text-7xl">My Notes</h1>

        <div className="flex gap-2 py-8">
          {categoriesRow.map((category, i) => (
            <Category key={i} index={i} length={9}>
              {category}
            </Category>
          ))}
        </div>
        <div className="flex justify-center flex-wrap gap-2">
          <TodoCard />
          <TexturedCard />
          <Folder />
          <TextCard />
          <TexturedCard />
        </div>
      </div>
      <div className=" w-[172px] h-[88px] fixed left-1/2 -translate-x-1/2 bottom-5 flex justify-center items-center rounded-full gap-1 bg-white/5 backdrop-blur-md z-40">
        <div className=" w-20 h-20 flex justify-center items-center rounded-full bg-black backdrop-blur-md">
          <img src={Plus} alt="fav" className="w-6 h-6" />
        </div>
        <div className=" w-20 h-20 flex justify-center items-center rounded-full bg-black/20 backdrop-blur-md"></div>
      </div>
    </div>
  );
}

export default App;
