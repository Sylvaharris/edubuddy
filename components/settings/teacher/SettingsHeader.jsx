import {
  HiOutlineCheckBadge,
  HiOutlineCog6Tooth,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const SettingsHeader = () => {
  return (
    <section
      className="
      bg-white
      rounded-3xl
      border
      border-gray-100
      shadow-sm
      p-6
      md:p-8
      "
    >
      <div
        className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-6
        "
      >
        <div className="flex items-start gap-4">
          <div
            className="
            w-12
            h-12
            rounded-2xl
            flex
            items-center
            justify-center
            text-white
            shadow-sm
            "
            style={{ background: "var(--primary-solid)" }}
          >
            <HiOutlineCog6Tooth className="text-2xl" />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">
              Teacher workspace
            </p>

            <h1 className="text-3xl font-bold text-gray-900 mt-1">
              Account Settings
            </h1>

            <p className="text-gray-500 mt-2 max-w-2xl leading-relaxed">
              Manage your profile, security, alerts and workspace preferences
              from one organized control center.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div
            className="
            flex
            items-center
            gap-2
            px-4
            py-3
            rounded-2xl
            bg-green-50
            text-green-700
            border
            border-green-100
            text-sm
            font-semibold
            "
          >
            <HiOutlineCheckBadge className="text-lg" />
            Active account
          </div>

          <div
            className="
            flex
            items-center
            gap-2
            px-4
            py-3
            rounded-2xl
            bg-blue-50
            text-blue-700
            border
            border-blue-100
            text-sm
            font-semibold
            "
          >
            <HiOutlineShieldCheck className="text-lg" />
            2FA protected
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsHeader;
