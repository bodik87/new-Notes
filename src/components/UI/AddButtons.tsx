import Plus from "../../assets/plus.svg";

export const AddButtons = () => {
  return (
    <div className=" w-[172px] h-[88px] fixed left-1/2 -translate-x-1/2 bottom-5 flex justify-center items-center rounded-full gap-1 bg-white/5 backdrop-blur-md z-40">
      <div className=" w-20 h-20 flex justify-center items-center rounded-full bg-black backdrop-blur-md cursor-pointer hover:bg-black/80  hover:rotate-90 transition-all duration-200 active:bg-black select-none">
        <img
          src={Plus}
          alt="fav"
          className="w-6 h-6 transition-all duration-100 active:scale-90"
        />
      </div>
      <div className=" w-20 h-20 flex justify-center items-center rounded-full bg-black/20 backdrop-blur-md"></div>
    </div>
  );
};
