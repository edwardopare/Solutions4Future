import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CounterDirective } from '../../shared/directives/counter.directive';

interface Offering {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatCardModule, RevealDirective, CounterDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly offerings: Offering[] = [
    {
      icon: 'settings_suggest',
      title: 'Workflow Automation',
      description:
        'Eliminate manual tasks and reduce operational bottlenecks with intelligent automation systems tailored to your business needs.',
      features: ['Process Mapping & Optimization', 'RPA Implementation', 'Integration Services'],
    },
    {
      icon: 'code',
      title: 'Custom Development',
      description:
        'Bespoke software solutions designed from the ground up to solve your unique business challenges and scale with your growth.',
      features: ['Full-Stack Development', 'Cloud Integration', 'API Design'],
    },
    {
      icon: 'hub',
      title: 'System Integration',
      description:
        'Seamlessly connect disparate systems and data sources, creating a unified ecosystem for better visibility and control.',
      features: ['Legacy System Migration', 'Data Synchronization', 'API Implementation'],
    },
    {
      icon: 'lightbulb',
      title: 'Strategic Consulting',
      description:
        'Expert guidance on digital transformation, technology selection, and implementation strategy to maximize ROI.',
      features: ['Digital Transformation', 'Technology Assessment', 'Change Management'],
    },
  ];

  readonly impactStats: ImpactStat[] = [
    { value: 250, suffix: '+', label: 'Successful Deployments' },
    { value: 45, suffix: '%', label: 'Average Cost Reduction' },
    { value: 60, suffix: '%', label: 'Efficiency Gains' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
  ];
}
