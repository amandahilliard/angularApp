import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Day16Component } from './day16/day16.component';
import { Secondday16Component } from './secondday16/secondday16.component';

const routes: Routes = [
  {path: 'random', component: Day16Component},
  {path: 'names', component: Secondday16Component},
  {path: '**', redirectTo: "/random"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
