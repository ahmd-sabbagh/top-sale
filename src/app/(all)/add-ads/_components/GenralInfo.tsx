import { useTranslations } from "use-intl";


const GenralInfo = () => {
    const t = useTranslations()
  return (
    <>
      {/* Name */}
      <div className="flex flex-col gap-3">
        <label htmlFor="name" className="title-color">
          {t("Advertisement name")}
        </label>
        <input
          type="text"
          id="name"
          placeholder={t("Advertisement name")}
          className="px-4 h-[50px] rounded border border-color"
        />
      </div>
      {/* price */}
      <div className="flex flex-col gap-3">
        <label htmlFor="price" className="title-color">
          {t("price")}
        </label>
        <input
          type="number"
          id="price"
          placeholder={t("price")}
          className="px-4 h-[50px] rounded border border-color"
        />
      </div>
      {/* Description */}
      <div className="flex flex-col gap-2">
        <label htmlFor="comment" className="font-medium title-color text-sm">
          {t("description")}
        </label>
        <textarea
          id="comment"
          rows={4}
          className="rounded border border-color px-4 py-[14px]"
          placeholder={t("description")}
        ></textarea>
      </div>
    </>
  );
};

export default GenralInfo;
