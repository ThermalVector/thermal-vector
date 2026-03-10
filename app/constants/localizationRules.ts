/**
 * Localization model for feature keys.
 * Each key has language options (en, ru) for use in UI/labels.
 */
export type LocalizedLabel = {
  en: string;
  ru: string;
};

// --- featItem ---
export type FeatItemLocalization = {
  resolution: LocalizedLabel;
  pixelPitch: LocalizedLabel;
  netd: LocalizedLabel;
  spectralRange: LocalizedLabel;
  focusMethod: LocalizedLabel;
  detector: LocalizedLabel;
  digitalZoom: LocalizedLabel;
  lens: LocalizedLabel;
  packagedType: LocalizedLabel;
  sunProtection: LocalizedLabel;
  fov: LocalizedLabel;
};

export const featItemLocalization: FeatItemLocalization = {
  resolution: { en: 'Resolution', ru: 'Разрешение' },
  pixelPitch: { en: 'Pixel pitch', ru: 'Шаг пикселя' },
  netd: { en: 'NETD', ru: 'NETD' },
  spectralRange: { en: 'Spectral range', ru: 'Спектральный диапазон' },
  focusMethod: { en: 'Focus method', ru: 'Метод фокусировки' },
  detector: { en: 'Detector', ru: 'Детектор' },
  digitalZoom: { en: 'Digital zoom', ru: 'Цифровой зум' },
  lens: { en: 'Lens', ru: 'Объектив' },
  packagedType: { en: 'Packaged type', ru: 'Тип исполнения' },
  sunProtection: { en: 'Sun protection', ru: 'Защита от солнца' },
  fov: { en: 'Field of view', ru: 'Поле зрения' },
};

// --- featImageEffect ---
export type FeatImageEffectLocalization = {
  palette: LocalizedLabel;
  imageAdjustmen: LocalizedLabel;
  imageAlgorithm: LocalizedLabel;
  imageProcess: LocalizedLabel;
  imageFusion: LocalizedLabel;
  intelligentFunctions: LocalizedLabel;
  frameRate: LocalizedLabel;
  noiseReduction: LocalizedLabel;
  uniformityCalibration: LocalizedLabel;
  resolution: LocalizedLabel;
  startingTime: LocalizedLabel;
};

export const featImageEffectLocalization: FeatImageEffectLocalization = {
  palette: { en: 'Color palette', ru: 'Цветовая палитра' },
  imageAdjustmen: { en: 'Image adjustment', ru: 'Коррекция изображения' },
  imageAlgorithm: { en: 'Image algorithm', ru: 'Алгоритм изображения' },
  imageProcess: { en: 'Thermal image process', ru: 'Обработка теплового изображения' },
  imageFusion: { en: 'Image fusion', ru: 'Слияние изображений' },
  intelligentFunctions: { en: 'Intelligent functions', ru: 'Интеллектуальные функции' },
  frameRate: { en: 'Frame rate', ru: 'Частота кадров' },
  noiseReduction: { en: 'Noise reduction', ru: 'Шумоподавление' },
  uniformityCalibration: { en: 'Uniformity correction', ru: 'Коррекция однородности' },
  resolution: { en: 'Resolution', ru: 'Разрешение' },
  startingTime: { en: 'Starting time', ru: 'Время запуска' },
};

// --- featInterface ---
export type FeatInterfaceLocalization = {
  seriesPort: LocalizedLabel;
  alarm: LocalizedLabel;
  analogVideo: LocalizedLabel;
  audio: LocalizedLabel;
  digitalVideo: LocalizedLabel;
  keyboard: LocalizedLabel;
  networkInterface: LocalizedLabel;
  powerInterface: LocalizedLabel;
  videoOutput: LocalizedLabel;
  storage: LocalizedLabel;
};

export const featInterfaceLocalization: FeatInterfaceLocalization = {
  seriesPort: { en: 'Serial port', ru: 'Последовательный порт' },
  alarm: { en: 'Alarm', ru: 'Тревога' },
  analogVideo: { en: 'Analog video', ru: 'Аналоговое видео' },
  audio: { en: 'Audio', ru: 'Аудио' },
  digitalVideo: { en: 'Digital video', ru: 'Цифровое видео' },
  keyboard: { en: 'Keyboard', ru: 'Клавиатура' },
  networkInterface: { en: 'Communication interface', ru: 'Интерфейс связи' },
  powerInterface: { en: 'Power interface', ru: 'Интерфейс питания' },
  videoOutput: { en: 'Video output', ru: 'Видеовыход' },
  storage: { en: 'Storage', ru: 'Накопитель' },
};

