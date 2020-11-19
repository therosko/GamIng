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
    selector: "Levels",
    moduleId: module.id,
    templateUrl: "./levels.component.html"
})

export class LevelsComponent implements OnInit {
    //add varriables
    // For more detailed docs - https://github.com/williamjuan027/nativescript-quiz-demo#nativescript-quiz-demo

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

    navigateToLeaderboard() {
        this.routerExtensions.navigate(["/leaderboard"]);
    }

    navigateToBookmarks() {
        this.routerExtensions.navigate(["/bookmarks"])
    }

    navigateToHome() {
        this.routerExtensions.navigate(["/home"])
    }

}