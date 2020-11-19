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
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";
import { knownFolders, Folder, File, path } from "tns-core-modules/file-system";

@Component({
    selector: "Recommendations",
    moduleId: module.id,
    templateUrl: "./recommendations.component.html"
})

export class RecommendationsComponent implements OnInit {
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
        this.getCategories();
    }

    getCategories() {
        console.log("getting categories")
        request({
            url: "https://volatus.ai.wu.ac.at/questions.json",
            method: "GET"
        }).then((response: HttpResponse) => {
            var obj = response.content.toJSON();
            let data = obj.categories
            this.categories = obj["categories"];
            this.initializeMQScore();

        }, (e) => {
        });
    }

    initializeMQScore() {
        for (let i = 0; i < this.categories.length; i++) {
            this.categories[i].lastMQScore = getNumber(this.categories[i].title) || '0';
        }
    }

    navigateToMiniQuiz(index: number) {
        let navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'questions': JSON.stringify(this.categories[index].questions)
            }
        };
        this.routerExtensions.navigate(["/questions_mini_quiz"], navigationExtras);
    }

    navigateToSelectionPage() {
        this.routerExtensions.navigate(["/selection_page"])
    }

    navigateToBookmarks() {
        this.routerExtensions.navigate(["/bookmarks"])
    }

    navigateToHome() {
        this.routerExtensions.navigate(["/home"])
    }

}