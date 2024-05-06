import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { MentalStateExam } from "../models/mental-state-exam.model";
import { map } from "rxjs/operators";
import {BaseService} from "../../shared/services/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class MentalStateExamService extends BaseService<MentalStateExam> {
  private baseUrl = 'http://localhost:3000/mental-state-exams';

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = 'mental-state-exams';
  }

  getAllExams(): Observable<MentalStateExam[]> {
    return this._http.get<MentalStateExam[]>(this.baseUrl).pipe(
      map((exams: MentalStateExam[]) => {
        return exams.map((exam: MentalStateExam) => {
          const totalScore =
            exam.orientationScore +
            exam.registrationScore +
            exam.attentionAndCalculationScore +
            exam.recallScore +
            exam.languageScore;
          return {
            ...exam,
            totalScore
          }
        });
      })
    );
  }
}
