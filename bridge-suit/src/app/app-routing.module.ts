import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from "./grid/components/grid/grid.component";

const routes: Routes = [
  {path: 'grid', component: GridComponent},
  {path: '', redirectTo: '/grid', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
