import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ScoreTERoutingModule } from "./score_te-routing.module";
import { ScoreTEComponent } from "./score_te.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ScoreTERoutingModule
    ],
    declarations: [
        ScoreTEComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ScoreTEModule { }