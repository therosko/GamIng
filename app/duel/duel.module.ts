import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { DuelRoutingModule } from "./duel-routing.module";
import { DuelComponent } from "./duel.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        DuelRoutingModule
    ],
    declarations: [
        DuelComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DuelModule { }