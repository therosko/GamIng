//check out - https://play.nativescript.org/?template=play-ng&id=3miads&v=1

import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { TextField } from "ui/text-field/text-field";
import { Page } from "ui/page";
import { prompt, inputType } from "ui/dialogs";

import { isAndroid, device } from "platform";
import * as app from "application";

import { UtilityService } from '../services/utility.service';
import { User } from "../services/user.model";

@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

    @ViewChild('password', { static: false }) passwordField: ElementRef;
    @ViewChild('email', { static: false }) emailField: ElementRef;

    user: User;
    isAuthenticating = false;

    public hideIcon = String.fromCharCode(0xf070);
    public showIcon = String.fromCharCode(0xf06e);
    public showHideIcon: any;
    private showPassword = false;

    emailError = "";
    passError = "";
    loginError = "";

    emailHasFocus = false;
    passHasFocus = false;

    constructor(
        private utilityService: UtilityService,
        private page: Page,
        private routerExtensions: RouterExtensions,
    ) {
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.cssClasses.add("login-page-background");
        this.page.backgroundSpanUnderStatusBar = true;
        this.showHideIcon = this.hideIcon;

        /*
        if (isAndroid && device.sdkVersion >= '21') {
            var View = android.view.View;
            var window = app.android.startActivity.getWindow();
            window.setStatusBarColor(0x000000);

            var decorView = window.getDecorView();
            decorView.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
        }  */
    }

    public hasEmailErrors() {
        const hasErrorMsg = !!this.emailError;
        if (!hasErrorMsg)
            return false;

        const isValidEmail = this.user.hasEmail() && this.utilityService.isValidEmail(this.user.email);
        let hasError = hasErrorMsg || !isValidEmail;

        if (isValidEmail) {
            this.emailError = ""
            return false;
        }

        return hasError;
    }

    public hasPasswordErrors() {
        const hasErrorMsg = !!this.passError;
        if (!hasErrorMsg)
            return false;

        const isValidPassword = this.user.password.length > 0;
        let hasError = hasErrorMsg || !isValidPassword;

        if (isValidPassword) {
            this.passError = ""
            return false;
        }

        return hasError;
    }

    getEmailError() {
        return this.emailError;
    }

    getPasswordError() {

        return this.passError;
    }

    onEmailFocus() {
        this.emailHasFocus = true;
    }

    onPasswordFocus() {
        this.passHasFocus = true;

        this.updateErrors(false);
    }

    updateErrors(checkPass) {
        if (this.user.hasEmail()) {
            if (this.utilityService.isValidEmail(this.user.email)) {
                this.emailError = "";
            } else {
                this.emailError = "Invalid Email"
            }
        } else {
            this.emailError = "Email cannot be blank"
        }

        if (checkPass) {
            let length = this.user.password.length;
            if (length == 0) {
                this.passError = "Password cannot be blank";
            } else {
                this.passError = "";
            }
        }
    }

    hasLoginErrors() {
        return !!this.loginError;
    }

    getLoginError() {
        return this.loginError;
    }

    private isValidForm() {
        let isValid = !!this.emailError || !!this.passError;
        return !isValid;
    }

    showHidePassword() {
        this.showPassword = !this.showPassword;
        this.showHideIcon = this.showPassword ? this.showIcon : this.hideIcon;
        let passField: TextField = this.passwordField.nativeElement;
        passField.secure = !passField.secure;
    }

    login() {
        prompt({
            title: "Nickname",
            message: "Chose your nickname for the game.",
            defaultText: "",
            okButtonText: "Go",
            inputType: inputType.text
        }).then(() => {
            // define nickname and pass it to the next page
            this.routerExtensions.navigate(['/home']);


        });

        /*this.updateErrors(true);

        if (this.isValidForm()) {
            this.isAuthenticating = true;
            prompt({
                title: "Nickname",
                message: "Chose your nickname for the game.",
                defaultText: "",
                okButtonText: "Go",
                inputType: inputType.text
            }).then(() => {
                // define nickname and pass it to the next page
                this.routerExtensions.navigate(['home']);


            });

            // Use the backend service to login
            /* this.backendService.loginWithKinvey(this.user)
                .then(() => {
                    this.isAuthenticating = false;
                    this.routerExtensions.navigate(["/home"], { clearHistory: true });
                }).catch(error => {
                    this.isAuthenticating = false;
                    this.loginError = error.message;
                    */
        //}
    }

    isSubmitEnabled() {
        return !this.isAuthenticating && this.utilityService.isValidEmail(this.user.email);
    }

    isTablet() {
        return this.utilityService.isTablet();
    }

    howToLogin() {
        alert({
            title: "How to login?",
            message: ("Use your WU Student email to login (e.g. h01234567@wu.ac.at)"),
            okButtonText: "OK"
        })
    }
}