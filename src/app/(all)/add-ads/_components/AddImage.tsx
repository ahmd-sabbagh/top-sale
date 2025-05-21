"use client";

import { image_plus } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const AddImage = () => {
  const t = useTranslations();
  const [previews, setPreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));

    setPreviews((prev) => [...prev, ...previewUrls]);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleRemoveImage = (index: number) => {
    const updatedPreviews = previews.filter((_, i) => i !== index);
    const updatedFiles = files.filter((_, i) => i !== index);
    setPreviews(updatedPreviews);
    setFiles(updatedFiles);
  };

  return (
    <div>
      <p className="title-color">{t("chose image")}</p>

      <label
        htmlFor="image_ads"
        className="relative mt-3 h-[161px] md:h-[138px] rounded-lg overflow-hidden border border-dashed border-main-color bg-[#FFCDE733] flex-c cursor-pointer"
      >
        <input
          id="image_ads"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hidden"
        />
        {previews.length > 0 ? (
          <div className="flex flex-wrap gap-3 p-2 w-full h-full overflow-auto">
            {previews.map((src, idx) => (
              <div
                key={idx}
                className="relative w-[100px] h-[100px] rounded-md overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`preview-${idx}`}
                  fill
                  className="object-cover rounded-md"
                  sizes="100px"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(idx)}
                  className="absolute top-1 right-1 w-5 h-5 bg-black/60 text-white text-xs rounded-full flex items-center justify-center"
                >
                  ✖
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <Image src={image_plus} alt="add icon" loading="lazy" />
            <p className="text-main text-center text-sm">{t("add image")}</p>
          </div>
        )}
      </label>
    </div>
  );
};

export default AddImage;
