import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ScoreDuelRoutingModule } from "./score_duel-routing.module";
import { ScoreDuelComponent } from "./score_duel.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ScoreDuelRoutingModule
    ],
    declarations: [
        ScoreDuelComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ScoreDuelModule { }