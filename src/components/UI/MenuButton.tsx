import Menu from "../../assets/oval.svg";

export const MenuButton = () => {
  return (
    <div className="w-16 h-16 flex justify-center items-center rounded-full bg-white/10 backdrop-blur-md fixed top-4 right-4 z-50 cursor-pointer hover:bg-white/20 hover:rotate-90 transition-all duration-200 active:bg-white/5 select-none">
      <img
        src={Menu}
        alt="fav"
        className="w-4 h-4 transition-all duration-100 active:scale-90"
      />
    </div>
  );
};
