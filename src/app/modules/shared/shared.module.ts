import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadeComponent } from './heade/heade.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    HeadeComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeadeComponent,
    NotFoundPageComponent
  ]
})
export class SharedModule { }
