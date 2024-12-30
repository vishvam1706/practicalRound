const Button = ({
  type = "submit",
  title,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-white bg-[#04C35C] py-2 rounded-[5px] ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
