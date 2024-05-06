export class MentalStateExam {
  id: number;
  patientId: number;
  examinerId: number;
  examDate: string;
  orientationScore: number;
  registrationScore: number;
  attentionAndCalculationScore: number;
  recallScore: number;
  languageScore: number;
  patientName: string;
  birthDate: string;
  examinerName: string;
  examinerIdentifier: string;
  totalScore: number;

  constructor(
    id: number,
    patientId: number,
    examinerId: number,
    examDate: string,
    orientationScore: number,
    registrationScore: number,
    attentionAndCalculationScore: number,
    recallScore: number,
    languageScore: number,
    patientName: string,
    birthDate: string,
    examinerName: string,
    examinerIdentifier: string,
    totalScore: number
  ) {
    this.id = id;
    this.patientId = patientId;
    this.examinerId = examinerId;
    this.examDate = examDate;
    this.orientationScore = orientationScore;
    this.registrationScore = registrationScore;
    this.attentionAndCalculationScore = attentionAndCalculationScore;
    this.recallScore = recallScore;
    this.languageScore = languageScore;
    this.patientName = patientName;
    this.birthDate = birthDate;
    this.examinerName = examinerName;
    this.examinerIdentifier = examinerIdentifier;
    this.totalScore = totalScore;
  }
}
