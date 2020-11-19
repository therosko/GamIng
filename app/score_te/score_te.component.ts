import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
	selector: "ScoreTE",
	moduleId: module.id,
	templateUrl: "./score_te.component.html",
	styleUrls: ['./score_te.component.css']
})
export class ScoreTEComponent implements OnInit {

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
}