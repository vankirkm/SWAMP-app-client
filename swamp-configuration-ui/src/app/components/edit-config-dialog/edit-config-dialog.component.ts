import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlantConfiguration } from 'src/app/models/PlantConfiguration';
import { PlantType } from 'src/app/models/PlantType';
import { PotSize } from 'src/app/models/PotSize';
import { PlantConfigurationService } from 'src/app/services/plant-configuration.service';

@Component({
  selector: 'app-edit-config-dialog',
  templateUrl: './edit-config-dialog.component.html',
  styleUrls: ['./edit-config-dialog.component.scss']
})
export class EditConfigDialogComponent {

  configForm: FormGroup;
  plantTypes: string[] = [];
  potSizes: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: PlantConfiguration, public configService: PlantConfigurationService) {

    Object.keys(PlantType).forEach(key => {
      this.plantTypes.push(PlantType[key as keyof typeof PlantType]);
    });

    Object.keys(PotSize).forEach(key => {
      this.potSizes.push(PotSize[key as keyof typeof PotSize]);
    });

    this.configForm = new FormGroup({
      id: new FormControl(data.id),
      userId: new FormControl(data.userId),
      configName: new FormControl(data.configName, Validators.required),
      desiredMoistureLevel: new FormControl(data.desiredMoistureLevel, Validators.required),
      desiredLightLevel: new FormControl(data.desiredLightLevel, Validators.required),
      plantType: new FormControl(data.plantType, Validators.required),
      potSize: new FormControl(data.potSize, Validators.required)
    });

  }

  onSaveChangesClicked() {
    // call the config service to save the config. If the
    // config being updated is also the currently active config,
    // send a serial message to the arduino to update its light
    // and moisture values

    let toSave = this.configForm.value;
    console.log(toSave);
    this.configService.updateConfig(toSave).subscribe();
  
  }

  onActiveConfigClicked() {
    // send a serial message to the arduino containing
    // the new light level and moisture level
  }

}
