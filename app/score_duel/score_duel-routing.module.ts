import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ScoreDuelComponent } from "./score_duel.component";

const routes: Routes = [
    { path: "", component: ScoreDuelComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ScoreDuelRoutingModule { }
