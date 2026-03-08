export type featureItem = {
  packagedType?: string,
  resolution: string,
  pixelPitch: string,
  netd: string,
  spectralRange: string,
  detector?: string,
  focusMethod?: string,
  lens?: string,
  digitalZoom?: string,
  sunProtection?: string,
};

export type featureImageEffect = {
  palette: string,
  imageAdjustmen?: string,
  imageAlgorithm?: string,
  imageProcess?: string,
  intelligentFunctions?: string,
  frameRate?: string,
  noiseReduction?: string,
  uniformityCalibration?: string,
  resolution?: string,
  startingTime?: string,
}

export type featureInterface = {
  powerInterface: string,
  seriesPort: string,
  digitalVideo?: string,
  networkInterface?: string,
  analogVideo?: string,
  videoOutput?: string,
  keyboard?: string,
  alarm?: string,
  storage?: string
}

export type featureGeneral = {
  workingTemperature: string,
  storageTemperature: string,
  powerConsumption: string,
  size: string,
  weight: string,
  antiVibration?: string,
  communicationMode?: string,
  imageInterface?: string,
  powerSupply?: string,
  protectionLevel?: string,
  shockResistance?: string,
}

export type featureNetwork = {
  videoCompression: string,
  mainStream: string,
  subStream: string,
  protocols: string,
  api: string,
  commonFunction: string,
  security: string,
  simultaneousLiveView: string,
  userHostLevel: string
}

export type featureMeasurementTemperature = {
  temperatureRange: string,
  accuracyMeasurement: string,
  measurementMethod: string,
  commonFunction: string,
}

export type featureSmartFunction = {
  highTemperatureAlarm: string,
  vca: string,
  ai: string,
}

export type moduleFeatureType = {
  item: featureItem,
  imageEffect: featureImageEffect,
  general: featureGeneral,
  interface?: featureInterface,
  network?: featureNetwork,
  measurementTemperature? : featureMeasurementTemperature,
  smartFunction?: featureSmartFunction
}