import { IoIosArrowBack } from "react-icons/io";

type SelectButtonProps = {
  label: string;
  placeholder: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

const SelectButton = ({
  label,
  placeholder,
  onClick,
  icon,
}: SelectButtonProps) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="title-color">{label}</span>
      <button
        type="button"
        onClick={onClick}
        className="flex items-center justify-between rounded border border-color px-4 h-[50px] w-full"
      >
        <span className="text-gray text-sm">{placeholder}</span>
        <span className="block ltr:rotate-180 text-gray">
          {icon || <IoIosArrowBack />}
        </span>
      </button>
    </div>
  );
};

export default SelectButton;
