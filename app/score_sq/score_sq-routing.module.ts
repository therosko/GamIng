import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ScoreSQComponent } from "./score_sq.component";

const routes: Routes = [
    { path: "", component: ScoreSQComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ScoreSQRoutingModule { }
