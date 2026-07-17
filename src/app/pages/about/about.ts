import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface HighlightItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatCardModule, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly mission =
    'We design, develop, and deploy world-class software and intelligent automation solutions that solve complex organizational challenges, drive operational excellence, enhance productivity, and create sustainable value for businesses and society.';

  readonly vision =
    "To be Africa's leading autonomics company, delivering world-class technology solutions that inspire global excellence.";

  readonly values: ValueItem[] = [
    {
      icon: 'lightbulb',
      title: 'Innovation',
      description:
        'We embrace creativity, emerging technologies, and continuous improvement to develop solutions that solve real-world challenges and drive transformation.',
    },
    {
      icon: 'star',
      title: 'Excellence',
      description:
        'We pursue the highest standards in quality, performance, and service, delivering reliable solutions that exceed expectations.',
    },
    {
      icon: 'groups',
      title: 'Customer-Centricity',
      description:
        'We place our clients and users at the heart of everything we do, designing solutions that create meaningful value and lasting success.',
    },
    {
      icon: 'handshake',
      title: 'Integrity',
      description:
        'We act with honesty, accountability, and transparency, earning trust through ethical business practices and responsible stewardship of data.',
    },
    {
      icon: 'public',
      title: 'Impact',
      description:
        'We leverage technology to create positive economic, social, and organizational change, contributing to sustainable growth and development.',
    },
    {
      icon: 'diversity_3',
      title: 'Collaboration',
      description:
        'We believe great ideas emerge through teamwork, partnerships, and diverse perspectives, both within our organization and with our stakeholders.',
    },
    {
      icon: 'bolt',
      title: 'Agility',
      description:
        'We adapt quickly to changing technologies, market demands, and customer needs, enabling us to innovate and deliver results in a dynamic world.',
    },
    {
      icon: 'volunteer_activism',
      title: 'Inclusivity',
      description:
        'We build accessible, user-friendly technology that leaves no one behind, regardless of age, education, or digital literacy.',
    },
  ];

  readonly timeline: TimelineItem[] = [
    {
      year: '2015',
      title: 'Founded',
      description:
        'Solutions4Future was established with a vision to transform business through intelligent automation and custom software development.',
    },
    {
      year: '2017',
      title: '50+ Successful Projects',
      description:
        'Milestone achievement in delivering automation solutions to enterprise clients across multiple industries.',
    },
    {
      year: '2019',
      title: 'Expanded to Cloud Solutions',
      description:
        'Added comprehensive cloud integration services, enabling clients to leverage AWS, Azure, and Google Cloud platforms.',
    },
    {
      year: '2021',
      title: '150+ Projects Delivered',
      description:
        'Reached significant milestone serving clients globally, with collective value delivery exceeding $50M in cost savings.',
    },
    {
      year: '2023',
      title: '250+ Deployments Achieved',
      description:
        'Continued expansion with focus on AI-driven automation and advanced integration platforms for enterprise clients.',
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description:
        'Recognized as a leading automation and development partner, continuing to innovate in digital transformation strategies.',
    },
  ];

  readonly highlights: HighlightItem[] = [
    {
      title: 'Expert Team',
      description:
        'Our consultants, developers, and architects bring decades of combined experience in enterprise automation and software development.',
    },
    {
      title: 'Proven Methodology',
      description:
        'We follow industry-standard frameworks and best practices to ensure projects are delivered on time, within budget, and exceeding expectations.',
    },
    {
      title: 'Client-Centric Approach',
      description:
        'Every engagement starts with deep understanding of your business. We customize solutions rather than apply one-size-fits-all approaches.',
    },
    {
      title: 'Continuous Support',
      description:
        "Our relationship doesn't end at deployment. We provide ongoing support, maintenance, and optimization to maximize your ROI.",
    },
  ];
}
