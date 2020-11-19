import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DuelChapterComponent } from "./duel_chapter.component";

const routes: Routes = [
    { path: "", component: DuelChapterComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DuelChapterRoutingModule { }