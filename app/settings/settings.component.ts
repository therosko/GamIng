import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "ui/text-field/text-field";
import { Page } from "ui/page";
import { prompt, inputType } from "ui/dialogs";
import { getNumber } from "tns-core-modules/application-settings";
import { FileReaderService } from "../core/fileReader.service"
import { User } from "../services/user.model";
import { UtilityService } from '../services/utility.service'; //user for isTablet()

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})

export class SettingsComponent implements OnInit {


    listPickerFrequency: Array<string> = ["0 times", "1 times", "2 times", "3 times", "4 times",
        "5 times", "6 times", "7 times"];
    selectedListPickerIndex: number = 0;
    selectedListPickerIndex_2: number = 0;
    listPickerUnit: Array<string> = ["per day", "per week"];

    //add varriables
    @ViewChild('nickname', { static: false }) emailField: ElementRef;
    user: User;
    nicknameError = "";

    nicknameHasFocus = false;

    constructor(
        private routerExtensions: RouterExtensions,
        private utilityService: UtilityService, //used for isTablet()
        private page: Page
    ) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.nickname = "";

    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.cssClasses.add("login-page-background");
        this.page.backgroundSpanUnderStatusBar = true;
        //this.showHideIcon = this.hideIcon;
    }

    public hasNicknameErrors() {
        const hasErrorMsg = !!this.nicknameError;
        if (!hasErrorMsg)
            return false;

        const isValidNickname = this.user.nickname.length > 0;
        let hasError = hasErrorMsg || !isValidNickname;

        if (isValidNickname) {
            this.nicknameError = ""
            return false;
        }

        return hasError;
    }
    changeNickname(checkNN) {
        if (checkNN) {
            let length = this.user.nickname.length;
            if (length == 0) {
                this.nicknameError = "Nickname cannot be blank";
            } else {
                this.nicknameError = "";
            }
        }
    }

    isTablet() {
        return this.utilityService.isTablet();
    }
    back() {
        this.navigateToHome();
    }
    confirmNickname() {
        alert({
            message: "Your nickname has been changed successfully!",
            okButtonText: "Ok"
        })
    }


    // ------------------------- NAVIGATION -----------------------------

    navigateToHome() {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    }

    whatIsWhat() {
        alert({
            title: "What is What?",
            message: ("'Motivational messages' are notifications that motivate you to continue practicing. \n \n'Reminders' are notifications sent out based on your set goal. \n \n 'Duel calls' are notifications sent out when another player sends out a call for a duel. \n \n 'Duel results' are notifications sent out once another player has completed a duel created by you. \n \n 'Set a goal' allows you to set how often you aim to play the game per day/week. "),
            okButtonText: "OK"
        })
    }


}