// --- featVideoAudio ---
export type FeatVideoAudioLocalization = {
  videoCompression: LocalizedLabel;
  audio: LocalizedLabel;
  audioCompression: LocalizedLabel;
  mainStream: LocalizedLabel;
  subStream: LocalizedLabel;
};

export const featVideoAudioLocalization: FeatVideoAudioLocalization = {
  videoCompression: { en: 'Video compression', ru: 'Сжатие видео' },
  audio: { en: 'Audio', ru: 'Аудио' },
  audioCompression: { en: 'Audio compression', ru: 'Сжатие аудио' },
  mainStream: { en: 'Main stream', ru: 'Основной поток' },
  subStream: { en: 'Sub stream', ru: 'Дополнительный поток' },
};

// --- featOpticalModule ---
export type FeatOpticalModuleLocalization = {
  imageSensor: LocalizedLabel;
  resolution: LocalizedLabel;
  lens: LocalizedLabel;
  fov: LocalizedLabel;
  irRange: LocalizedLabel;
};

export const featOpticalModuleLocalization: FeatOpticalModuleLocalization = {
  imageSensor: { en: 'Image sensor', ru: 'Матрица' },
  resolution: { en: 'Resolution', ru: 'Разрешение' },
  lens: { en: 'Lens', ru: 'Объектив' },
  fov: { en: 'Field of view', ru: 'Поле зрения' },
  irRange: { en: 'IR range', ru: 'Диапазон ИК' },
};

// --- featNetwork ---
export type FeatNetworkLocalization = {
  protocols: LocalizedLabel;
  api: LocalizedLabel;
  commonFunction: LocalizedLabel;
  security: LocalizedLabel;
  simultaneousLiveView: LocalizedLabel;
  userHostLevel: LocalizedLabel;
  webBrowser: LocalizedLabel;
};

export const featNetworkLocalization: FeatNetworkLocalization = {
  protocols: { en: 'Protocols', ru: 'Протоколы' },
  api: { en: 'API', ru: 'API' },
  commonFunction: { en: 'Common function', ru: 'Общие функции' },
  security: { en: 'Security', ru: 'Безопасность' },
  simultaneousLiveView: { en: 'Simultaneous live view', ru: 'Одновременный просмотр' },
  userHostLevel: { en: 'User host level', ru: 'Уровень пользователя/хоста' },
  webBrowser: { en: 'Web browser', ru: 'Веб-браузер' },
};

// --- featMeasurementTemperature ---
export type FeatMeasurementTemperatureLocalization = {
  temperatureRange: LocalizedLabel;
  accuracyMeasurement: LocalizedLabel;
  measurementMethod: LocalizedLabel;
  commonFunction: LocalizedLabel;
  rawData: LocalizedLabel;
};

export const featMeasurementTemperatureLocalization: FeatMeasurementTemperatureLocalization = {
  temperatureRange: { en: 'Temperature range', ru: 'Диапазон температур' },
  accuracyMeasurement: { en: 'Measurement accuracy', ru: 'Точность измерения' },
  measurementMethod: { en: 'Temperature measurement', ru: 'Измерение температуры' },
  commonFunction: { en: 'Common function', ru: 'Общие функции' },
  rawData: { en: 'Raw data', ru: 'Исходные данные' },
};

// --- featSmartFunction ---
export type FeatSmartFunctionLocalization = {
  vca: LocalizedLabel;
  ai: LocalizedLabel;
  fireDetection: LocalizedLabel;
  highTemperatureAlarm: LocalizedLabel;
  soundLightAlarm: LocalizedLabel;
};

export const featSmartFunctionLocalization: FeatSmartFunctionLocalization = {
  vca: { en: 'VCA', ru: 'ВКА (видеоаналитика)' },
  ai: { en: 'AI', ru: 'ИИ' },
  fireDetection: { en: 'Fire detection', ru: 'Обнаружение огня' },
  highTemperatureAlarm: { en: 'High temperature alarm', ru: 'Тревога по температуре' },
  soundLightAlarm: { en: 'Sound/light alarm', ru: 'Звуковая/световая сигнализация' },
};

// --- featPtz ---
export type FeatPtzLocalization = {
  movementRange: LocalizedLabel;
  presets: LocalizedLabel;
  powerMemory: LocalizedLabel;
  panSpeed: LocalizedLabel;
  tiltSpeed: LocalizedLabel;
  autoHorizontalScan: LocalizedLabel;
};

export const featPtzLocalization: FeatPtzLocalization = {
  movementRange: { en: 'Movement range', ru: 'Диапазон перемещения' },
  presets: { en: 'Presets', ru: 'Предустановки' },
  powerMemory: { en: 'Power memory', ru: 'Память позиций' },
  panSpeed: { en: 'Pan speed', ru: 'Скорость панорамы' },
  tiltSpeed: { en: 'Tilt speed', ru: 'Скорость наклона' },
  autoHorizontalScan: { en: 'Auto horizontal scan', ru: 'Автосканирование по горизонтали' },
};

