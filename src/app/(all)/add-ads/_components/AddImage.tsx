
import { image_plus } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const AddImage = () => {
  const t = useTranslations();
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
      setFile(selectedFile);
    }
  };
  return (
    <div>
      <p className="title-color">{t("chose image")}</p>
      <label
        htmlFor="image_ads"
        className="relative mt-3 h-[161px] md:h-[138px] rounded-lg overflow-hidden border border-dashed border-main-color bg-[#FFCDE733] flex-c"
      >
        <input
          id="image_ads"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        {preview ? (
          <Image
            src={preview}
            alt="ad-image"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
        ) : (
          <div className="flex flex-col items-center cursor-pointer">
            <Image src={image_plus} alt="add icon" loading="lazy" />
            <p className="text-main text-center text-sm">{t("add image")}</p>
          </div>
        )}
      </label>
    </div>
  );
};

export default AddImage;
