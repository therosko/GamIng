import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { getNumber } from "tns-core-modules/application-settings";
import { FileReaderService } from "../core/fileReader.service";
import { ActivatedRoute } from "@angular/router";
import { prompt, inputType, confirm, ConfirmOptions } from "ui/dialogs";
//import * as fs from "file-system";
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";
import { knownFolders, Folder, File, path } from "tns-core-modules/file-system";

@Component({
    selector: "Question",
    moduleId: module.id,
    templateUrl: "./question.component.html",
    styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
    listPickerChapters: Array<string> = ["1.Introduction to BIS",
        "2.The role of BIS on the way [...]",
        "3.Business process management",
        "4.Modeling of BIS",
        "5.The support of BIS by ERP systems",
        "6.Outward information systems (IS)[...]",
        "7.Management support systems",
        "8.Planning, development and management",
        "9.Information security and data privacy",
        "10.Data storage",
        "11.Computer systems",
        "12.Data communication & computer networks"];
    selectedListPickerIndex: number = 0;

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

    navigateToTrialExam(index: number) {
        let navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'questions': JSON.stringify(this.categories[index].questions)
            }
        };
        this.routerExtensions.navigate(["/questions_trial_exam"], navigationExtras);
    }

    navigateToSettings() {
        this.routerExtensions.navigate(["/settings"])
    }

    navigateToSelectionPage() {
        this.routerExtensions.navigate(["/selection_page"])
    }

    navigateToBookmarks() {
        this.routerExtensions.navigate(["/bookmarks"])
    }

    navigateToRecommendations() {
        this.routerExtensions.navigate(["/recommendations"])
    }

    navigateToLevels() {
        this.routerExtensions.navigate(["/levels"])
    }

    navigateToLeaderboard() {
        this.routerExtensions.navigate(["/leaderboard"])
    }

    navigateToFavourites() {
        this.routerExtensions.navigate(["/bookmarks_fav"])
    }

    navigateToHome() {
        this.routerExtensions.navigate(["/home"])
    }

    navigateToSetting() {
        this.routerExtensions.navigate(["/settings"])
    }

    showNotifications() {
        confirm({
            title: "Your Notifications",
            message: "Somebody played a duel created by you! You won and received 6 extra points!",
            okButtonText: "Clear message",
            cancelButtonText: "OK"
        }).then(() => {
            // same bookmark
            console.log(`Notification read!`);


        });
    }

    confirmTrial() {
        confirm({
            title: "Trial exam",
            message: "Are you sure that you want to start a trial exam?",
            okButtonText: "Yes",
            cancelButtonText: "Cancel"
        }).then((result) => {
            // same bookmark
            //console.log(`Trial exam selected!`);
            if (result == true) {
                this.navigateToTrialExam(3);
                console.log(result);
            }
            else {
                console.log(result);
            }
        });
    }


}

