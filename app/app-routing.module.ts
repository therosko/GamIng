import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";
//should be removed with service/backend
//import { AuthGuard } from "./auth-guard.service";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    //{ path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "selection_page", loadChildren: () => import("./selection_page/selection_page.module").then(m => m.SelectionPageModule) },
    { path: "questions_mini_quiz", loadChildren: "./questions_mini_quiz/mini_quiz.module#MiniQuizModule" },
    //{ path: "score", loadChildren: "./score/score.module#ScoreMQModule" }
    { path: "score_mq", loadChildren: "./score_mq/score_mq.module#ScoreMQModule" },
    { path: "duel_chapter", loadChildren: "./duel_chapter/duel_chapter.module#DuelChapterModule" },
    { path: "score_duel", loadChildren: "./score_duel/score_duel.module#ScoreDuelModule" },
    { path: "bookmarks", loadChildren: "./bookmarks/bookmarks.module#BookmarksModule" },
    { path: "duel", loadChildren: "./duel/duel.module#DuelModule" },
    { path: "simple_questions", loadChildren: "./simple_questions/simple_questions.module#SimpleQuestionsModule" },
    { path: "recommendations", loadChildren: "./recommendations/recommendations.module#RecommendationsModule" },
    { path: "levels", loadChildren: "./levels/levels.module#LevelsModule" },
    { path: "leaderboard", loadChildren: "./leaderboard/leaderboard.module#LeaderboardModule" },
    { path: "score_sq", loadChildren: "./score_sq/score_sq.module#ScoreSQModule" },
    { path: "questions_trial_exam", loadChildren: "./questions_trial_exam/trial_exam.module#TrialExamModule" },
    { path: "score_te", loadChildren: "./score_te/score_te.module#ScoreTEModule" },
    { path: "feedback", loadChildren: "./feedback/feedback.module#FeedbackModule" },
    { path: "bookmarks_fav", loadChildren: "./bookmarks_fav/bookmarks_fav.module#BookmarksFavModule" },
    { path: "question", loadChildren: "./question/question.module#QuestionModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
