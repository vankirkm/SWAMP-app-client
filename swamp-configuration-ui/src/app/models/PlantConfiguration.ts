import { PlantType } from "./PlantType";
import { PotSize } from "./PotSize";

export interface PlantConfiguration {
    configName: string,
    userId: number,
    desiredMoistureLevel: number,
    desiredLightLevel: number,
    plantType: PlantType,
    potsize: PotSize
}