import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './pages-routing.module';

import { WelcomeComponent } from './list/list.component';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
