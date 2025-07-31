"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const DescriptionSection = ({
  description,
}: {
  description: string | undefined;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations();

  const toggleExpand = () => setIsExpanded((prev) => !prev);
  const desc =
    description && description.length > 200
      ? `${description?.substring(0, 200)}...`
      : description;
  return (
    <div>
      <p
        className={`desc-color mt-4 transition-all duration-300 ${
          isExpanded ? "" : "line-clamp-2"
        }`}
      >
        {!isExpanded ? desc : description}
      </p>
      {description && description.length > 200 && (
        <button
          type="button"
          onClick={toggleExpand}
          className="block w-fit mt-2 text-main"
        >
          {isExpanded ? t("view less") : t("view more")}
        </button>
      )}
    </div>
  );
};

export default DescriptionSection;
