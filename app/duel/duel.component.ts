import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { setNumber } from "tns-core-modules/application-settings";
import { GridLayout } from "ui/layouts/grid-layout";
//for timer
import { setTimeout, clearInterval } from "timer";
import { Color } from "tns-core-modules/color";
import { Button } from "tns-core-modules/ui/button";
import { EventData } from "tns-core-modules/data/observable";

@Component({
	selector: "duel",
	moduleId: module.id,
	templateUrl: "./duel.component.html",
	styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {

	category: string;

	questions: { question: string, options: string[], correctAnswerIndex: number }[] = [];

	currentQuestionIndex: number = 0;
	score_mq: number = 0;

	private setInterval = setInterval;
	private clearInterval = clearInterval;
	public counter = 300;

	timeLeft: number = 300;
	interval;
	display_time;
	checkYes;


	constructor(
		private route: ActivatedRoute,
		private routerExtensions: RouterExtensions,
		private page: Page
	) {
		this.page.actionBarHidden = true;
		this.startTimer()
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.category = params['category'];
			this.questions = JSON.parse(params['questions']);
		})
	}

	// -------------------------- Timer ----------------------------

	public decrease(args: EventData) {
		let button = <Button>args.object;
		button.backgroundColor = new Color("#3078FE");

		// >> settimeout-timer-code
		setTimeout(() => {
			this.counter--;
			button.backgroundColor = new Color("#30BCFF");
		}, 1000);
		// << settimeout-timer-code
	}

	startTimer() {
		this.interval = setInterval(() => {
			if (this.timeLeft > 30) {
				this.timeLeft--;
				this.checkYes = false;
			}
			else if ((this.timeLeft <= 30) && (this.timeLeft > 0)) {
				this.timeLeft--;
				this.checkYes = true;

			}
			else {
				//this.timeLeft = 60;
				this.end();
			}
			this.display_time = this.transform(this.timeLeft)
		}, 1000)
	}
	transform(value: number): string {
		const minutes: number = Math.floor(value / 60);
		return minutes + ':' + (value - minutes * 60);
	}

	pauseTimer() {
		clearInterval(this.interval);
	}

	// -------------------------- QUIZ ----------------------------

	selectAnswer(answerIndex: number, args: any) {
		let option = <GridLayout>args.object;
		if (this.questions[this.currentQuestionIndex].correctAnswerIndex == answerIndex) {
			// correct answer
			this.score_mq += 1;
			//option.backgroundColor = '#B6EB81';
			option.backgroundColor = '#a6a6a6';
		}
		else {
			// wrong answer
			//option.backgroundColor = '#ff4b60';
			option.backgroundColor = '#a6a6a6';
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

	saveMQScore() {
		let score_mqPercentage = Math.round(this.score_mq * 100 / this.questions.length);
		setNumber(this.category, score_mqPercentage);
	}

	end() {
		this.saveMQScore();
		this.navigateToMQScore();
	}

	// ------------------------- NAVIGATION -----------------------------

	navigateToMQScore() {
		let navigationExtras = {
			queryParams: {
				'score_mq': Math.round(this.score_mq * 100 / this.questions.length)
			}
		};
		this.routerExtensions.navigate(["/score_duel"], navigationExtras);
	}

	navigateToPrevious() {
		this.routerExtensions.backToPreviousPage();
	}

}