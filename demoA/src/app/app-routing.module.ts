import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'student-list', loadChildren: './student-list/student-list.module#StudentListPageModule' },
  { path: 'student-add', loadChildren: './student-add/student-add.module#StudentAddPageModule' },
  { path: 'student-edit', loadChildren: './student-edit/student-edit.module#StudentEditPageModule' },
  { path: 'subject-list', loadChildren: './subject-list/subject-list.module#SubjectListPageModule' },
  { path: 'subject-add', loadChildren: './subject-add/subject-add.module#SubjectAddPageModule' },
  { path: 'subject-edit', loadChildren: './subject-edit/subject-edit.module#SubjectEditPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
