import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', component: PrincipalPageComponent, pathMatch: 'full' },
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
