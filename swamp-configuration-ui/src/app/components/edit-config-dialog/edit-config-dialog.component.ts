import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlantConfiguration } from 'src/app/models/PlantConfiguration';
import { PlantType } from 'src/app/models/PlantType';
import { PotSize } from 'src/app/models/PotSize';

@Component({
  selector: 'app-edit-config-dialog',
  templateUrl: './edit-config-dialog.component.html',
  styleUrls: ['./edit-config-dialog.component.scss']
})
export class EditConfigDialogComponent {

  configForm: FormGroup;
  plantTypes: string[] = [];
  potSizes: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: PlantConfiguration) {

    Object.keys(PlantType).forEach(key => {
      this.plantTypes.push(PlantType[key as keyof typeof PlantType]);
    });

    Object.keys(PotSize).forEach(key => {
      this.potSizes.push(PotSize[key as keyof typeof PotSize]);
    });

    this.configForm = new FormGroup({
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
  }

  onActiveConfigClicked() {
    // send a serial message to the arduino containing
    // the new light level and moisture level
  }

}
