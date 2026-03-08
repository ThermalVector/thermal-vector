import { moduleFeatureType } from '../modulesTypes/modulesTypes'

export type Product = {
  id: number;
  name: string;
  info: {
    description: string;
    price: string;
    category_id: number;
    imageUrl?: string;
    featuresShort: Array<string>;
    features: moduleFeatureType;
  }
};

export enum CategoryType {
  thermalCore = 1,
  thermalSecurityCamera = 2,
  thermographyCamera = 3,
  lens = 4
}

export type Category = {
    id: number,
    ru: string,
    descriptionShort: string,
    descriptionLong: string,
    application: string,
    dataOutput: string,
};

export const Categories: Array<Category> = [
  {
    id: CategoryType.thermalCore,
    ru: "Тепловизионный модуль",
    descriptionShort: "Серде любого тепловизионного продукта",
    descriptionLong: "Серде любого тепловизионного продукта",
    application: "You are building a custom drone, creating a specialized handheld tool, or integrating imaging into an existing machine",
    dataOutput: ""
  },
  {
    id: CategoryType.thermalSecurityCamera,
    ru: "Тепловизионная камера слежения",
    descriptionShort: "Передовые технологии в обеспечении безопасности",
    descriptionLong: "Thermal security cameras are optimized for detecting motion and heat signatures in security scenarios, offering lower resolution and no, or limited, temperature data. Used for surveillance (detecting intruders/hot spots)",
    application: "Security cameras monitor perimeters, smoke, or total darkness",
    dataOutput: "Security cameras often only display relative heat differences"
  },
  {
    id: CategoryType.thermographyCamera,
    ru: "Тепловизионная камера",
    descriptionShort: "Современные системы для работы в экстремальнх условиях",
    descriptionLong: "Thermography cameras (thermal imagers) are specialized, high-accuracy tools designed to measure precise temperatures (radiometric data) for predictive maintenance, building inspections, and industrial diagnostics. Used for measurement and diagnostics",
    application: "Thermography cameras find hot spots in machinery, electrical failures, or thermal insulation gaps",
    dataOutput: "Thermography cameras provide accurate, pixel-by-pixel temperature readings (radiometric data)"
  },
  {
    id: CategoryType.lens,
    ru: "Линзы",
    descriptionShort: "Высококачественные объективы для передачи самого качественного изображения",
    descriptionLong: "",
    application: "",
    dataOutput: "",
  }
]