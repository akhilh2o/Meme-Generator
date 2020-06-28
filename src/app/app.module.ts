import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ColorChromeModule } from "ngx-color/chrome";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneratorComponent } from './generator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorChromeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
