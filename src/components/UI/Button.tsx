import { BTN_VARIANTS } from "../../assets/CONSTANTS";
import Menu from "../../assets/oval.svg";
import Back from "../../assets/back.svg";
import Share from "../../assets/oval.svg";

interface ButtonProps {
  variant: string;
  onclick: () => void;
}

export const Button = (props: ButtonProps) => {
  const getCurrentImage = (variant: string) => {
    switch (variant) {
      case BTN_VARIANTS.menu:
        return Menu;
      case BTN_VARIANTS.back:
        return Back;
      case BTN_VARIANTS.share:
        return Share;
      default:
        break;
    }
  };
  const currentImage = getCurrentImage(props.variant);

  const handleClick = () => {
    props.onclick();
  };

  return (
    <div
      onClick={handleClick}
      className="w-16 h-16 flex justify-center items-center rounded-full bg-white/10 backdrop-blur-md cursor-pointer hover:bg-white/20 transition-all duration-200 active:bg-white/5 select-none"
    >
      <img
        src={currentImage}
        alt="fav"
        className="w-5 h-5 transition-all duration-100 active:scale-90"
      />
    </div>
  );
};
