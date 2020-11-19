import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ScoreMQRoutingModule } from "./score_mq-routing.module";
import { ScoreMQComponent } from "./score_mq.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ScoreMQRoutingModule
    ],
    declarations: [
        ScoreMQComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ScoreMQModule { }