import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface AccordionItem {
  title: string;
  body: string;
}

interface ServiceItem {
  title: string;
  description: string;
  topics: AccordionItem[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatExpansionModule, RevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly services: ServiceItem[] = [
    {
      title: 'Workflow Automation',
      description:
        'Transform manual processes into efficient automated workflows that save time and reduce errors. Our automation experts analyze your current operations and design systems that scale with your business.',
      topics: [
        {
          title: 'Process Mapping & Optimization',
          body: 'We conduct thorough analysis of your existing processes to identify bottlenecks and inefficiencies. Using industry best practices, we design optimized workflows that reduce cycle time and improve quality.',
        },
        {
          title: 'RPA Implementation',
          body: 'Robotic Process Automation (RPA) eliminates repetitive manual tasks by deploying intelligent bots. We implement RPA solutions across finance, HR, customer service, and other key departments.',
        },
        {
          title: 'Integration Services',
          body: 'Connect your disparate systems and applications through seamless integrations. We build APIs, data pipelines, and middleware solutions that enable real-time data flow and unified operations.',
        },
      ],
    },
    {
      title: 'Custom Software Development',
      description:
        'Bespoke applications built from the ground up to solve your unique business challenges. Our developers work with modern technology stacks to deliver scalable, maintainable solutions.',
      topics: [
        {
          title: 'Full-Stack Development',
          body: 'From frontend interfaces to backend systems, we develop complete applications. Our expertise spans web, mobile, and desktop platforms using technologies like React, Node.js, Python, and .NET.',
        },
        {
          title: 'Cloud Integration',
          body: 'Leverage cloud platforms like AWS, Azure, and Google Cloud to build scalable, resilient applications. We handle architecture design, migration, and optimization for maximum performance and cost efficiency.',
        },
        {
          title: 'API Design & Development',
          body: 'We design and build robust APIs that enable seamless communication between systems. RESTful and GraphQL APIs follow industry standards and best practices for security and scalability.',
        },
      ],
    },
    {
      title: 'System Integration',
      description:
        'Unify your technology infrastructure by integrating legacy and modern systems. We create data-driven organizations by connecting information silos and enabling real-time insights.',
      topics: [
        {
          title: 'Legacy System Migration',
          body: 'Modernize outdated systems without disrupting operations. We develop migration strategies that gradually transition from legacy platforms to contemporary solutions, ensuring data integrity throughout the process.',
        },
        {
          title: 'Data Synchronization',
          body: 'Keep data consistent across multiple systems in real-time. Our synchronization solutions ensure that changes in one system are instantly reflected across your entire infrastructure.',
        },
        {
          title: 'Enterprise Integration',
          body: 'Build comprehensive integration platforms that connect ERP, CRM, HRM, and specialized business applications. We implement middleware solutions that handle complex data transformations and routing.',
        },
      ],
    },
    {
      title: 'Strategic Consulting',
      description:
        'Get expert guidance on your digital transformation journey. Our consultants combine business acumen with technical expertise to develop strategies that drive real value.',
      topics: [
        {
          title: 'Digital Transformation Strategy',
          body: 'We assess your current state, define future vision, and create a roadmap for transformation. Our approach considers technology, people, and process dimensions to ensure lasting change.',
        },
        {
          title: 'Technology Assessment',
          body: 'Evaluate your current technology landscape and identify gaps. We provide recommendations on tools, platforms, and solutions that align with your business objectives and budget.',
        },
        {
          title: 'Change Management',
          body: 'Successful digital transformation requires managing organizational change. We help prepare your teams through training, communication, and support to ensure smooth adoption of new systems.',
        },
      ],
    },
  ];
}
