import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ExamService } from '../../services/exam.service';
import { Exam, ExamStatus } from '../../models/exam.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exam-form.component.html',
  styleUrl: './exam-form.component.scss',
})
export class ExamFormComponent {
  @Output() examCreated = new EventEmitter<Exam>();
  @Output() cancel = new EventEmitter<void>();

  examForm: FormGroup;
  examStatuses = Object.values(ExamStatus);

  constructor(
    private fb: FormBuilder,
    private examService: ExamService,
    private router: Router
  ) {
    this.examForm = this.fb.group({
      student: this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
      }),
      meeting_point: [''],
      date: [''],
      status: [ExamStatus.ToBeOrganized],
    });
  }

  onSubmit(): void {
    if (this.examForm.valid) {
      this.examService.createExam(this.examForm.value).subscribe({
        next: () => {
          this.router.navigate(['/exams']);
        },
        error: (error) => console.error('Error creating exam:', error),
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/exams']);
  }
}
