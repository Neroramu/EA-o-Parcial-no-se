import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-mental-state-exams',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './mental-state-exams.component.html',
  styleUrl: './mental-state-exams.component.css'
})
export class MentalStateExamsComponent {
  constructor(private http: HttpClient) {}

  exams = this.http.get<any[]>('http://localhost:3000/mental-state-exams').pipe(
    map((exams) => {
      return exams.map((exam) => {
        const totalScore =
          exam.orientationScore +
          exam.registrationScore +
          exam.attentionAndCalculationScore +
          exam.recallScore +
          exam.languageScore;
        return {
          ...exam,
          totalScore,
        };
      });
    })
  );
}
