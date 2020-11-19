import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ScoreMQComponent } from "./score_mq.component";

const routes: Routes = [
    { path: "", component: ScoreMQComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ScoreMQRoutingModule { }
