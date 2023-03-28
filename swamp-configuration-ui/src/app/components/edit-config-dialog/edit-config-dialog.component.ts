import {Component, Inject} from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PlantConfiguration } from 'src/app/models/PlantConfiguration';

/**
 * @title Injecting data when opening a dialog
 */
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

  }

  onActiveConfigClicked() {

  }

}
