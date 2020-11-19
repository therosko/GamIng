import { ItemEventData } from "ui/list-view"
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { ios } from "application";
declare var UITableViewCellSelectionStyle;

@Component({
    selector: "Bookmarks",
    moduleId: module.id,
    templateUrl: "./bookmarks.component.html",
    styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
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


    onItemTap(args: ItemEventData): void {
    }

    constructor(
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private page: Page
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    onItemLoading(args: any) {
        if (ios) {
            const cell = args.ios;
            cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
        }
    }

    tabSelected(args: number) {
        console.log("tab selected: " + args);
    }

    navigateToHome() {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    }

    navigateToFavourites() {
        this.routerExtensions.navigate(["/bookmarks_fav"], { clearHistory: true });
    }

    navigateToRecommendations() {
        this.routerExtensions.navigate(["/recommendations"], { clearHistory: true });
    }

    navigateToQuestion() {
        this.routerExtensions.navigate(["/question"], { clearHistory: true });
    }

    navigateToSetting() {
        this.routerExtensions.navigate(["/settings"], { clearHistory: true });
    }


}