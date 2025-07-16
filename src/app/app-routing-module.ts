import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Wish } from './wish/wish';
import { Random } from './random/random';
import { NotFound } from './not-found/not-found';
const routes: Routes = [
  { path: '', redirectTo: 'wishes', pathMatch: 'full' },
  { path: 'wishes', component: Wish},
  { path: 'random', component: Random },
  { path: '**', component: NotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
