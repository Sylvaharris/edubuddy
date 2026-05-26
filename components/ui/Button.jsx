"use client";

const Button = ({
  title,
  icon,
  onClick,
  type = "button",
  fullWidth = false,
  variant = "primary", // primary | secondary
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2

        px-6 py-3.5

        rounded-2xl

        font-semibold

        transition-all duration-300

        active:scale-[0.98]

        hover:-translate-y-0.5

        shadow-soft hover:shadow-medium

        ${fullWidth ? "w-full" : "w-fit"}

        ${
          variant === "primary"
            ? "text-white"
            : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50"
        }
      `}
      style={
        variant === "primary"
          ? {
              background: "var(--primary)",
            }
          : {}
      }
    >
      <span>{title}</span>

      {icon && <span className="text-xl">{icon}</span>}
    </button>
  );
};

export default Button;
