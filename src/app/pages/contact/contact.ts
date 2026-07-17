import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface FaqItem {
  question: string;
  answer: string;
}

const NAME_PATTERN = /^[a-zA-Z\s]{2,}$/;
const PHONE_PATTERN = /^[\d\s\-+()]{10,}$/;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RevealDirective,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = new FormBuilder();

  readonly services = [
    { value: 'workflow-automation', label: 'Workflow Automation' },
    { value: 'custom-development', label: 'Custom Development' },
    { value: 'system-integration', label: 'System Integration' },
    { value: 'consulting', label: 'Strategic Consulting' },
    { value: 'other', label: 'Other' },
  ];

  readonly faqs: FaqItem[] = [
    {
      question: "What's your typical project timeline?",
      answer:
        'Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during the initial consultation.',
    },
    {
      question: 'Do you offer support after deployment?',
      answer:
        'Yes! We offer comprehensive post-deployment support including maintenance, bug fixes, performance optimization, and ongoing training. Support packages are customized based on your needs.',
    },
    {
      question: 'How do you handle project budget?',
      answer:
        'We offer flexible engagement models including fixed-price contracts, time-and-materials, and outcome-based pricing. Detailed cost estimates are provided after initial discovery and requirements gathering.',
    },
    {
      question: 'What industries do you serve?',
      answer:
        "We have experience across diverse industries including finance, healthcare, retail, manufacturing, logistics, and professional services. Our solutions are adaptable to any industry's unique requirements.",
    },
    {
      question: 'Can you work with existing systems?',
      answer:
        'Absolutely. Our integration expertise allows us to work seamlessly with legacy systems, modern applications, and everything in between. We ensure smooth integration without disrupting your operations.',
    },
    {
      question: "What's the initial consultation process?",
      answer:
        "We start with a discovery call to understand your business, challenges, and goals. This is followed by a detailed assessment and initial recommendations. There's no obligation, and we always maintain confidentiality.",
    },
  ];

  readonly submitting = signal(false);
  readonly submitted = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.pattern(NAME_PATTERN)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.pattern(PHONE_PATTERN)]],
    company: ['', [Validators.required]],
    service: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, [Validators.requiredTrue]],
  });

  get f() {
    return this.form.controls;
  }

  errorMessage(controlName: keyof typeof this.form.controls): string {
    const control = this.form.get(controlName);
    if (!control || !control.touched) {
      return '';
    }

    if (control.hasError('required') || control.hasError('requiredTrue')) {
      const messages: Record<string, string> = {
        name: 'Please enter your name',
        email: 'Email address is required',
        company: 'Company name is required',
        service: 'Please select a service',
        message: 'Message is required',
        privacy: 'You must agree to the privacy policy',
      };
      return messages[controlName] ?? 'This field is required';
    }

    if (control.hasError('pattern') && controlName === 'name') {
      return 'Please enter a valid name';
    }

    if (control.hasError('pattern') && controlName === 'phone') {
      return 'Please enter a valid phone number';
    }

    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }

    if (control.hasError('minlength')) {
      return 'Message must be at least 10 characters';
    }

    return '';
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
      this.form.reset({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        privacy: false,
      });

      setTimeout(() => this.submitted.set(false), 5000);
    }, 1200);
  }
}
