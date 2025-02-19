import { Routes } from '@angular/router';
import { ExamListComponent } from './components/exam-list/exam-list.component';
import { ExamFormComponent } from './components/exam-form/exam-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/exams', pathMatch: 'full' },
  { path: 'exams', component: ExamListComponent },
  { path: 'exams/new', component: ExamFormComponent },
  // Add more routes as needed
  { path: '**', redirectTo: '/exams' },
];
