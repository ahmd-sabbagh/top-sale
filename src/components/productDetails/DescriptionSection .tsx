"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const DescriptionSection = ({ description }: { description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations();

  const toggleExpand = () => setIsExpanded(prev => !prev);

  return (
    <div>
      <p
        className={`desc-color mt-4 transition-all duration-300 ${
          isExpanded ? "" : "line-clamp-2"
        }`}
      >
        {description}
      </p>

      {description.length > 100 && (
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
