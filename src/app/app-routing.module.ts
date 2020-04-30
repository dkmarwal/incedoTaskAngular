import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MetadataComponent } from './components/metadata/metadata.component';
import { ChartComponent } from './components/chart/chart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'metadata', component: MetadataComponent},
  { path: 'chart', component: ChartComponent},
  { path: 'login', component: LoginComponent}
  // { path: '', redirectTo: '/', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
