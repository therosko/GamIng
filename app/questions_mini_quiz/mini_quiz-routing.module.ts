import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MiniQuizComponent } from "./mini_quiz.component";

const routes: Routes = [
    { path: "", component: MiniQuizComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MiniQuizRoutingModule { }
