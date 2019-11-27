import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'pixies', loadChildren: './pixies/pixies.module#PixiesPageModule', canLoad: [AuthGuard] },
  { path: 'discover', loadChildren: './pixies/discover/discover.module#DiscoverPageModule', canLoad: [AuthGuard] },
  { path: 'studies', loadChildren: './studies/studies.module#StudiesPageModule', canLoad: [AuthGuard] },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
