"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { SearchInput, CheckBox } from "@/components";

type Props = {
  title: string;
  data: string[];
  selectedItem: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  refProp?: React.RefObject<HTMLDivElement | null>;
};

const SelectableList = ({
  title,
  data,
  selectedItem,
  onChange,
  placeholder,
  refProp,
}: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      ref={refProp}
      className="bg-white w-full rounded-lg overflow-hidden absolute top-[calc(100%+10px)] start-0 z-40 bx-shadow"
    >
      {/* Head */}
      <div className="flex items-center justify-between p-4 border-b border-color">
        <span className="title-color">{title}</span>
        <span className="text-main">
          <IoIosArrowUp />
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Search */}
        {placeholder && (
          <SearchInput
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSearch={() => console.log("Searching for:", searchTerm)}
          />
        )}
        {/* List */}
        <div
          className={`${
            placeholder ? "mt-4" : ""
          } max-h-[300px] overflow-y-scroll h-scroll`}
        >
          {filteredData.map((item, idx) => (
            <div className="py-4 pe-4 not-last:border-b border-color" key={idx}>
              <CheckBox
                lang={selectedItem}
                title={item}
                item={String(idx)}
                onChange={onChange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectableList;
