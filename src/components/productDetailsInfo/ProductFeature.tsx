import { getLocalizedField } from "@/utils/getLocalizedField";
import { adPropertiesMap } from "@/utils/adPropertiesMap";
import { useTranslations, useLocale } from "next-intl";
import React from "react";

interface Props {
  category: string;
  data: Record<string, any>;
}

function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

const ProductFeature = ({ category, data }: Props) => {
  const t = useTranslations();
  const locale = useLocale(); // هوك يُستخدم مره واحدة وثابت

  const features = adPropertiesMap[category] || [];
  return (
    <div className="p-4 pt-0 border border-color border-t-0">
      {features.map((item, idx) => {
        const rawValue = getNestedValue(data, item.key);

        if (!rawValue) return null;

        const displayValue =
          typeof rawValue === "object" && rawValue !== null
            ? getLocalizedField(rawValue, locale)
            : rawValue + (item.suffix || "");

        return (
          <div key={idx} className="p-4 flex items-center even:bg-[#F8F8F8B2]">
            <p className="desc-color text-sm md:text-base w-1/2">
              {t(item.labelKey)}
            </p>
            <p className="title-color text-sm md:text-base w-1/2">
              {displayValue}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductFeature;
