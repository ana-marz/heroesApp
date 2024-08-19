import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';



@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Error404PageComponent  //se exporta porque queremos que sea route por defecto 
  ]
})
export class SharedModule { }
