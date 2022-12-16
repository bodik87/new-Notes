import { Folder } from "./components/Folder";
import { TextCard } from "./components/TextCard";
import { TexturedCard } from "./components/TexturedCard";
import { TodoCard } from "./components/TodoCard";

import Menu from "./assets/oval.svg";
import Plus from "./assets/plus.svg";
import { categoriesRow } from "./assets/CONSTANTS";
import { Category } from "./components/Category";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function App() {
  return (
    <div className="bg-[url('./assets/bgDark3.png')] w-full min-h-screen p-2 relative">
      <div className="pt-2 mx-auto max-w-[408px] relative">
        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-white/10 backdrop-blur-md fixed top-4 right-4 z-50">
          <img src={Menu} alt="fav" className="w-4 h-4" />
        </div>

        <h1 className="w-2/3 ml-4 text-white text-7xl">My Notes</h1>

        <div className="py-8 ml-4">
          <Swiper spaceBetween={20} slidesPerView={3}>
            {categoriesRow.map((category, i) => (
              <SwiperSlide>
                <Category key={i} index={i} length={9}>
                  {category}
                </Category>
              </SwiperSlide>
            ))}
          </Swiper>
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
