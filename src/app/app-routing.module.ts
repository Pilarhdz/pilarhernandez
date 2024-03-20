import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'infinitescroll',
    loadChildren: () => import('./infinitescroll/infinitescroll.module').then( m => m.InfinitescrollPageModule)
  },
  {
    path: 'conwaygame',
    loadChildren: () => import('./conwaygame/conwaygame.module').then( m => m.ConwaygamePageModule)
  },
  {
    path: 'algoritmos-simples',
    loadChildren: () => import('./algoritmos-simples/algoritmos-simples.module').then( m => m.AlgoritmosSimplesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
