import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { CabinetComponent } from './component/cabinet/cabinet.component';
import { PathologieComponent } from './component/pathologie/pathologie.component';
import { Cabinet } from './model/cabinet';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CabinetComponent,
    PathologieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
