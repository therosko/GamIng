//see https://play.nativescript.org/?template=play-ng&id=YfZPr1

import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from "@angular/core";
import { screen } from 'platform';
import { GridLayout } from "ui/layouts/grid-layout";
import { PanGestureEventData, GestureStateTypes, GestureEventData } from "ui/gestures";
import { AnimationCurve } from "ui/enums";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { getNumber } from "tns-core-modules/application-settings";
import { FileReaderService } from "../core/fileReader.service";
import { ios } from "application";
declare var UITableViewCellSelectionStyle;
import { ActivatedRoute } from "@angular/router";
import { prompt, inputType, confirm, ConfirmOptions } from "ui/dialogs";
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";
import { knownFolders, Folder, File, path } from "tns-core-modules/file-system";

@Component({
    selector: "SelectionPage",
    moduleId: module.id,
    templateUrl: "./selection_page.component.html",
    styleUrls: ["./selection_page.component.css"]
})
export class SelectionPageComponent implements OnInit {
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

    showSimple;
    showMiniQuiz;
    showDuel;

    countries: { name: string, imageSrc: string }[] = [
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" }
    ];
    //bottomTab
    onItemLoading(args: any) {
        if (ios) {
            const cell = args.ios;
            cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
        }
    }

    tabSelected(args: number) {
        console.log("tab selected: " + args);
        //show Simple Questions
        if (args == 3) {
            this.showDuel = false;
            this.showMiniQuiz = false;
            this.showSimple = true;
        }
        else {
            //show Mini Quiz
            this.showSimple = false;
            this.showDuel = false;
            if (args == 2) {
                this.showMiniQuiz = true;
            }
            else {
                //show Duel
                this.showMiniQuiz = false;
                this.showSimple = false;
                this.showDuel = true;
            }
        }
    }
    //constructor() {
    // }


    //OnInIt
    categories: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private fileReader: FileReaderService
    ) {
        this.page.actionBarHidden = true;
        this.showSimple = true;
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

    navigateToSimpleQuestions(index: number) {
        let navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'questions': JSON.stringify(this.categories[index].questions)
            }
        };
        this.routerExtensions.navigate(["/simple_questions"], navigationExtras);
    }

    navigateToBISDuel(index: number) {
        let navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'questions': JSON.stringify(this.categories[index].questions)
            }
        };
        this.routerExtensions.navigate(["/duel"], navigationExtras);
    }

    navigateToHome() {
        this.routerExtensions.navigate(["/home"])
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

    confirmTrial(){
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