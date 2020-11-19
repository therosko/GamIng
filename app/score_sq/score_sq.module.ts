import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ScoreSQRoutingModule } from "./score_sq-routing.module";
import { ScoreSQComponent } from "./score_sq.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ScoreSQRoutingModule
    ],
    declarations: [
        ScoreSQComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ScoreSQModule { }