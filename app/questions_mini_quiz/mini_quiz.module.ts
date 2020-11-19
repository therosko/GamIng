import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { MiniQuizRoutingModule } from "./mini_quiz-routing.module";
import { MiniQuizComponent } from "./mini_quiz.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        MiniQuizRoutingModule
    ],
    declarations: [
        MiniQuizComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MiniQuizModule { }