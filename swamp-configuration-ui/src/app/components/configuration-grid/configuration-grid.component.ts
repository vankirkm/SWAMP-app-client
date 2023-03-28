import { Component, OnInit } from '@angular/core';
import { PlantConfiguration } from 'src/app/models/PlantConfiguration';
import { PlantConfigurationService } from 'src/app/services/plant-configuration.service';

@Component({
  selector: 'app-configuration-grid',
  templateUrl: './configuration-grid.component.html',
  styleUrls: ['./configuration-grid.component.scss']
})
export class ConfigurationGridComponent implements OnInit {

  userConfigs: PlantConfiguration[] = [];

  displayedColumns: string[] = ['configName', 'desiredMoistureLevel', 'desiredLightLevel', 'plantType', 'potSize'];


  constructor(private configService: PlantConfigurationService) { }

  ngOnInit(): void {
    this.configService.getConfigsForUser(1).subscribe(result => {
      this.userConfigs = result;
      console.log(this.userConfigs);
    });
  }

}
