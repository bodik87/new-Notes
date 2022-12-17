import Menu from "../../assets/oval.svg";

export const MenuButton = () => {
  return (
    <div className="w-16 h-16 flex justify-center items-center rounded-full bg-white/10 backdrop-blur-md fixed top-4 right-4 z-50">
      <img src={Menu} alt="fav" className="w-4 h-4" />
    </div>
  );
};
