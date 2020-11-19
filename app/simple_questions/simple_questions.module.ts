import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { SimpleQuestionsRoutingModule } from "./simple_questions-routing.module";
import { SimpleQuestionsComponent } from "./simple_questions.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        SimpleQuestionsRoutingModule
    ],
    declarations: [
        SimpleQuestionsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SimpleQuestionsModule { }