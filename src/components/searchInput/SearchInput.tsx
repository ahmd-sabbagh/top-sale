
import { InputHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import { searchIcon } from "@/assets";

type SearchInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchInput = ({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
  ...rest
}: SearchInputProps) => {
  return (
    <div className="flex items-center gap-4 h-12 px-4 bg-[#EFEFEF] rounded-4xl">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="grow bg-transparent outline-none"
        {...rest}
      />
      <div onClick={onSearch} className="cursor-pointer">
        <Image src={searchIcon} alt="search-icon" width={20} height={20} loading="lazy" />
      </div>
    </div>
  );
};

export default SearchInput;
