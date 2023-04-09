import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlantStatus } from 'src/app/models/PlantStatus';
import { PlantStatusService } from 'src/app/services/plant-status.service';


@Component({
  selector: 'app-plant-status',
  templateUrl: './plant-status.component.html',
  styleUrls: ['./plant-status.component.scss']
})
export class PlantStatusComponent implements OnInit {

  userStatus: PlantStatus[] = [];
  currentId: number;
  clickedRows = new Set<PlantStatus>();

  displayedColumns: string[] = ['currentMoistireLevel', 'currentMoisturePercent', 'currentLightLevel', 'lastWatered', 'currentWaterStatus'];


  constructor(private statusService: PlantStatusService, public dialog: MatDialog) {
    this.currentId = -1;
    this.dialog._getAfterAllClosed().subscribe(() => {
      console.log("dialog");
    });
  }

  ngOnInit(): void {
    this.statusService.getStatusForUser(1).subscribe(result => {
      this.userStatus = result;
    });
  }

  public onRowClicked(row: any) {
    this.currentId = row.id;
  }

}
