import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: "root"
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  excuteWelcomeData(textMessage: string) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/helloWorld/${textMessage}`
    );
  }

  createBasicAuthenticationHttpHeader() {
    let username = "fullStackUser";
    let password = "yy";
    let basicAuthHeaderString =
      "Basic " + window.btoa(username + ":" + password);

    return basicAuthHeaderString;
  }
}
