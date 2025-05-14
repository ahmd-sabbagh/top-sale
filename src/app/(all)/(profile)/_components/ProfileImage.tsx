"use client";

import { pin_add_image } from "@/assets";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const ProfileImage = () => {
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
    <div className="p-4 border-b border-color">
      {/* Image */}
      <div className="relative w-fit mx-auto">
        <div className="w-[60px] md:w-[86px] h-[60px] md:h-[86px] rounded-full relative before:content-[''] before:absolute before:w-full before:h-full before:bg-[#B027704A] before:z-10 overflow-hidden bg-gray-100 border border-color">
          {preview && (
            <Image
              src={preview}
              alt="profile image"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(min-width: 768px) 86px, 60px"
            />
          )}
        </div>
        <label
          htmlFor="image"
          className="flex-c w-3 md:w-5 absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <Image src={pin_add_image} alt="add icon" loading="lazy" />
        </label>
      </div>
      {/* Info */}
      <div className="mt-3 text-center">
        <h3 className="md:text-xl title-color">{"محمد عبدالجليل"}</h3>
        <p className="text-sm md:text-base text-gray">{"Mo@gmail.com"}</p>
      </div>
    </div>
  );
};

export default ProfileImage;
