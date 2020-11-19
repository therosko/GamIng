import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TrialExamComponent } from "./trial_exam.component";

const routes: Routes = [
    { path: "", component: TrialExamComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TrialExamRoutingModule { }
