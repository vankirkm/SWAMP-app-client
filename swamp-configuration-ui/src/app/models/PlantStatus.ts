import { PlantConfiguration } from "./PlantConfiguration";

export interface PlantStatus{
    plantConfiguration: PlantConfiguration,
    id: number,
    userID: number,
    isActive: boolean,
    currentMoistureLevel: number,
    currentMoisturePercent: number,
    currentLightLevel: number,
    lastWatered: Date,
    currentWaterStatus: number
}