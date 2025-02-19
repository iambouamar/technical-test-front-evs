import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Exam } from '../models/exam.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private apiUrl = `${environment.apiUrl}/api/exams`;

  constructor(private http: HttpClient) {}

  /**
   * Get all exams from the server
   */
  getExams(): Observable<Exam[]> {
    return this.http
      .get<Exam[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  /**
   * Create a new exam
   * @param exam The exam data to create
   */
  createExam(exam: Exam): Observable<Exam> {
    return this.http
      .post<Exam>(this.apiUrl, exam)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
