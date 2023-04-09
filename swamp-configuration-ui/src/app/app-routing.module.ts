import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationGridComponent } from './components/configuration-grid/configuration-grid.component';
import { PlantStatusComponent } from './components/plant-status/plant-status.component';

const routes: Routes = [
  { path: 'configs', component: ConfigurationGridComponent },
  { path: 'status', component: PlantStatusComponent },
  { path: 'plant-status', component: PlantStatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
