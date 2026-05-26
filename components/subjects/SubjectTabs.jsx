"use client";

const tabs = ["All", "Curriculum", "Resources", "Materials"];

const SubjectTabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="
      flex
      gap-3
      flex-wrap
      mb-6
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelectedTab(tab)}
          className={`
            px-5
            py-2.5

            rounded-xl
            text-sm
            font-medium

            transition-all

            ${
              selectedTab === tab
                ? "bg-gray-900 text-white"
                : "bg-white border border-gray-100 text-gray-600 hover:bg-gray-50"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SubjectTabs;
