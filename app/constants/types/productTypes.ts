export type featItem = {
  resolution: string,
  pixelPitch: string,
  netd: string,
  spectralRange: string,
  focusMethod?: string,
  detector?: string,
  digitalZoom?: string,
  lens?: string, // focal length
  packagedType?: string,
  sunProtection?: string,
  fov?: string
};

export type featImageEffect = {
  palette: string, // color palette
  imageAdjustmen?: string,
  imageAlgorithm?: string,
  imageProcess?: string, // thermal image process\
  imageFusion?: string,
  intelligentFunctions?: string,
  frameRate?: string,
  noiseReduction?: string,
  uniformityCalibration?: string, // Uniformity correction
  resolution?: string,
  startingTime?: string,
}

export type featInterface = {
  seriesPort: string,
  alarm?: string,
  analogVideo?: string,
  audio?: string,
  digitalVideo?: string,
  keyboard?: string,
  networkInterface?: string, // communication interface
  powerInterface?: string,
  videoOutput?: string,
  storage?: string
}

export type featVideoAudio = {
  videoCompression: string,
  audio?: string,
  audioCompression?: string,
  mainStream: string,
  subStream?: string,
}

export type featOpticalModule = {
  imageSensor: string,
  resolution: string,
  lens: string,
  fov: string,
  irRange?: string,
}

export type featNetwork = {
  protocols: string,
  api: string,
  commonFunction: string,
  security: string,
  simultaneousLiveView: string,
  userHostLevel: string,
  webBrowser?: string,
}

export type featMeasurementTemperature = {
  temperatureRange: string,
  accuracyMeasurement: string,
  measurementMethod: string, // temperature measurement
  commonFunction?: string,
  rawData?: string,
}

export type featSmartFunction = {
  vca?: string,
  ai?: string,
  fireDetection?: string,
  highTemperatureAlarm?: string,
  soundLightAlarm?: string
}

export type featPtz = {
  movementRange: string,
  presets: string,
  powerMemory: string,
  panSpeed: string,
  tiltSpeed: string,
  autoHorizontalScan: string,
}

export type featGeneral = {
  workingTemperature: string,
  storageTemperature: string,
  powerConsumption: string,
  size: string,
  weight: string,
  antiVibration?: string,
  communicationMode?: string,
  embeddedBattery?: string,
  gyroscopes?: string,
  imageInterface?: string,
  laserRangingIllumination?: string,
  powerSupply?: string,
  protection?: string,
  reliability?: string,
  shockResistance?: string,
  webClientLanguage?: string,
  wiper?: string,
  wifi?: string,
}

export type productFeature = {
  item: featItem,
  imageEffect: featImageEffect,
  general: featGeneral,
  interface?: featInterface,
  measurementTemperature? : featMeasurementTemperature,
  network?: featNetwork,
  opticalModule?: featOpticalModule,
  ptz?: featPtz,
  videoAudio?: featVideoAudio,
  smartFunction?: featSmartFunction
}

export type moduleInfo = {
  description: string;
  price: string;
  category_id: number;
  featuresShort: Array<string>;
  features: productFeature;
  imageUrl?: string;
}

export type lensInfo = {
  category_id: number;
  features: {
    fovDog: string,
    
  }
}

export type ProductType = {
  id: number;
  name: string;
  info: moduleInfo | lensInfo
};