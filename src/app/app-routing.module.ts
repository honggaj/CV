import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvEnglishComponent } from './cv-english/cv-english.component';
import { TiengVietComponent } from './tieng-viet/tieng-viet.component';

const routes: Routes = [
  {path: 'english',component: CvEnglishComponent}, 
  {path:'tiengViet',component: TiengVietComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
