import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlantConfiguration } from 'src/app/models/PlantConfiguration';

@Component({
  selector: 'app-edit-config-dialog',
  templateUrl: './edit-config-dialog.component.html',
  styleUrls: ['./edit-config-dialog.component.scss']
})
export class EditConfigDialogComponent {

  configForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: PlantConfiguration) {

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
