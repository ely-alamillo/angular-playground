import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { HttpModule } from "@angular/http";

// service
import { EffectsGithubService, StateGithubService } from "./services";

// store dev tool
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

// local modules
import { SharedComponentsModule } from "./shared";

// Effects
import { GithubEffects } from "./effects";

// components
import { AppComponent } from "./app.component";

// Main reducer
import { frontEndApp } from "./reducers";

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpModule,
    BrowserModule,
    SharedComponentsModule,
    EffectsModule.forRoot([GithubEffects]),
    StoreModule.forRoot({ frontEndApp }),
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  providers: [EffectsGithubService, StateGithubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
