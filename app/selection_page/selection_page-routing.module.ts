import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SelectionPageComponent } from "./selection_page.component";

const routes: Routes = [
    { path: "", component: SelectionPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SelectionPageRoutingModule { }