// --- featGeneral ---
export type FeatGeneralLocalization = {
  workingTemperature: LocalizedLabel;
  storageTemperature: LocalizedLabel;
  powerConsumption: LocalizedLabel;
  size: LocalizedLabel;
  weight: LocalizedLabel;
  antiVibration: LocalizedLabel;
  communicationMode: LocalizedLabel;
  embeddedBattery: LocalizedLabel;
  gyroscopes: LocalizedLabel;
  imageInterface: LocalizedLabel;
  laserRangingIllumination: LocalizedLabel;
  powerSupply: LocalizedLabel;
  protection: LocalizedLabel;
  reliability: LocalizedLabel;
  shockResistance: LocalizedLabel;
  webClientLanguage: LocalizedLabel;
  wiper: LocalizedLabel;
  wifi: LocalizedLabel;
};

export const featGeneralLocalization: FeatGeneralLocalization = {
  workingTemperature: { en: 'Working temperature', ru: 'Рабочая температура' },
  storageTemperature: { en: 'Storage temperature', ru: 'Температура хранения' },
  powerConsumption: { en: 'Power consumption', ru: 'Энергопотребление' },
  size: { en: 'Size', ru: 'Габариты' },
  weight: { en: 'Weight', ru: 'Вес' },
  antiVibration: { en: 'Anti-vibration', ru: 'Вибрационная стойкость' },
  communicationMode: { en: 'Communication mode', ru: 'Режим связи' },
  embeddedBattery: { en: 'Embedded battery', ru: 'Встроенная батарея' },
  gyroscopes: { en: 'Gyroscopes', ru: 'Гироскопы' },
  imageInterface: { en: 'Image interface', ru: 'Интерфейс изображения' },
  laserRangingIllumination: { en: 'Laser ranging/illumination', ru: 'Лазерная дальнометрия/подсветка' },
  powerSupply: { en: 'Power supply', ru: 'Питание' },
  protection: { en: 'Protection', ru: 'Защита' },
  reliability: { en: 'Reliability', ru: 'Надёжность' },
  shockResistance: { en: 'Shock resistance', ru: 'Ударная стойкость' },
  webClientLanguage: { en: 'Web client language', ru: 'Язык веб-клиента' },
  wiper: { en: 'Wiper', ru: 'Очиститель' },
  wifi: { en: 'Wi-Fi', ru: 'Wi-Fi' },
};

// --- Product feature localization map (mirrors productFeature) ---
export const productFeatureLocalization = {
  item: featItemLocalization,
  imageEffect: featImageEffectLocalization,
  general: featGeneralLocalization,
  interface: featInterfaceLocalization,
  measurementTemperature: featMeasurementTemperatureLocalization,
  network: featNetworkLocalization,
  opticalModule: featOpticalModuleLocalization,
  ptz: featPtzLocalization,
  videoAudio: featVideoAudioLocalization,
  smartFunction: featSmartFunctionLocalization,
} as const;

/** Supported locale codes for feature labels */
export type FeatureLocale = 'en' | 'ru';

/** Get localized label for a key: e.g. getFeatureLabel(featItemLocalization, 'resolution', 'ru') => 'Разрешение' */
export function getFeatureLabel(
  localization: Record<string, LocalizedLabel>,
  key: string,
  locale: FeatureLocale
): string {
  const entry = localization[key];
  return entry?.[locale] ?? key;
}

/** Humanize key as fallback when no localization: "digitalZoom" -> "Digital Zoom" */
function humanizeKey(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

/** Get localized label by feature path, e.g. "item.resolution" + "ru" => "Разрешение" */
export function getFeatureLabelByPath(
  path: string,
  locale: FeatureLocale
): string {
  const parts = path.split('.');
  const section = parts[0];
  const key = parts.length > 1 ? parts.slice(1).join('.') : path;
  const sectionMap = productFeatureLocalization[
    section as keyof typeof productFeatureLocalization
  ] as Record<string, LocalizedLabel> | undefined;
  if (sectionMap) {
    const label = getFeatureLabel(sectionMap, key, locale);
    if (label !== key) return label;
  }
  return humanizeKey(key);
}

/** Default locale for product feature labels across the app */
export const DEFAULT_FEATURE_LOCALE: FeatureLocale = 'ru';

/** Get feature label in default (ru) locale. Use for all product info in the project. */
export function getFeatureLabelRu(path: string): string {
  return getFeatureLabelByPath(path, DEFAULT_FEATURE_LOCALE);
}
