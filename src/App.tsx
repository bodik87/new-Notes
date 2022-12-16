import { Folder } from "./components/Folder";
import { TextCard } from "./components/TextCard";
import { TexturedCard } from "./components/TexturedCard";
import { TodoCard } from "./components/TodoCard";

import Menu from "./assets/oval.svg";

function App() {
  return (
    <div className="bg-[url('./assets/bgDark.png')] w-full min-h-screen p-2">
      <div className="pt-2 mx-auto max-w-[408px]">
        <div className="flex justify-end">
          <div className="w-16 h-16 flex justify-center items-center rounded-full bg-white/10 backdrop-blur-[2px]">
            <img src={Menu} alt="fav" className="w-4 h-4" />
          </div>
        </div>
        <h1 className="w-2/3 ml-4 text-white pb-8 text-7xl">My Notes</h1>
        <div className="flex justify-center flex-wrap gap-2">
          <TodoCard />
          <TexturedCard />
          <Folder />
          <TextCard />
          <TexturedCard />
        </div>
      </div>
    </div>
  );
}

export default App;
