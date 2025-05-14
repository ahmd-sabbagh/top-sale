"use client";
import { filter_icon, profile } from "@/assets";
import { SortBy } from "@/components";
import Image from "next/image";
import React, { useState } from "react";
import NameItem from "./NameItem";

const Names = () => {
  const namesData = [
    {
      id: "1",
      image: profile,
      name: "محمد عبدالجليل",
      msg: "السلام عليكم و رحمة الله",
      date: "منذ 3 دقائق",
    },
    {
      id: "2",
      image: profile,
      name: "محمد عبدالجليل",
      msg: "السلام عليكم و رحمة الله",
      date: "منذ 3 دقائق",
    },
    {
      id: "3",
      image: profile,
      name: "محمد عبدالجليل",
      msg: "السلام عليكم و رحمة الله",
      date: "منذ 3 دقائق",
    },
    {
      id: "4",
      image: profile,
      name: "محمد عبدالجليل",
      msg: "السلام عليكم و رحمة الله",
      date: "منذ 3 دقائق",
    },
    {
      id: "5",
      image: profile,
      name: "محمد عبدالجليل",
      msg: "السلام عليكم و رحمة الله",
      date: "منذ 3 دقائق",
    },
  ];
  const [name, setName] = useState("1");
  const onClick = (id: string) => {
    setName(id);
  };
  return (
    <div>
      <div className="flex items-center justify-between p-4 border border-color rounded">
        <div className="p-2 w-[34px] h-[34px] flex-c rounded border border-color">
          <Image src={filter_icon} alt="filter-icon" priority />
        </div>
        <SortBy />
      </div>
      {/* Names */}
      <div className="mt-6 flex flex-col gap-5 max-h-[470px] overflow-y-scroll h-scroll">
        {namesData.map((item) => (
          <NameItem key={item.id} {...item} onClick={onClick} state={name} />
        ))}
      </div>
    </div>
  );
};

export default Names;
