export const adPropertiesMap: Record<
  string,
  { labelKey: string; key: string; suffix?: string }[]
> = {
  cars: [
    { labelKey: "car_make", key: "carMake.titleAr" },
    { labelKey: "car_model", key: "carModel.titleAr" },
    { labelKey: "car_sub_model", key: "carSubModel.titleAr" },
    { labelKey: "car_year", key: "carYear" },
    { labelKey: "car_km", key: "km", suffix: " كم" },
    { labelKey: "fuel_type", key: "fuelType" },
    { labelKey: "gear_box", key: "gearBox" },
    { labelKey: "engine_capacity", key: "engineCapacity", suffix: " لتر" },
    { labelKey: "color", key: "color" },
  ],
  properties: [
    { labelKey: "num_rooms", key: "numberOfRooms" },
    { labelKey: "num_bathrooms", key: "numberOfBathroom" },
    { labelKey: "area", key: "space", suffix: " م²" },
    { labelKey: "advertiser_type", key: "advertiserType" },
    { labelKey: "city", key: "city.title" },
    { labelKey: "address", key: "location.address" },
  ],
  lands: [
    { labelKey: "area", key: "space", suffix: " م²" },
    { labelKey: "advertiser_type", key: "advertiserType" },
    { labelKey: "city", key: "city.title" },
    { labelKey: "address", key: "location.address" },
  ],
  motorcycles: [
    { labelKey: "car_km", key: "km", suffix: " كم" },
    { labelKey: "advertiser_type", key: "advertiserType" },
    { labelKey: "city", key: "city.title" },
    { labelKey: "address", key: "location.address" },
    { labelKey: "price", key: "price" },
  ],
  heavy_equipment: [
    { labelKey: "equipment_type", key: "subcategory.title" },
    { labelKey: "car_km", key: "km", suffix: " كم" },
    { labelKey: "advertiser_type", key: "advertiserType" },
    { labelKey: "city", key: "city.title" },
    { labelKey: "address", key: "location.address" },
    { labelKey: "price", key: "price" },

  ],
};
