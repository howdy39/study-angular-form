import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
  { path: 'form1', component: Form1Component },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    ),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
