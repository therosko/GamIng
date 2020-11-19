import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { TrialExamRoutingModule } from "./trial_exam-routing.module";
import { TrialExamComponent } from "./trial_exam.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        TrialExamRoutingModule
    ],
    declarations: [
        TrialExamComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TrialExamModule { }