import { PlantType } from "./PlantType";
import { PotSize } from "./PotSize";

export interface PlantConfiguration {
    id: number,
    configName: string,
    userId: number,
    desiredMoistureLevel: number,
    desiredLightLevel: number,
    plantType: PlantType,
    potSize: PotSize,
    isActive: boolean
}