import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule({
  declarations: [
    HeroPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
