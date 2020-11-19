import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SimpleQuestionsComponent } from "./simple_questions.component";

const routes: Routes = [
    { path: "", component: SimpleQuestionsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SimpleQuestionsRoutingModule { }
