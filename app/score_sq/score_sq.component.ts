import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
	selector: "ScoreSQ",
	moduleId: module.id,
	templateUrl: "./score_sq.component.html",
	styleUrls: ['./score_sq.component.css']
})
export class ScoreSQComponent implements OnInit {

	score_mq: number;

	constructor(
		private route: ActivatedRoute,
		private routerExtensions: RouterExtensions,
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.score_mq = params['score_mq'];
		})
	}

	navigateToHome() {
		this.routerExtensions.navigate(["/home"], { clearHistory: true });
	}

	navigateToSelectionPage() {
        this.routerExtensions.navigate(["/selection_page"])
	}
	
	navigateToLevels() {
        this.routerExtensions.navigate(["/levels"])
    }

    navigateToLeaderboard() {
        this.routerExtensions.navigate(["/leaderboard"])
    }
}