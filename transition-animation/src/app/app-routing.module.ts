import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Tiger, Dolphin } from "./components";

const routes: Routes = [
  {path: "tiger", component: Tiger, data: {animation: "tiger"}},
  {path: "dolphin", component: Dolphin, data: {animation: "dolphin"}}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
