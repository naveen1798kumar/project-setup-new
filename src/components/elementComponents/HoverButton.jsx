import { Link } from "react-router-dom";

const HoverButton = ({ link, text, color, skew }) => {

const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      to={link}
      onClick={handleClick}
      className={`group relative inline-block bg-white hover:bg-black text-${color}-600 border-2 ring-${color}-600 py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg overflow-hidden group transform hover:scale-105`}
    >
      <span className="relative z-10 group-hover:text-white">{text}</span>
      <span
        className={`absolute inset-0 bg-${color}-600 transition-all  duration-300 transform -translate-x-[90%] skew-x-12 group-hover:translate-x-0`}
      ></span>
    </Link>
  );
};

export default HoverButton;
