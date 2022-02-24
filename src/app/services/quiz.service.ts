import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      {
        id: 'data/javascript.json',
        name: 'JavaScript',
        description:
          "Now You Can Take The Java Script Exam Click Below To Continue",
        imageUrl: 'assets/images/JS.png',
      },
      {
        id: 'data/coreJava.json',
        name: 'Core Java',
        description:
          "Now You Can Take The Core Java Exam Click Below To Continue",
        imageUrl: 'assets/images/JAVA.png',
      },
      {
        id: 'data/designPatterns.json',
        name: 'Design Patterns',
        description:
          "Now You Can Take The Design Patterns Exam Click Below To Continue",
        imageUrl: 'assets/images/DP.png',
      },
      {
        id: 'data/aspnet.json',
        name: 'Asp.Net',
        description:
          "Now You Can Take The Asp.Net Exam Click Below To Continue",
        imageUrl: 'assets/images/ASP.png',
      },
    ];
  }
}
