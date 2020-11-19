import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LeaderboardComponent } from "./leaderboard.component";

const routes: Routes = [
    { path: "", component: LeaderboardComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LeaderboardRoutingModule { }