import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../models/exam.model';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';
import { ICONS } from '../../shared/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './exam-list.component.html',
  styleUrl: './exam-list.component.scss',
})
export class ExamListComponent implements OnInit {
  exams: Exam[] = [];
  error: string = '';
  icons = ICONS;

  constructor(private examService: ExamService, private router: Router) {}

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams(): void {
    this.examService.getExams().subscribe({
      next: (exams) => (this.exams = exams),
      error: (error) => (this.error = error),
    });
  }

  onExamCreated(exam: Exam): void {
    this.loadExams();
  }

  navigateToCreate(): void {
    this.router.navigate(['/exams/new']);
  }

  getStatusIcon(status: string | undefined): string {
    switch (status) {
      case 'Recherche de place':
        return this.icons.STATUS_SEARCH;
      case 'Confirmé':
        return this.icons.STATUS_CONFIRMED;
      case 'A organiser':
        return this.icons.STATUS_ORGANIZE;
      case 'Annulé':
        return this.icons.STATUS_CANCELED;
      default:
        return '';
    }
  }
}
