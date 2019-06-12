import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService } from "../service/data/welcome-data.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  name = "";
  customMessage: string;
  errorMessage: string;
  textMessage: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: WelcomeDataService
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.params["name"];
  }

  getWelcomeMessage() {
    this.dataService
      .excuteWelcomeData(this.textMessage)
      .subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorMessage(error)
      );
  }

  handleSuccessfulResponse(response) {
    this.customMessage = response.message;
  }

  handleErrorMessage(error) {
    this.errorMessage = error.error.message;
  }
}
