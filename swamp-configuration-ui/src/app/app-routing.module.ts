import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationGridComponent } from './components/configuration-grid/configuration-grid.component';

const routes: Routes = [
  { path: 'configs', component: ConfigurationGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
