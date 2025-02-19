export interface Student {
  first_name: string;
  last_name: string;
}

export enum ExamStatus {
  ToBeOrganized = 'A organiser',
  Canceled = 'Annulé',
  LookingForPlace = 'Recherche de place',
  Confirmed = 'Confirmé',
}

export interface Exam {
  student: Student;
  meeting_point?: string;
  date?: string; // ISO format date-time
  status?: ExamStatus;
}
