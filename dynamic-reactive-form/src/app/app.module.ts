import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// local modules
import { DynamicFormModule } from "./dynamic-form";

import { AppComponent } from "./app.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
