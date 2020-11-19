import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { setNumber } from "tns-core-modules/application-settings";
import { GridLayout } from "ui/layouts/grid-layout";
import { setTimeout } from "timer";
import { prompt, inputType, confirm } from "ui/dialogs";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
	selector: "simple_questions",
	moduleId: module.id,
	templateUrl: "./simple_questions.component.html",
	styleUrls: ['./simple_questions.component.css']
})
export class SimpleQuestionsComponent implements OnInit {

	category: string;

	questions: { question: string, options: string[], correctAnswerIndex: number }[] = [];

	currentQuestionIndex: number = 0;
	score_mq: number = 0;
	showDetails;
	checkCorrect;


	constructor(
		private route: ActivatedRoute,
		private routerExtensions: RouterExtensions,
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}

	ngOnInit(): void {
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
			this.score_mq += 1;
			option.backgroundColor = '#B6EB81';
			//option.backgroundColor = '#a6a6a6';
			//this.showDetails = true;
			this.checkCorrect = true
		}
		else {
			// wrong answer
			option.backgroundColor = '#ff4b60';
			//option.backgroundColor = '#a6a6a6';
			//this.showDetails = true;
			this.checkCorrect = false
		}
		this.showDetails = true;
	}
	goNext() {
		if (this.currentQuestionIndex == this.questions.length - 1) {
			this.end();
		}
		else {
			//this.currentQuestionIndex += 1;
			this.showDetails = false;
			this.currentQuestionIndex += 1;
		}
	}

	saveMQScore() {
		let score_mqPercentage = Math.round(this.score_mq * 100 / this.questions.length);
		setNumber(this.category, score_mqPercentage);
	}

	getComment() {
		confirm({
			title: "Comment",
			message: "This is some comment about the question",
			okButtonText: "Bookmark",
			cancelButtonText: "OK"
		}).then(() => {
			// same bookmark
			console.log(`Saved bookmark!`);


		});
	}



	end() {
		this.saveMQScore();
		this.navigateToSQScore();
	}

	// ------------------------- NAVIGATION -----------------------------

	navigateToSQScore() {
		let navigationExtras = {
			queryParams: {
				'score_mq': Math.round(this.score_mq * 100 / this.questions.length)
			}
		};
		this.routerExtensions.navigate(["/score_sq"], navigationExtras);
	}

	navigateToPrevious() {
		this.routerExtensions.backToPreviousPage();
	}

	getHint() {
		alert({
			title: "Hint",
			message: ("This question relates to chapteer 2.3."),
			okButtonText: "OK"
		})
	}
	getFeedback() {
		this.routerExtensions.navigate(["/feedback"], { clearHistory: true });
	}


}