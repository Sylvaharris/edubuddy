import {
  HiOutlineCalculator,
  HiOutlineBeaker,
  HiOutlineLanguage,
  HiOutlineGlobeAlt,
  HiOutlineCpuChip,
  HiOutlinePaintBrush,
} from "react-icons/hi2";

const subjects = [
  {
    id: 1,
    name: "Mathematics",
    class: "JSS1A",
    status: "Published",

    materials: ["PDF Notes", "Slides"],

    resources: ["New General Mathematics — Pearson", "https://mathworld.com"],

    curriculum: ["Algebra", "Fractions", "Geometry", "Ratio"],

    icon: <HiOutlineCalculator />,
    color: {
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
  },

  {
    id: 2,
    name: "English Language",
    class: "JSS2B",
    status: "Draft",

    materials: ["Workbook", "Essay Samples"],

    resources: ["Oxford English", "Grammar Guide"],

    curriculum: ["Comprehension", "Essay Writing", "Grammar"],

    icon: <HiOutlineLanguage />,
    color: {
      bg: "bg-orange-50",
      text: "text-orange-600",
    },
  },

  {
    id: 3,
    name: "Science",
    class: "SS1A",
    status: "Published",

    materials: ["Lab Manual", "Slides"],

    resources: ["Integrated Science Textbook"],

    curriculum: ["Biology", "Physics", "Chemistry"],

    icon: <HiOutlineBeaker />,
    color: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
    },
  },

  {
    id: 4,
    name: "Geography",
    class: "SS2A",
    status: "Published",

    materials: ["Maps", "PPT"],

    resources: ["Oxford Geography"],

    curriculum: ["Climate", "Earth Structure"],

    icon: <HiOutlineGlobeAlt />,
    color: {
      bg: "bg-purple-50",
      text: "text-purple-600",
    },
  },

  {
    id: 5,
    name: "Computer Studies",
    class: "JSS3A",
    status: "Draft",

    materials: ["Programming Notes"],

    resources: ["Introduction to Computers"],

    curriculum: ["Computer Basics", "HTML"],

    icon: <HiOutlineCpuChip />,
    color: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
    },
  },

  {
    id: 6,
    name: "Fine Arts",
    class: "JSS2A",
    status: "Published",

    materials: ["Drawing Templates"],

    resources: ["Art Fundamentals"],

    curriculum: ["Color Theory", "Sketching"],

    icon: <HiOutlinePaintBrush />,
    color: {
      bg: "bg-pink-50",
      text: "text-pink-600",
    },
  },
];

export default subjects;
