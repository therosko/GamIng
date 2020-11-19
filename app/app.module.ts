import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

import { FileReaderService } from "./core/fileReader.service";
import { UtilityService } from "./services/utility.service";

//should remove service/backend in the end
//import { BackendService } from "./services/backend.service";
//import { AuthGuard } from "./auth-guard.service";
// TODO: should be imported from kinvey-nativescript-sdk/angular but declaration file is currently missing
//import { KinveyModule, UserService } from "kinvey-nativescript-sdk/lib/angular";
//import { appConfig } from './app.config';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,

        /* ***********************************************************
        * The {N} Kinvey plugin initialization is explained in the plugin readme here:
        * http://devcenter.kinvey.com/nativescript/guides/getting-started#ConfigureYourApp
        * In this template, Kinvey is set up with a custom existing project, so that
        * You can build and run this template without creating your own Kinvey project.
        *************************************************************/
        //KinveyModule.init(appConfig)
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        //HomeComponent,
    ],
    providers: [
        FileReaderService,
        //UserService,
        //BackendService, //remove once service/backend is gone
        UtilityService,
        //[AuthGuard] //remove once service/backend is gone
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
