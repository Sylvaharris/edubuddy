const Card = ({ title, value, subheadline, icon, trend, trendValue }) => {
  const isUp = trend === "up";

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border border-gray-100

        p-6

        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1

        transition-all duration-300

        group
      "
    >
      <div className="flex items-start justify-between">
        {/* TEXT */}
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="text-3xl font-bold mt-2 text-gray-900">{value}</h2>

          {subheadline && (
            <p className="mt-2 text-sm text-gray-600">{subheadline}</p>
          )}

          {trend && trendValue && (
            <div
              className={`
                mt-3 text-xs font-medium flex items-center gap-2
                ${isUp ? "text-green-600" : "text-red-500"}
              `}
            >
              <span
                className={`
                  w-2 h-2 rounded-full
                  ${isUp ? "bg-green-500" : "bg-red-500"}
                `}
              />
              {isUp ? "+" : "-"}
              {trendValue}% this week
            </div>
          )}
        </div>

        {/* ICON */}
        <div
          className="
            w-12 h-12

            rounded-2xl

            flex items-center justify-center

            bg-gray-50
            border border-gray-100

            text-gray-600

            transition-all duration-300

            group-hover:scale-105
          "
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Card;
