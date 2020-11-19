import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ScoreTEComponent } from "./score_te.component";

const routes: Routes = [
    { path: "", component: ScoreTEComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ScoreTERoutingModule { }
