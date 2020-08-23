import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './layout/container/container.component';
import { LoginComponent } from './layout/login/login.component';
import { AboutComponent } from './layout/about/about.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { CrudComponent } from './layout/crud/crud.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoggedInGuard } from './logged-in.guard'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ContainerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard] },
  { path: 'crud', component: CrudComponent, canActivate: [LoggedInGuard] },
  { path: 'gallery', component: GalleryComponent, canActivate: [LoggedInGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
