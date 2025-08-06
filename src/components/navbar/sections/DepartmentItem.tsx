// components/DepartmentItem.tsx

import { useLocalizedField } from "@/hooks/useLocalizedField";
import { MainCategory } from "@/utils/dtos";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface Props {
  item: MainCategory;
  onMouseEnter: (item: MainCategory) => void;
  title: {
    ar: string;
    en: string;
  };
}

const DepartmentItem = ({ item, onMouseEnter, title }: Props) => {
  const name = useLocalizedField(title);
  return (
    <div
      className="department w-full flex item-center justify-between p-4 border-b border-color ltr:hover:translate-x-1 rtl:hover:-translate-x-1 transition"
      onMouseEnter={() => onMouseEnter(item)}
    >
      <span className="title-color">{name}</span>
      <span className="text-main text-xl ltr:rotate-180">
        <MdOutlineKeyboardArrowLeft />
      </span>
    </div>
  );
};

export default DepartmentItem;
