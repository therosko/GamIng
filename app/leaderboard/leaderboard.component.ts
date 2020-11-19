import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "ui/text-field/text-field";
import { Page } from "ui/page";
import { prompt, inputType } from "ui/dialogs";
import { getNumber } from "tns-core-modules/application-settings";
import { FileReaderService } from "../core/fileReader.service"
import { User } from "../services/user.model";
import { UtilityService } from '../services/utility.service'; //user for isTablet()
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Leaderboard",
    moduleId: module.id,
    templateUrl: "./leaderboard.component.html"
})

export class LeaderboardComponent implements OnInit {
    //add varriables
    // For more detailed docs - https://github.com/williamjuan027/nativescript-quiz-demo#nativescript-quiz-demo

    categories: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private fileReader: FileReaderService
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    navigateToHome() {
        this.routerExtensions.navigate(["/home"])
    }

    navigateToLevels() {
        this.routerExtensions.navigate(["/levels"]);
    }

}