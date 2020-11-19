import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BookmarksFavComponent } from "./bookmarks_fav.component";

const routes: Routes = [
    { path: "", component: BookmarksFavComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BookmarksFavRoutingModule { }
