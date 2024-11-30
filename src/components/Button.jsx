/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Button = ({
  // eslint-disable-next-line react/prop-types
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
  onClick,
}) => {
  return (
    <button
      id={id}
      onClick={onClick} // Add onClick handler here
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full  px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
