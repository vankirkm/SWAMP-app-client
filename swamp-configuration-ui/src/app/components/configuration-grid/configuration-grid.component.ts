import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlantConfiguration } from 'src/app/models/PlantConfiguration';
import { PlantConfigurationService } from 'src/app/services/plant-configuration.service';
import { EditConfigDialogComponent } from '../edit-config-dialog/edit-config-dialog.component';

@Component({
  selector: 'app-configuration-grid',
  templateUrl: './configuration-grid.component.html',
  styleUrls: ['./configuration-grid.component.scss']
})
export class ConfigurationGridComponent implements OnInit {

  userConfigs: PlantConfiguration[] = [];
  currentId: number;
  clickedRows = new Set<PlantConfiguration>();

  displayedColumns: string[] = ['configName', 'desiredMoistureLevel', 'desiredLightLevel', 'plantType', 'potSize'];


  constructor(private configService: PlantConfigurationService, public dialog: MatDialog) {
    this.currentId = -1;
    this.dialog._getAfterAllClosed().subscribe(() => {
      console.log("dialog");
    });
  }

  ngOnInit(): void {
    this.configService.getConfigsForUser(1).subscribe(result => {
      this.userConfigs = result;
    });
  }

  public onRowClicked(row: any) {
    this.currentId = row.id;
    this.dialog.open(EditConfigDialogComponent, {
      data: row
    });
  }

}
