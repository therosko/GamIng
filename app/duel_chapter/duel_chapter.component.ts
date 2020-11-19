import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { getNumber } from "tns-core-modules/application-settings";
import { FileReaderService } from "../core/fileReader.service";
import { ActivatedRoute } from "@angular/router";
import { setNumber } from "tns-core-modules/application-settings";
import { GridLayout } from "ui/layouts/grid-layout";
import { setTimeout } from "timer";
import { debounceTime } from "rxjs/operators";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";
import { knownFolders, Folder, File, path } from "tns-core-modules/file-system";

@Component({
    selector: "DuelChapter",
    moduleId: module.id,
    templateUrl: "./duel_chapter.component.html",
    styleUrls: ['./duel_chapter.component.css']
})
export class DuelChapterComponent implements OnInit {

    // For more detailed docs - https://github.com/williamjuan027/nativescript-quiz-demo#nativescript-quiz-demo

    category: string; //change category to chapter later on

    questions: { question: string, options: string[], correctAnswerIndex: number }[] = [];

    currentQuestionIndex: number = 0;
    score: number = 0;
    processing = false;

    constructor(
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private fileReader: FileReaderService //added for testing purposes
    ) {
        this.page.actionBarHidden = true;
    }


    ngOnInit(): void {
        this.getCategories(), //added for testing purposes
            this.route.queryParams.subscribe(params => {
                this.category = params['category'];
                this.questions = JSON.parse(params['questions']);
            })
    }

    // -------------------------- QUIZ ----------------------------

    selectAnswer(answerIndex: number, args: any) {
        let option = <GridLayout>args.object;
        if (this.questions[this.currentQuestionIndex].correctAnswerIndex == answerIndex) {
            // correct answer
            this.score += 1;
            option.backgroundColor = '#B6EB81';
        }
        else {
            // wrong answer
            option.backgroundColor = '#ff4b60';
        }
        setTimeout(
            () => {
                option.backgroundColor = '#4446FF';
                if (this.currentQuestionIndex == this.questions.length - 1) {
                    this.end();
                }
                else {
                    this.currentQuestionIndex += 1;
                }
            }, 500)
    }

    saveScore() {
        let scorePercentage = Math.round(this.score * 100 / this.questions.length);
        setNumber(this.category, scorePercentage);
    }

    end() {
        this.saveScore();
        this.navigateToScore();
    }

    // ------------------------- NAVIGATION -----------------------------

    navigateToScore() {
        let navigationExtras = {
            queryParams: {
                'score': Math.round(this.score * 100 / this.questions.length)
            }
        };
        this.routerExtensions.navigate(["/score_duel"], navigationExtras);
    }

    navigateToPrevious() {
        this.routerExtensions.backToPreviousPage();
    }

    /* navigateToDuel(chapterIndex: number) {
         let selectedChapter = {
             queryParams: {
                 'chapter': chapterIndex
             }
         }
         this.routerExtensions.navigate(["/duel"], selectedChapter);
     } 
    navigateToDuel() {
        this.routerExtensions.navigate(["/duel"]);
    }*/

    // ------------------------- ALL THAT FOLLOWS ADDED FOR TESTING PURPOSES!!!!!!!!!!!! -----------------------------
    async delay(ms: number) {
        await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
    }

    categories: any[] = [];

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


    waitDelay() {
        this.processing = true;
        setTimeout(() => { this.choseChapter(); }, 1500);
    }

    choseChapter() {
        dialogs.action("Calling players...", "Cancel", ["Create a new duel", "Play an existing duel"]).then(result => {
            console.log("Dialog result: " + result);
            if (result == "Create a new duel") {
                this.navigateToDuel(0);
            } else {
                if (result == "Play an existing duel") {
                    this.navigateToDuel(0);
                }
                else {
                    this.processing = false;
                }
            }
        });
    }
    navigateToDuel(index: number) {
        let navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'questions': JSON.stringify(this.categories[index].questions)
            }
        };
        this.routerExtensions.navigate(["/duel"], navigationExtras);
    }

    navigateToSettings() {
        this.routerExtensions.navigate(["/settings"])
    }

    navigateToSelectionPage() {
        this.routerExtensions.navigate(["/selection_page"])
    }

    navigateToHome() {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    }
}