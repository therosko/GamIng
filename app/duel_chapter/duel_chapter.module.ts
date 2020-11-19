import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { DuelChapterRoutingModule } from "./duel_chapter-routing.module";
import { DuelChapterComponent } from "./duel_chapter.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        DuelChapterRoutingModule
    ],
    declarations: [
        DuelChapterComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DuelChapterModule { }