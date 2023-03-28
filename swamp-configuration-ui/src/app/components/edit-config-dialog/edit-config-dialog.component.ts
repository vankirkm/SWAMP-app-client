import {Component, Inject} from '@angular/core';
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
  constructor(@Inject(MAT_DIALOG_DATA) public data: PlantConfiguration) {
    console.log(data);
  }

}
