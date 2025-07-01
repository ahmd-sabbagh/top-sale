"use client";
import React, { FormEvent, useState } from "react";
import AddImage from "./AddImage";
import { useTranslations } from "next-intl";
import GenralInfo from "./GenralInfo";
import { Modal, SelectButton } from "@/components";
import { useClickOutside } from "@/hooks/useOutsideClick";
import SelectSection from "@/components/selectSection/SelectSection";
import SelectableList from "./MenuSelection";

const FormWeb = () => {
  const t = useTranslations();

  // stats
  const [selectSection, setSelectSection] = useState(false);
  const [panicSection, setPanicSection] = useState(false);
  const [citySection, setCitySection] = useState(false);
  const [type, setType] = useState(false);
  const [itemSelect, setItem] = useState("1");
  const [city, setCity] = useState("1");
  const [typeSelect, setTypeSelect] = useState("1");

  // stats
  const ref = useClickOutside<HTMLDivElement>(() => {
    setSelectSection(false);
    setPanicSection(false);
    setCitySection(false);
    setType(false);
  });
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
  };
  const onChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const onChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeSelect(event.target.value);
  };
  const arr = [
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
    "اسم القسم الفرعي",
  ];
  const arr2 = [
    "اسم المدينة هنا",
    "اسم المدينة هنا",
    "اسم المدينة هنا",
    "اسم المدينة هنا",
    "اسم المدينة هنا",
    "اسم المدينة هنا",
  ];
  const arr3 = ["ايجار", "شراء", "بيع"];
  return (
    <>
      {selectSection && (
        <Modal ref={ref} width="874px">
          <SelectSection />
        </Modal>
      )}
      <div className="max-w-[894px] mx-auto">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <AddImage />
          <GenralInfo />
          <SelectButton
            label={t("Select section")}
            placeholder={t("Select section")}
            onClick={() => setSelectSection(true)}
          />
          {/* Panic Section */}
          <div className="relative">
            <SelectButton
              label={t("Select the subsection")}
              placeholder={t("Select the subsection")}
              onClick={() => setPanicSection(true)}
            />
            {panicSection && (
              <SelectableList
                selectedItem={itemSelect}
                refProp={ref}
                title={t("Select the subsection")}
                placeholder={t("Find the subsection")}
                onChange={onChange}
                data={arr}
              />
            )}
          </div>
          {/* type */}
          <div className="relative">
            <SelectButton
              label={t("Select the desired type")}
              placeholder={t("Select the desired type exam")}
              onClick={() => setType(true)}
            />
            {type && (
              <SelectableList
                selectedItem={typeSelect}
                refProp={ref}
                title={t("Select what is required")}
                onChange={onChangeType}
                data={arr3}
              />
            )}
          </div>
          {/* city */}
          <div className="relative">
            <SelectButton
              label={t("Select city")}
              placeholder={t("Select city exam")}
              onClick={() => setCitySection(true)}
            />
            {citySection && (
              <SelectableList
                selectedItem={city}
                refProp={ref}
                title={t("Select city")}
                placeholder={t("find city")}
                onChange={onChangeCity}
                data={arr2}
              />
            )}
          </div>
          <button
            type="submit"
            className="flex-c w-full h-[50px] md:h-[56px] bg-main text-white font-medium rounded"
          >
            {t("Post the ad")}
          </button>
        </form>
      </div>
    </>
  );
};

export default FormWeb;
