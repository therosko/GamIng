import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BookmarksComponent } from "./bookmarks.component";

const routes: Routes = [
    { path: "", component: BookmarksComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BookmarksRoutingModule { }
